# Sahod — Cutoff Tracker (Phase 1)

Offline-first envelope budgeting PWA for semi-monthly (cutoff) budgeting.
No App Store, no developer license, no build step, no dependencies. Total cost: ₱0.

## What's inside

| File | Purpose |
|---|---|
| `index.html` | UI + styles |
| `app.js` | Logic + IndexedDB storage |
| `sw.js` | Service worker (offline caching) |
| `manifest.webmanifest` | Makes it installable to the home screen |
| `icon-*.png`, `apple-touch-icon.png` | App icons |

## Deploy free on GitHub Pages (~5 minutes)

1. Create a GitHub account (free) if you don't have one.
2. Create a new **public** repository, e.g. `sahod`.
3. Upload all files in this folder (repo page → *Add file → Upload files*).
4. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.
5. Wait ~1 minute. Your app is live at `https://YOURNAME.github.io/sahod/`.

## Install on your iPhone

1. Open the URL in **Safari** (must be Safari).
2. Tap **Share** (square with arrow) → **Add to Home Screen** → Add.
3. Launch from the icon. It runs full-screen and **works with no internet** after the first load.

## Phase 1 features

- **Add** — receipt-style quick entry: keypad, envelope chips (with live "left" amounts), account, paid-with, note. Cutoff is auto-derived from the date (6th–20th → the 6 cutoff; 21st–5th → the 21 cutoff).
- **Cutoff** — budget vs. actual per envelope with progress bars and OK / WATCH / USED UP / OVER states, plus card-spend total.
- **History** — entries per cutoff, delete, CSV export (Share sheet on iPhone).
- **Plan** — edit the default budget, or override amounts for one specific cutoff (e.g., Subscriptions ₱5,575 on Jul 21). Add/remove envelopes.

## Data & Phase 2

All data is stored on-device in IndexedDB. Every record already carries `id`,
`updatedAt`, and soft-`deleted` fields, so Phase 2 (Firebase sync + login) can
diff and merge without a schema change. Until then, export CSV occasionally as
your backup.

Tip: after you update the app files in GitHub, bump `V = 'sahod-v1'` in `sw.js`
(v2, v3, …) so phones fetch the new version.
