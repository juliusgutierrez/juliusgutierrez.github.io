'use strict';
/* Sahod — Phase 1: offline-first, IndexedDB only.
   Records carry id/updatedAt/deleted so Phase 2 cloud sync can diff them. */

// ---------- helpers ----------
const $ = s => document.querySelector(s);
const uuid = () => (crypto.randomUUID ? crypto.randomUUID() :
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0; return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  }));
const P = n => '₱' + (n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const P0 = n => '₱' + Math.round(n || 0).toLocaleString('en-US');
const todayISO = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

// ---------- cutoffs (6th & 21st, Jul 2026 → Dec 2027) ----------
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const CUTOFFS = [];
for (let y = 2026; y <= 2027; y++)
  for (let m = (y === 2026 ? 6 : 0); m < 12; m++)
    for (const d of [6, 21])
      CUTOFFS.push({ id: `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`,
                     label: `${MONTHS[m]} ${d}`, sub: `${y} cutoff` });

function cutoffFromDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  let cy = y, cm = m, cd;
  if (d >= 21) cd = 21;
  else if (d >= 6) cd = 6;
  else { cd = 21; cm = m - 1; if (cm === 0) { cm = 12; cy = y - 1; } }
  const id = `${cy}-${String(cm).padStart(2, '0')}-${String(cd).padStart(2, '0')}`;
  const i = CUTOFFS.findIndex(c => c.id === id);
  return i >= 0 ? id : (id < CUTOFFS[0].id ? CUTOFFS[0].id : CUTOFFS[CUTOFFS.length - 1].id);
}

// ---------- IndexedDB ----------
let db;
function openDB() {
  return new Promise((res, rej) => {
    const rq = indexedDB.open('sahod', 1);
    rq.onupgradeneeded = e => {
      const d = e.target.result;
      d.createObjectStore('tx', { keyPath: 'id' });
      d.createObjectStore('kv', { keyPath: 'k' });
    };
    rq.onsuccess = e => { db = e.target.result; res(); };
    rq.onerror = () => rej(rq.error);
  });
}
const idb = {
  put: (store, val) => new Promise((res, rej) => {
    const t = db.transaction(store, 'readwrite'); t.objectStore(store).put(val);
    t.oncomplete = res; t.onerror = () => rej(t.error);
  }),
  all: store => new Promise((res, rej) => {
    const rq = db.transaction(store).objectStore(store).getAll();
    rq.onsuccess = () => res(rq.result); rq.onerror = () => rej(rq.error);
  })
};

// ---------- state ----------
const DEFAULTS = {
  k: 'settings',
  envelopes: [
    { id: 'psb', name: 'PSBank Savings', budget: 30000 },
    { id: 'vul', name: 'VUL', budget: 1000 },
    { id: 'jul', name: 'Julius', budget: 13500 },
    { id: 'mab', name: 'Mabelle', budget: 6000 },
    { id: 'yan', name: 'Yana', budget: 5500 },
    { id: 'gro', name: 'Groceries', budget: 10000 },
    { id: 'sub', name: 'Subscriptions', budget: 2575 },
    { id: 'uti', name: 'Utilities', budget: 0 },
    { id: 'buf', name: 'Buffer / Others', budget: 0 }
  ],
  accounts: ['Wallet', 'BPI', 'PSBank'],
  paid: ['Cash', 'GCash', 'Bank', 'Card'],
  overrides: {}   // { cutoffId: { envId: amount } }
};

const S = {
  settings: null, txs: [],
  amount: '', env: null, acct: 'Wallet', pay: 'Cash',
  cutoff: cutoffFromDate(todayISO()),
  planMode: 'default'   // 'default' | 'cutoff'
};

const env = id => S.settings.envelopes.find(e => e.id === id);
const budgetOf = (envId, cutoffId) => {
  const o = S.settings.overrides[cutoffId];
  if (o && o[envId] != null) return o[envId];
  const e = env(envId); return e ? e.budget : 0;
};
const live = () => S.txs.filter(t => !t.deleted);
const spentOf = (envId, cutoffId) =>
  live().filter(t => t.envelopeId === envId && t.cutoffId === cutoffId)
        .reduce((a, t) => a + t.amount, 0);

async function saveSettings() { await idb.put('kv', S.settings); }

// ---------- Quick Add ----------
function renderAmount() {
  const el = $('#amount');
  const v = S.amount;
  if (!v) { el.innerHTML = '<span class="peso">₱</span>0'; el.classList.add('zero'); return; }
  el.classList.remove('zero');
  const [i, dec] = v.split('.');
  const fi = (Number(i) || 0).toLocaleString('en-US');
  el.innerHTML = '<span class="peso">₱</span>' + fi + (v.includes('.') ? '.' + (dec || '') : '');
}
function key(k) {
  if (k === '⌫') { S.amount = S.amount.slice(0, -1); }
  else if (k === '.') { if (!S.amount.includes('.')) S.amount = (S.amount || '0') + '.'; }
  else {
    const [i, dec] = S.amount.split('.');
    if (S.amount.includes('.')) { if ((dec || '').length < 2) S.amount += k; }
    else if (i.length < 7) S.amount = (S.amount === '0' ? '' : S.amount) + k;
  }
  renderAmount();
}
function renderEnvChips() {
  const co = cutoffFromDate($('#txdate').value || todayISO());
  $('#envchips').innerHTML = S.settings.envelopes.map(e => {
    const rem = budgetOf(e.id, co) - spentOf(e.id, co);
    return `<button class="chip ${S.env === e.id ? 'sel' : ''} ${rem < 0 ? 'overq' : ''}" data-env="${e.id}">
      <b>${e.name}</b><span>${rem < 0 ? P0(-rem) + ' over' : P0(rem) + ' left'}</span></button>`;
  }).join('');
}
function renderSeg(sel, items, cur, attr) {
  $(sel).innerHTML = items.map(x =>
    `<button class="chip ${x === cur ? 'sel' : ''}" data-${attr}="${x}"><b>${x}</b></button>`).join('');
}
function renderAdd() {
  const d = $('#txdate').value || todayISO();
  const co = cutoffFromDate(d);
  $('#cotag').textContent = CUTOFFS.find(c => c.id === co).label;
  $('#r-no').textContent = 'SAHOD·' + String(live().length + 1).padStart(3, '0');
  renderAmount(); renderEnvChips();
  renderSeg('#acctchips', S.settings.accounts, S.acct, 'acct');
  renderSeg('#paychips', S.settings.paid, S.pay, 'pay');
}
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 1700);
}
async function saveTx() {
  const amt = parseFloat(S.amount);
  if (!amt || amt <= 0) return toast('Enter an amount');
  if (!S.env) return toast('Pick an envelope');
  const dateISO = $('#txdate').value || todayISO();
  const t = {
    id: uuid(), dateISO, cutoffId: cutoffFromDate(dateISO),
    envelopeId: S.env, account: S.acct, paid: S.pay,
    note: $('#note').value.trim(), amount: amt,
    updatedAt: Date.now(), deleted: 0
  };
  S.txs.push(t); await idb.put('tx', t);
  S.amount = ''; $('#note').value = '';
  toast(`Saved · ${env(S.env).name} ${P(amt)}`);
  renderAdd();
}

// ---------- Tracker ----------
function statusOf(b, s) {
  if (b === 0) return s > 0 ? 'over' : null;
  if (s > b) return 'over';
  if (s === b) return 'used';
  if (s / b >= 0.9) return 'watch';
  return 'ok';
}
const STLABEL = { ok: 'OK', watch: 'WATCH', used: 'USED UP', over: 'OVER' };
function renderTracker() {
  const co = S.cutoff, cdef = CUTOFFS.find(c => c.id === co);
  for (const [l, s] of [['#colabel', '#cosub'], ['#colabel2', '#cosub2']]) {
    $(l).textContent = cdef.label; $(s).textContent = cdef.sub;
  }
  let tb = 0, ts = 0;
  $('#envlist').innerHTML = S.settings.envelopes.map(e => {
    const b = budgetOf(e.id, co), sp = spentOf(e.id, co), rem = b - sp;
    tb += b; ts += sp;
    const st = statusOf(b, sp);
    const pct = b > 0 ? Math.min(100, sp / b * 100) : (sp > 0 ? 100 : 0);
    return `<div class="env">
      <div class="top"><b>${e.name}</b>${st ? `<span class="st ${st}">${STLABEL[st]}</span>` : ''}</div>
      <div class="nums"><span>Spent <b>${P(sp)}</b> of ${P0(b)}</span>
        <span class="rem ${rem < 0 ? 'neg' : ''}">${rem < 0 ? P(-rem) + ' over' : P(rem) + ' left'}</span></div>
      <div class="bar"><i class="${st || ''}" style="width:${pct}%"></i></div>
    </div>`;
  }).join('');
  $('#k-bud').textContent = P0(tb);
  $('#k-spent').textContent = P0(ts);
  $('#k-left').textContent = P0(tb - ts);
  $('#k-left-w').classList.toggle('neg', tb - ts < 0);
  const cc = live().filter(t => t.cutoffId === co && t.paid === 'Card').reduce((a, t) => a + t.amount, 0);
  $('#ccamt').textContent = P(cc);
}

// ---------- History ----------
function renderHistory() {
  const rows = live().filter(t => t.cutoffId === S.cutoff)
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO) || b.updatedAt - a.updatedAt);
  if (!rows.length) {
    $('#histlist').innerHTML = `<div class="empty">No entries for this cutoff yet.<br>Log your first expense from the Add tab.</div>`;
    return;
  }
  let html = '', lastDay = '';
  for (const t of rows) {
    if (t.dateISO !== lastDay) {
      lastDay = t.dateISO;
      const [y, m, d] = t.dateISO.split('-').map(Number);
      html += `<div class="dayhead">${MONTHS[m - 1]} ${d}, ${y}</div>`;
    }
    const e = env(t.envelopeId);
    html += `<div class="tx">
      <div class="mid"><b>${e ? e.name : '(deleted envelope)'}</b>
        <span>${t.account} · ${t.paid}${t.note ? ' · ' + t.note : ''}</span></div>
      <div class="amt">${P(t.amount)}</div>
      <button class="del" data-del="${t.id}">✕</button>
    </div>`;
  }
  $('#histlist').innerHTML = html;
}
async function delTx(id) {
  const t = S.txs.find(x => x.id === id);
  if (!t || !confirm(`Delete ${P(t.amount)} (${env(t.envelopeId)?.name || ''})?`)) return;
  t.deleted = 1; t.updatedAt = Date.now();
  await idb.put('tx', t);
  renderHistory(); toast('Deleted');
}
function exportCSV() {
  const esc = s => '"' + String(s ?? '').replace(/"/g, '""') + '"';
  const lines = ['date,cutoff,envelope,account,paid_with,note,amount'];
  for (const t of live())
    lines.push([t.dateISO, CUTOFFS.find(c => c.id === t.cutoffId)?.label || t.cutoffId,
      env(t.envelopeId)?.name || t.envelopeId, t.account, t.paid, esc(t.note), t.amount].join(','));
  const blob = new Blob([lines.join('\n')], { type: 'text/csv' });
  const file = new File([blob], 'sahod-export.csv', { type: 'text/csv' });
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    navigator.share({ files: [file], title: 'Sahod export' }).catch(() => {});
  } else {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'sahod-export.csv';
    document.body.appendChild(a); a.click(); a.remove();
  }
}

// ---------- Plan ----------
function renderPlan() {
  const cdef = CUTOFFS.find(c => c.id === S.cutoff);
  $('#planmode').innerHTML =
    `<button class="chip ${S.planMode === 'default' ? 'sel' : ''}" data-pm="default"><b>Default plan</b></button>
     <button class="chip ${S.planMode === 'cutoff' ? 'sel' : ''}" data-pm="cutoff"><b>${cdef.label} only</b></button>`;
  let total = 0;
  $('#planlist').innerHTML = S.settings.envelopes.map(e => {
    const v = S.planMode === 'default' ? e.budget : budgetOf(e.id, S.cutoff);
    total += v;
    return `<div class="planrow"><b>${e.name}</b>
      <input type="number" inputmode="decimal" min="0" step="1" value="${v}" data-plan="${e.id}">
      <button class="x" data-delenv="${e.id}">✕</button></div>`;
  }).join('');
  $('#plantotal').textContent = P0(total);
}
async function setBudget(envId, val) {
  const v = Math.max(0, parseFloat(val) || 0);
  if (S.planMode === 'default') { const e = env(envId); if (e) e.budget = v; }
  else {
    if (!S.settings.overrides[S.cutoff]) S.settings.overrides[S.cutoff] = {};
    S.settings.overrides[S.cutoff][envId] = v;
  }
  await saveSettings();
  let total = 0;
  for (const e of S.settings.envelopes)
    total += S.planMode === 'default' ? e.budget : budgetOf(e.id, S.cutoff);
  $('#plantotal').textContent = P0(total);
}
async function addEnvelope() {
  const name = $('#newenv').value.trim();
  if (!name) return;
  S.settings.envelopes.push({ id: uuid().slice(0, 8), name, budget: 0 });
  $('#newenv').value = '';
  await saveSettings(); renderPlan(); toast('Envelope added');
}
async function delEnvelope(id) {
  const e = env(id); if (!e) return;
  const used = live().some(t => t.envelopeId === id);
  if (!confirm(`Remove envelope "${e.name}"?` + (used ? ' Past entries keep their history.' : ''))) return;
  S.settings.envelopes = S.settings.envelopes.filter(x => x.id !== id);
  if (S.env === id) S.env = null;
  await saveSettings(); renderPlan(); toast('Removed');
}

// ---------- navigation & events ----------
function show(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  $('#view-' + view).classList.add('active');
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('on', b.dataset.view === view));
  if (view === 'add') renderAdd();
  if (view === 'track') renderTracker();
  if (view === 'hist') renderHistory();
  if (view === 'plan') renderPlan();
  window.scrollTo(0, 0);
}
function moveCutoff(dir) {
  const i = CUTOFFS.findIndex(c => c.id === S.cutoff);
  const n = Math.min(CUTOFFS.length - 1, Math.max(0, i + dir));
  S.cutoff = CUTOFFS[n].id;
  renderTracker(); renderHistory();
  if ($('#view-plan').classList.contains('active')) renderPlan();
}

async function init() {
  await openDB();
  const kv = await idb.all('kv');
  S.settings = kv.find(x => x.k === 'settings') || null;
  if (!S.settings) { S.settings = JSON.parse(JSON.stringify(DEFAULTS)); await saveSettings(); }
  if (!S.settings.overrides) S.settings.overrides = {};
  S.txs = await idb.all('tx');
  $('#txdate').value = todayISO();
  renderAdd(); renderTracker();

  document.querySelectorAll('nav button').forEach(b => b.onclick = () => show(b.dataset.view));
  $('#pad').addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) key(b.dataset.k); });
  $('#save').onclick = saveTx;
  $('#txdate').onchange = renderAdd;
  $('#envchips').addEventListener('click', e => {
    const b = e.target.closest('[data-env]'); if (!b) return;
    S.env = b.dataset.env; renderEnvChips();
  });
  $('#acctchips').addEventListener('click', e => {
    const b = e.target.closest('[data-acct]'); if (!b) return;
    S.acct = b.dataset.acct; renderSeg('#acctchips', S.settings.accounts, S.acct, 'acct');
  });
  $('#paychips').addEventListener('click', e => {
    const b = e.target.closest('[data-pay]'); if (!b) return;
    S.pay = b.dataset.pay; renderSeg('#paychips', S.settings.paid, S.pay, 'pay');
  });
  $('#prevco').onclick = () => moveCutoff(-1); $('#nextco').onclick = () => moveCutoff(1);
  $('#prevco2').onclick = () => moveCutoff(-1); $('#nextco2').onclick = () => moveCutoff(1);
  $('#histlist').addEventListener('click', e => {
    const b = e.target.closest('[data-del]'); if (b) delTx(b.dataset.del);
  });
  $('#exportcsv').onclick = exportCSV;
  $('#planmode').addEventListener('click', e => {
    const b = e.target.closest('[data-pm]'); if (!b) return;
    S.planMode = b.dataset.pm; renderPlan();
  });
  $('#planlist').addEventListener('change', e => {
    if (e.target.dataset.plan) setBudget(e.target.dataset.plan, e.target.value);
  });
  $('#planlist').addEventListener('click', e => {
    const b = e.target.closest('[data-delenv]'); if (b) delEnvelope(b.dataset.delenv);
  });
  $('#addenv').onclick = addEnvelope;
}
init();
