# Draconis Engineering — Roadmap

Concept: `concept.png` — dark cinematic Chinese dragon, gold linework, HUD, mountains.

## v1.0 — MVP (current)

**Goal:** Pixel-faithful `index` to concept, fast, deployable to `draconis-engineering.com`.

- [x] Stack: Astro 7 + TypeScript strict + React islands + Tailwind 4 + MDX + Lucide + sitemap
- [x] Config: `site: https://draconis-engineering.com`, `output: static`, `sharp` image service, `public/CNAME`
- [x] Design tokens: `--color-draconis-gold #c9a86a`, bg `#070a0c`, mono `JetBrains Mono` + display `Geist/Space Grotesk`
- [x] Layout: `BaseLayout.astro`, `Header.astro` (logo, nav HOME/PROJECTS/ABOUT/DOCS/BLOG, gold underline, mobile drawer, right tagline), `Footer.astro`, `HUD` lines/coordinates/crosshair
- [x] Hero: `Hero.astro` — full-bleed dragon via `astro:assets` (`widths 640/1024/1600/2400`, `webp+avif`, `eager`, `fetchpriority high` — 1913kB → 26/55/104kB), gradients, vignette, cheap smoke drift (CSS `drift` 24s), grain, `龍` vertical
- [x] Cards: `ProjectCard.tsx` React island — accent gold/blue/red/violet/emerald/cyan, hover glow, wireframe SVG preview
- [x] `index.astro`: hero + 3 featured (Olympus/Dracolix/Icarus) + `BUILT IN THE OPEN` strip + ecosystem grid (6 projects: Olympus, DragonQuant, Draconomicon, DuraPy, Icarus, DraconiForge) + CTAs
- [x] Stubs: `/projects` (all 7 inc. Dracolix), `/about`, `/docs`, `/blog` — same header/footer, mono, "in development" pattern — no 404s
- [x] Deploy: `.github/workflows/deploy.yml` (setup-node 22, `npm ci` → `build` → `upload-pages-artifact` → `deploy-pages`), sitemap-index

**How to go live on `draconis-engineering.com`:**
1. Buy domain (if not owned)
2. Repo Settings → Pages → Custom domain: `draconis-engineering.com`, Enforce HTTPS
3. DNS: `A 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153` + `CNAME www → <username>.github.io` (or `CNAME @ → <username>.github.io` if using apex CNAME). Keep `public/CNAME` in repo.

## v1.1 — Luxuries (next)

- Volumetric smoke / cloud parallax with `Three.js` (or `motion` + shader) — scroll-linked dragon depth, not just CSS drift
- Real content collections: `src/content/{docs,blog,projects}.config.ts` + MDX rendering (replace stubs), `content Collections` API
- Org integration: fetch stars/contributors from GitHub API at build, auto-populate project links
- View Transitions (`astro:transitions`), OG image generation, `Astro Image` art-direction crop for mobile hero
- SEO: JSON-LD, RSS, `astro:seo` polish, Lighthouse 95+

## v2.0 — Beyond

- Interactive Draconis SVG / mask morphs, lab journal, auth-gated tools
- i18n if needed, search (`pagefind`)

## Decisions kept from `sketch.md`

- No framework switch: Astro+React is correct for islands + static Pages. No SSR needed.
- Tailwind 4 via Vite (no config file). Framer Motion (`motion`) kept for cards only; Three.js deferred to v1.1 per your call.
