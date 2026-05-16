# Website Modernization — Task Tracker

Landing-page redesign based on `mock_design/mock_design.png` and `mock_design/assets_templates.png`.
Stack: React + Vite + MUI. Scope: landing page only (hero → services → projects → CTA → footer).

## Tasks

- [x] **Theme** — rework `src/theme.js` + `src/index.css` to navy/blue palette
- [x] **Primitives** — `Section`, `SectionHeading`, `Highlight` reusable components
- [x] **NavBar** — sticky bar, logo, nav links, CTA, mobile drawer
- [x] **Hero** — full-bleed background image + overlaid headline + CTAs
- [x] **Services** — `ServiceCard` + Services section grid
- [x] **Projects** — `ProjectCard` + Projects section grid
- [x] **CTASection** — "Let's build something great" band + `SocialLinks`
- [x] **Footer** — logo, copyright, social links
- [x] **Data** — add `services`, `projects`, `navLinks`, `socials` to `src/data.js`
- [x] **Assembly** — wire sections in `src/App.jsx`, remove `SectionCard.jsx`
- [ ] **Responsive QA** — mobile / tablet / desktop (visual check in `npm run dev`)
- [x] **Build** — `npm run build` passes

## Notes

- `public/cv.pdf` — drop the real CV file here (hero "Download CV" links to `/cv.pdf`).
- `public/projects/{warehouse,payments,monitoring}.jpg` — drop project images here;
  `ProjectCard` shows a gradient placeholder until they exist.
- Existing `roles` / `skills` / `education` / `summary` in `data.js` kept for a future resume route.
