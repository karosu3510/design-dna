# Mercury Banking · Inspiration Kit

> Warm-paper treasury dashboard. Inter primary + JetBrains Mono numerics.
> Restrained light-mode palette, single-purpose purple CTA, hairline
> borders, ink-on-paper. Inspired by Mercury banking and modern fintech
> treasury UIs.

> Source — [Design DNA library](https://karosu3510.github.io/design-dna/)
> Card id: `d-mercury` (dynamic) · Style: `mercury`

## What's inside

| File                     | Purpose                                                       |
| ------------------------ | ------------------------------------------------------------- |
| `index.html`             | Visual design-system documentation (open this first).         |
| `README.md`              | You are here.                                                 |
| `design-system.css`      | Tokens + utility classes (`.mc-card`, `.mc-display` …).       |
| `design-system.md`       | Long-form rationale, do/don't, extension rules.               |
| `design-tokens.json`     | W3C Design Tokens draft (machine-readable).                   |
| `ai-prompt.md`           | Cursor / Claude / ChatGPT rule + generation template + JSON.  |
| `tailwind-tokens.js`     | Tailwind preset (drop-in).                                    |
| `components/`            | 8 self-contained component demos.                             |
| `examples/original.html` | The original 1100×720 Mercury treasury dashboard.             |
| `examples/changelog.html`| A changelog page using the same tokens — proves the system.   |

## Quick start

### Option A — Just look

```bash
open index.html
```

### Option B — Use the system in your project

```html
<link rel="stylesheet" href="./design-system.css">

<article class="mc-card" style="width:520px">
  <span class="mc-eyebrow">Total balance <span class="mc-info">i</span></span>
  <div class="mc-display" style="margin-top:6px">
    <span class="mc-cur">$</span>14,245,737<span class="mc-cents">.68</span>
  </div>
  <span class="mc-pill mc-pill--pos" style="margin-top:8px">↑ 4.32%</span>
  <span style="font-size:13px;color:#8a8c93;margin-left:6px">vs last 30 days</span>
</article>
```

### Option C — Tailwind

```js
// tailwind.config.js
module.exports = {
  presets: [require('./tailwind-tokens.js')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

`bg-paper`, `text-ink`, `bg-purple-500`, `text-pos`, `font-mono`,
`rounded-card`, `shadow-mc-card` become available.

### Option D — Generate new screens with AI

Open [`ai-prompt.md`](./ai-prompt.md), copy the **Cursor / Claude rule**
and paste into Cursor `.cursorrules` / Claude custom instructions.

Or use the "去 WorkBuddy 开发" button on the kit's `index.html`.

Then ask:

> Build a treasury allocation card in Mercury style, 3 sub-account rows + sparklines.

---

## Design intent

Mercury is **light, paper, financial, premium** — the only Tier 2 sample in
the library that occupies that quadrant. Everything earns its restraint:
warm paper not pure white, hairline borders not heavy strokes, single
purple CTA not full color spectrum, JetBrains Mono numerics not Inter.
Drop any of those and the system collapses into "fintech 2018".

The two example pages (`examples/original.html` and
`examples/changelog.html`) deliberately occupy different surfaces. If
they both feel like Mercury, the system carries.

## Credits & license

- Card design & implementation: Design DNA inspiration library.
- Typography: [Inter](https://rsms.me/inter/) (OFL),
  [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (OFL).
- Inspired by Mercury banking and the broader modern fintech aesthetic.
- Provided for inspiration and personal/internal projects.
