# Draconis Engineering — Roadmap

## v1.0 — Current

- [x] Stack: Astro 7 + TypeScript strict + React islands + Tailwind 4 + MDX + Lucide + sitemap
- [x] Config: `site: https://draconis-engineering.com`, `output: static`, `sharp` image service, `public/CNAME`
- [x] Design tokens: `--color-draconis-gold #c9a86a`, bg `#070a0c`, mono `JetBrains Mono` + display `Geist/Space Grotesk`
- [x] Layout: `BaseLayout.astro`, `Header.astro` (logo, nav HOME/PROJECTS/ABOUT/DOCS/BLOG, gold underline, mobile drawer, right tagline), `Footer.astro`, `HUD` lines/coordinates/crosshair
- [x] Hero: `Hero.astro` — full-bleed dragon via `astro:assets` (`widths 640/1024/1600/2400`, `webp+avif`, `eager`, `fetchpriority high` — 1913kB → 26/55/104kB), gradients, vignette, cheap smoke drift (CSS `drift` 24s), grain, `龍` vertical
- [x] Cards: `ProjectCard.tsx` React island — accent gold/blue/red/violet/emerald/cyan, hover glow, wireframe SVG preview
- [x] `index.astro`: hero + 3 featured (Olympus/Dracolix/Icarus) + `BUILT IN THE OPEN` strip + ecosystem grid (6 projects: Olympus, DragonQuant, Draconomicon, DuraPy, Icarus, DraconiForge) + CTAs
- [x] Stubs: `/projects` (all 7 inc. Dracolix), `/about`, `/docs`, `/blog` — same header/footer, mono, "in development" pattern — no 404s
- [x] Deploy: `.github/workflows/deploy.yml` (setup-node 22, `npm ci` → `build` → `upload-pages-artifact` → `deploy-pages`), sitemap-index

## v1.1 — Next

- Volumetric smoke / cloud parallax with `Three.js` (or `motion` + shader) — scroll-linked dragon depth, not just CSS drift
- Real content collections: `src/content/{docs,blog,projects}.config.ts` + MDX rendering (replace stubs), `content Collections` API
- Org integration: fetch stars/contributors from GitHub API at build, auto-populate project links
- View Transitions (`astro:transitions`), OG image generation, `Astro Image` art-direction crop for mobile hero
- SEO: JSON-LD, RSS, `astro:seo` polish, Lighthouse 95+

## v2.0 — Beyond

- Interactive Draconis SVG / mask morphs, lab journal, auth-gated tools
- i18n if needed, search (`pagefind`)
- [ ] Privacy policy page
- [ ] Get svg logo
- [ ] Fill robots.txt, llms.txt, sitemap.xml, meta tags,
- [ ] 404 page
- [ ] Error page
- [ ] Fill blanks
- [ ]
