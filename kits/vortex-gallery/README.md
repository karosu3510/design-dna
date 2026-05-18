# Vortex Gallery — Design DNA Kit

A deep-space WebGL gallery system distilled from [J0SUKE / vortex-gallery](https://github.com/J0SUKE/vortex-gallery).

> 600 instanced posters arranged on a vertical cylinder, wheel-driven momentum scroll, vintage poster reds against pure void. Built for immersive media archives, cinematic landings, and any interface that should feel like *footage*, not a document.

---

## What's in this kit

```
vortex-gallery/
├─ README.md                  ← you are here
├─ design-system.md           ← full written spec
├─ design-tokens.json         ← W3C design tokens
├─ design-system.css          ← drop-in CSS variables + primitives
├─ tailwind-tokens.js         ← Tailwind preset
├─ ai-prompt.md               ← drop into .cursorrules / system prompt
├─ index.html                 ← interactive doc page
├─ components/                ← 8 self-contained 1100×720 demos
│  ├─ 01-void-shell.html
│  ├─ 02-ember-pill.html
│  ├─ 03-poster-tile.html
│  ├─ 04-momentum-cursor.html
│  ├─ 05-cap-index.html
│  ├─ 06-mono-readout.html
│  ├─ 07-vortex-strip.html
│  └─ 08-glow-badge.html
└─ examples/
   ├─ original.html           ← exact replica of the source card
   └─ archive-page.html       ← derivative use case (token-driven)
```

---

## DNA, in one paragraph

**Void canvas** (`#0a0a0a`), **vintage ember** accent (`#ff7a3d`) borrowed from 1950s travel posters, **Inter Tight** for cinematic display copy, **JetBrains Mono with tabular-nums** for any ticking number. Surfaces step up in 4-tier depth (void → depth → shell → soft), never bright. Motion is **wheel-driven momentum** with three lerp speeds — `0.18` for cursor, `0.10` for default scroll, `0.05` for the heavy vortex camera. Radius scale stops at `20px shell / 14 panel / 10 card / 6 tile / 999 pill`. Exactly **one** saturated accent (`ember`); a single optional warm highlight (`sun #ffd24a`); a single optional link blue (`ocean #3a78ff`).

---

## Hard rules

- 🔒 Background is **never** above `#1f1f1f`. No off-white. No gradients to lighter colors.
- 🔒 **One** ember accent. Don't add a second saturated red/pink/purple.
- 🔒 All ticking numbers — timers, indices, dB, BPM, frame counts — use **JetBrains Mono + tabular-nums**.
- 🔒 Hero copy: **Inter Tight 500, letter-spacing −0.04em, line-height 0.92**.
- 🔒 Motion: don't use CSS transitions for scroll-driven values. Use a **lerp** in `requestAnimationFrame`.
- 🔒 Radius scale only: `20 / 14 / 10 / 6 / 999`. No `8px`. No `12px`. No `4px`.
- 🔒 Spacing on a 4px grid (4/8/12/16/20/24/32/48/64).

---

## Quick start

```html
<link rel="stylesheet" href="https://karosu3510.github.io/design-dna/kits/vortex-gallery/design-system.css">
<body class="vg">
  <h1 class="vg-hero">Footage,<br/>not a feed.</h1>
  <p class="vg-body">Wheel-driven gallery with cinematic momentum.</p>
  <button class="vg-pill vg-pill--ember">View archive →</button>
</body>
```

---

## Credits

- Original WebGL technique: [J0SUKE / vortex-gallery](https://github.com/J0SUKE/vortex-gallery) (Three.js, GLSL, instanced mesh)
- Live original: [vortex-gallery.vercel.app](https://vortex-gallery.vercel.app/)
- Distilled into Design DNA tokens by [karosu3510 / design-dna](https://karosu3510.github.io/design-dna/)

License: MIT — free to use, modify, redistribute. Credit appreciated, not required.
