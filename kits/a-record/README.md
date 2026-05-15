# a.Record · Inspiration Kit

A self-contained "warm audio dashboard" inspiration card from the
**Design DNA** library. Ships with the full HTML implementation **and**
its design system, so you can drop it into a project and keep extending
it without breaking the visual language.

> Source — [Design DNA library](https://karosu3510.github.io/design-dna/)
> Card id: `d-a-record` · Style: `a-record`

## What's inside

| File                     | Purpose                                                     |
| ------------------------ | ----------------------------------------------------------- |
| `index.html`             | The complete card (1100×720), self-contained, runnable.     |
| `design-system.css`      | Tokens + core component classes (`.ar-shell`, `.ar-pill`…). |
| `design-system.md`       | Human-readable design system documentation.                 |
| `design-tokens.json`     | Machine-readable tokens (W3C Design Tokens draft).          |
| `README.md`              | This file.                                                  |

## Quick start

```bash
# 1. Open the card as-is
open index.html

# 2. Reuse the system in your own page
<link rel="stylesheet" href="./design-system.css">

<div class="ar-shell">
  <h1 class="ar-h1">Vocal tracking</h1>
  <p class="ar-body">Block A — Take 04</p>
  <button class="ar-pill">Neumann U87</button>
</div>
```

Everything you build on top of `design-system.css` will inherit the same
typography, spacing, radius, shadow, and motion language. The kit is the
**baseline** — extend it, but stay on its grid.

## Design intent

Studio at dawn, not a club at night. Cream canvas, white card, one red
accent for "live recording", Geist Mono for any number that ticks.
Read [`design-system.md`](./design-system.md) for the full rationale,
do/don't, and extension rules.

## Credits & license

- Card design & implementation: Design DNA inspiration library.
- Fonts: [Inter](https://rsms.me/inter/) (OFL) and
  [Geist Mono](https://vercel.com/font) (OFL), loaded from Google Fonts.
- This kit is provided for inspiration and personal/internal projects.
  When using it in a public product, attribute "Inspired by Design DNA"
  and review font licenses for production use.
