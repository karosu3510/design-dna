# Glyph OS · Inspiration Kit

> Pixel desktop OS. Pure black canvas. VT323 numerals.
> One red dot for live, one lime bar for charge. Everything else mono.
> Inspired by Nothing OS and Teenage Engineering's TM-1.

> Source — [Design DNA library](https://karosu3510.github.io/design-dna/)
> Card id: `d-glyph-os` · Style: `glyph-os`

## What's inside

| File                     | Purpose                                                       |
| ------------------------ | ------------------------------------------------------------- |
| `index.html`             | Visual design-system documentation (open this first).         |
| `README.md`              | You are here.                                                 |
| `design-system.css`      | Tokens + utility classes (`.gl-card`, `.gl-display`, …).      |
| `design-system.md`       | Long-form rationale, do/don't, extension rules.               |
| `design-tokens.json`     | W3C Design Tokens draft (machine-readable).                   |
| `ai-prompt.md`           | Cursor / Claude / ChatGPT rule + generation template + JSON.  |
| `tailwind-tokens.js`     | Tailwind preset (drop-in).                                    |
| `components/`            | 8 self-contained component demos.                             |
| `examples/original.html` | The original pixel desktop dashboard (1100×720).              |
| `examples/changelog.html`| A changelog page using the same tokens — proves the system.   |

## Quick start

### Option A — Just look

```bash
open index.html
```

A scrollable design-system browser: colors, type, spacing, motion,
8 component demos, 2 example pages, AI prompt panel.

### Option B — Use the system in your project

```html
<link rel="stylesheet" href="./design-system.css">

<div class="gl-card" style="width:520px">
  <div class="gl-cap">Device clock <span class="gl-rec"></span></div>
  <div class="gl-display">16:48</div>
  <div class="gl-tape" style="margin-top:14px">
    Glyph sequencer armed // thermal nominal
  </div>
</div>
```

Anything you build inherits the same VT323 numerals, single-accent
discipline, step-eased motion.

### Option C — Tailwind

```js
// tailwind.config.js
module.exports = {
  presets: [require('./tailwind-tokens.js')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

`bg-canvas`, `text-ink`, `bg-card`, `text-rec`, `text-ok`, `font-pixel`,
`rounded-card`, etc. become available.

### Option D — Generate new screens with AI

Open [`ai-prompt.md`](./ai-prompt.md), copy the **Cursor / Claude rule**
and paste into:

- **Cursor** → `.cursorrules`
- **Claude Code / Claude.ai** → custom instructions
- **WorkBuddy** → use the "去 WorkBuddy 开发" button on the kit's
  `index.html` (auto-copies a kit-aware prompt + launches the desktop app).

Then ask:

> Build a settings panel in Glyph OS style, four toggle rows + danger zone.

---

## Design intent

Glyph OS is a handheld instrument from 2027. Every module looks like its
own discrete device on the same desk. Pure mono with **two single-purpose
accents** — red for live, lime for charge — and nothing else. If you feel
warmth, the system has been broken.

The two example pages (`examples/original.html` and
`examples/changelog.html`) deliberately occupy different surfaces. If they
both feel like Glyph OS, the system carries.

## Credits & license

- Card design & implementation: Design DNA inspiration library.
- Typography: [VT323](https://fonts.google.com/specimen/VT323) (OFL),
  [Inter](https://rsms.me/inter/) (OFL).
- Inspired by Nothing OS and Teenage Engineering TM-1 (no assets reused).
- Provided for inspiration and personal/internal projects. When using in
  a public product, attribute "Inspired by Design DNA" and review font
  licenses for production.
