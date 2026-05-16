# Nothing System · Inspiration Kit

> Industrial dot-matrix bento. Slightly-lifted black canvas, Space Mono
> captions, canvas-drawn pixel numerals. One red LED for live, one green LED
> for charging. Everything else mono. Inspired by Nothing OS and Teenage
> Engineering hardware.

> Source — [Design DNA library](https://karosu3510.github.io/design-dna/)
> Card id: `d-nothing` · Style: `nothing`

## What's inside

| File                     | Purpose                                                       |
| ------------------------ | ------------------------------------------------------------- |
| `index.html`             | Visual design-system documentation (open this first).         |
| `README.md`              | You are here.                                                 |
| `design-system.css`      | Tokens + utility classes (`.nt-card`, `.nt-meta`, …).         |
| `design-system.md`       | Long-form rationale, do/don't, extension rules.               |
| `design-tokens.json`     | W3C Design Tokens draft (machine-readable).                   |
| `ai-prompt.md`           | Cursor / Claude / ChatGPT rule + generation template + JSON.  |
| `tailwind-tokens.js`     | Tailwind preset (drop-in).                                    |
| `components/`            | 8 self-contained component demos.                             |
| `examples/original.html` | The original 1100×720 industrial bento dashboard.             |
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

<div class="nt-card" style="width:520px">
  <div class="nt-meta">
    <span>DEVICE CLOCK</span>
    <span class="nt-led"></span>
  </div>
  <canvas id="bigClock" width="320" height="64" style="margin-top:12px"></canvas>
  <div class="nt-tape" style="margin-top:14px">
    GLYPH SEQUENCER ARMED // THERMAL NOMINAL
  </div>
</div>
```

Anything you build inherits the same Space Mono captions, single-LED
discipline, step-eased motion, and 18px chassis grid.

### Option C — Tailwind

```js
// tailwind.config.js
module.exports = {
  presets: [require('./tailwind-tokens.js')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

`bg-canvas`, `text-ink`, `bg-card`, `text-rec`, `text-ok`, `font-mono`,
`rounded-card`, etc. become available.

### Option D — Generate new screens with AI

Open [`ai-prompt.md`](./ai-prompt.md), copy the **Cursor / Claude rule**
and paste into:

- **Cursor** → `.cursorrules`
- **Claude Code / Claude.ai** → custom instructions
- **WorkBuddy** → use the "去 WorkBuddy 开发" button on the kit's
  `index.html` (auto-copies a kit-aware prompt + launches the desktop app).

Then ask:

> Build a treasury settings panel in Nothing System style, four toggle rows + danger zone.

---

## Design intent

Nothing System is a 4-AM workbench instrument. Every module reads as a
discrete device with a chassis. Pure mono with **two single-purpose
LEDs** — red for live, green for charging — and nothing else. If you
feel warmth, or if you can't see the 18px grid texture inside a card,
the system has been broken.

The two example pages (`examples/original.html` and
`examples/changelog.html`) deliberately occupy different surfaces. If
they both feel like Nothing System, the system carries.

## Credits & license

- Card design & implementation: Design DNA inspiration library.
- Typography: [Space Mono](https://fonts.google.com/specimen/Space+Mono) (OFL),
  [Inter Tight](https://rsms.me/inter/) (OFL).
- Inspired by Nothing OS and Teenage Engineering hardware (no assets reused).
- Provided for inspiration and personal/internal projects. When using in
  a public product, attribute "Inspired by Design DNA" and review font
  licenses for production.
