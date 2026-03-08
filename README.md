# Flahtik — Spatial Intelligence Platform

Static website scaffold for **Flahtik**, a spatial intelligence company focused on technology, environment, agriculture, and water management.

---

## Folder Structure

```
flahtik/
├── index.html                ← Main entry point (links CSS + JS, nav & footer inline)
│
├── assets/
│   ├── images/
│   │   ├── flahtik-logo.png       ← Full logo (icon + wordmark)
│   │   └── flahtik-motif.png      ← Icon only (F motif with dot)
│   ├── icons/                     ← Icon assets (empty, ready for use)
│   └── fonts/                     ← Self-hosted font files if needed
│
├── css/
│   ├── reset.css              ← CSS reset / normalize
│   ├── variables.css          ← Custom properties: colors, fonts, spacing, z-index
│   ├── typography.css         ← Google Font imports + heading/body/mono styles
│   ├── layout.css             ← Grid system, containers, responsive breakpoints
│   ├── components.css         ← Buttons, cards, tags, nav bar, footer
│   ├── animations.css         ← Keyframes + scroll-triggered animation utilities
│   └── main.css               ← Single import file that loads all CSS in order
│
├── js/
│   ├── cursor.js              ← Custom cursor (dot + trailing ring, desktop only)
│   ├── canvas.js              ← Animated background (particles + topo contour lines)
│   ├── nav.js                 ← Sticky nav scroll behavior + mobile hamburger toggle
│   └── main.js                ← Entry point: imports modules, sets up IntersectionObserver
│
├── sections/                  ← HTML partials for each page section
│   ├── hero.html
│   ├── services.html
│   ├── platform.html
│   ├── sectors.html
│   ├── stats.html
│   ├── about.html
│   ├── insights.html
│   └── contact.html
│
├── components/                ← Reusable component partials
│   ├── nav.html
│   └── footer.html
│
└── README.md                  ← This file
```

## Color Palette

| Token       | Hex         | Usage                        |
|-------------|-------------|------------------------------|
| `--void`    | `#040d0a`   | Deepest background           |
| `--deep`    | `#071510`   | Dark surface                 |
| `--forest`  | `#0e2e1e`   | Card / panel backgrounds     |
| `--emerald` | `#1a5c38`   | Borders, subtle accents      |
| `--jade`    | `#2ecc7a`   | Primary brand accent         |
| `--cyan`    | `#00e5c8`   | Secondary accent, hover      |
| `--sky`     | `#0af5ff`   | Highlights, data viz         |
| `--amber`   | `#e8a832`   | Warm accent, warnings        |
| `--sand`    | `#c4a06a`   | Earthy tertiary              |
| `--cream`   | `#f0ede6`   | Main text color              |
| `--white`   | `#ffffff`   | Pure white                   |
| `--muted`   | `rgba(…)`   | Subdued body text            |

## Fonts

- **Syne** (800, 700, 600) — Headlines and display text
- **DM Sans** (300, 400, 500) — Body copy
- **Space Mono** (400, 700) — Tags, data labels, navigation

## Getting Started

1. Open `index.html` in a browser (or use a local server for ES module support):
   ```bash
   npx serve .
   ```
2. Section content is stubbed — fill in each `<!-- … content goes here -->` placeholder.
3. Real logo is integrated — `flahtik-logo.png` and `flahtik-motif.png` are live in `/assets/images/`.

## Notes

- All JS uses ES modules (`type="module"`), so a local server is recommended for development.
- The `sections/` and `components/` HTML files are reference partials — their content is inlined in `index.html` for now. A build step or server-side include can be added later to load them dynamically.
- CSS is loaded through a single `main.css` that `@import`s all partials in dependency order.

---

## Logo Status: Integrated

Real logo files are live:
  - `/assets/images/flahtik-logo.png` — used in nav + footer
  - `/assets/images/flahtik-motif.png` — used in favicon, mobile menu, and loading screen

### To update the logo in future:
Replace the PNG files in `/assets/images/` with the same filenames. No HTML or CSS changes needed.

### Logo brand color token:
`--brand-blue: #4BA8CC` (extracted from logo circle)
Defined in `/css/variables.css`

---

## Pre-Launch QA Checklist

### Functionality
- [ ] All nav links scroll to correct sections
- [ ] Mobile hamburger menu opens and closes
- [ ] Sectors accordion opens one at a time
- [ ] Stats counters animate on scroll entry
- [ ] Contact inquiry selector radio cards work
- [ ] Contact form validates and shows success state
- [ ] Newsletter form shows success state
- [ ] Canvas animation runs on desktop, skips on reduced-motion

### Visual
- [ ] No hard background edges between sections
- [ ] Scroll progress bar visible at top of page
- [ ] Nav turns frosted glass on scroll
- [ ] Active nav link highlights as you scroll
- [ ] All hover states functional on desktop
- [ ] Real logo visible in nav and footer (mix-blend-mode: screen)
- [ ] World map hotspot tooltips appear on hover

### Responsive
- [ ] Test at 375px (iPhone SE)
- [ ] Test at 768px (iPad portrait)
- [ ] Test at 1024px (iPad landscape / small laptop)
- [ ] Test at 1440px (standard desktop)
- [ ] Mobile menu functional at 768px and below
- [ ] No horizontal scroll at any breakpoint

### Performance
- [ ] Canvas pauses when tab is not visible
- [ ] Reduced-motion preference respected
- [ ] All images have alt attributes
- [ ] No console errors on load
