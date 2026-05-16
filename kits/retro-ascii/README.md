# Retro ASCII · Inspiration Kit

> CRT phosphor terminal. Tar-black canvas, P1 phosphor green primary,
> amber + red as alarm-only LEDs. JetBrains Mono everywhere. Scanlines
> + vignette as page chrome. Inspired by 80s DEC terminals and modern
> CRT aesthetic projects.

> Source — [Design DNA library](https://karosu3510.github.io/design-dna/)
> Card id: `d-retro-ascii` · Style: `retro-ascii`

## What's inside

| File                     | Purpose                                                       |
| ------------------------ | ------------------------------------------------------------- |
| `index.html`             | Visual design-system documentation (open this first).         |
| `README.md`              | You are here.                                                 |
| `design-system.css`      | Tokens + utility classes (`.ra-panel`, `.ra-ttl`, `.ra-meter` …). |
| `design-system.md`       | Long-form rationale, do/don't, extension rules.               |
| `design-tokens.json`     | W3C Design Tokens draft (machine-readable).                   |
| `ai-prompt.md`           | Cursor / Claude / ChatGPT rule + generation template + JSON.  |
| `tailwind-tokens.js`     | Tailwind preset (drop-in).                                    |
| `components/`            | 8 self-contained component demos.                             |
| `examples/original.html` | The original 1100×720 retro terminal dashboard.               |
| `examples/changelog.html`| A changelog page using the same tokens — proves the system.   |

## Quick start

### Option A — Just look

```bash
open index.html
```

### Option B — Use the system in your project

```html
<link rel="stylesheet" href="./design-system.css">

<body class="ra-crt">
  <article class="ra-panel" style="width:520px">
    <div class="ra-ttl">
      <span class="ra-dot"></span>
      Boot sequence
      <span class="id">/var/log/boot.0</span>
    </div>
    <div class="ra-line is-ok">[0.121] Mount /dev/sda1 -> /  [ OK ]</div>
    <div class="ra-line is-warn">[0.412] glyph link: weak, retry (1/3)</div>
    <div class="ra-line is-ok">[0.622] glyph link: locked @ 38.2 Hz</div>
    <span class="ra-cursor"></span>
  </article>
</body>
```

### Option C — Tailwind

```js
// tailwind.config.js
module.exports = {
  presets: [require('./tailwind-tokens.js')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

`bg-canvas`, `text-hi`, `text-amber`, `text-red`, `font-mono`, `shadow-glow`
become available.

### Option D — Generate new screens with AI

Open [`ai-prompt.md`](./ai-prompt.md), copy the **Cursor / Claude rule**
and paste into Cursor `.cursorrules` / Claude custom instructions.

Or use the "去 WorkBuddy 开发" button on the kit's `index.html`.

Then ask:

> Build a deploy log panel in Retro ASCII style, streaming output + 3 status chips.

---

## Design intent

Retro ASCII is a CRT terminal that still works at 4 AM. Every text node
emits phosphor. Every panel ships with bracket corners. The scanlines and
vignette aren't decoration — they are how the system reads as a CRT. Drop
either and you're left with "green text on black", which is not the same
thing.

The two example pages (`examples/original.html` and
`examples/changelog.html`) deliberately occupy different surfaces. If
they both feel like Retro ASCII, the system carries.

## Credits & license

- Card design & implementation: Design DNA inspiration library.
- Typography: [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (OFL),
  [IBM Plex Mono](https://www.ibm.com/plex/) (OFL).
- Inspired by DEC VT terminals and the broader CRT aesthetic.
- Provided for inspiration and personal/internal projects.
