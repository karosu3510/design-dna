# a.Record · Inspiration Kit

> Warm audio dashboard system from the [Design DNA](https://karosu3510.github.io/design-dna/) inspiration library.
> Cream canvas. White cards. One red accent. Inter for words, Geist Mono for numbers.
> Built so you can drop it into a project — or paste it into Cursor — and keep extending it without breaking the visual language.

---

## What's inside

```
a-record-kit/
├── index.html                ← Visual design-system documentation (open this first)
├── README.md                 ← You are here.
├── design-system.css         ← Tokens + utility classes (.ar-shell, .ar-pill, .ar-glass…)
├── design-system.md          ← Long-form rationale, do/don't, extension rules
├── design-tokens.json        ← W3C Design Tokens draft format (machine-readable)
├── ai-prompt.md              ← Cursor / Claude / ChatGPT system prompt + JSON config
├── tailwind-tokens.js        ← Tailwind preset (drop-in)
│
├── components/               ← 8 self-contained component demos
│   ├── 01-shell.html         Outer rounded surface
│   ├── 02-pill.html          Pill button / chip
│   ├── 03-glass-panel.html   Floating glass with backdrop-filter
│   ├── 04-status-dot.html    Pulsing recording dot
│   ├── 05-mono-display.html  Geist Mono numerical display
│   ├── 06-meter-ring.html    Animated SVG meter (input level / LUFS)
│   ├── 07-spectrum-bars.html Spectrum bars
│   └── 08-cap-label.html     Uppercase caption + display label
│
└── examples/
    ├── original.html         The original Vocal tracking dashboard
    └── settings-page.html    A new use case (Settings) using only kit tokens
```

---

## Quick start

### Option A — Just look

```bash
open index.html
```

You'll see a full design-system browser: colors, type, spacing, motion,
8 live component demos, 2 example pages, and the AI prompt panel.

### Option B — Use the system in your own project

```html
<link rel="stylesheet" href="./design-system.css">

<div class="ar-shell">
  <div class="ar-row ar-row--between">
    <h1 class="ar-h1">Vocal tracking</h1>
    <button class="ar-pill">Settings</button>
  </div>

  <p class="ar-body">
    Block A — Take 04. Capture format 24-bit at 48 kHz.
  </p>

  <div class="ar-glass" style="padding:16px 22px">
    <span class="ar-mono" style="font-size:62px">12:35:42</span>
  </div>
</div>
```

Everything you build on top of `design-system.css` inherits the same
typography, spacing, radius, shadow, and motion language.

### Option C — Use it via Tailwind

```js
// tailwind.config.js
module.exports = {
  presets: [require('./tailwind-tokens.js')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

Now `bg-canvas`, `text-ink`, `rounded-shell`, `shadow-card`, `font-mono`,
and a full token vocabulary are available in your markup.

### Option D — Generate new screens with AI in this style

Open [`ai-prompt.md`](./ai-prompt.md), copy the **Cursor / Claude rule**
block at the top, and paste it into:
- **Cursor** → `.cursorrules` file in your project root
- **Claude Code** → system prompt or project rules
- **ChatGPT / Claude.ai** → "custom instructions"
- **v0** → first message of a new chat

Then ask:
> Build a notification center in a.Record style.

The model will produce a screen that uses your cream/white palette, your
radius scale, your one accent, your two font families — instead of generic
"AI UI" with purple gradients and rounded-2xl Tailwind defaults.

---

## Design intent

Studio at dawn, not a club at night. Cream canvas, white card, one red
accent for "live recording", Geist Mono for any number that ticks.
Read [`design-system.md`](./design-system.md) for the full rationale,
do/don't list, and extension rules.

The two example pages (`examples/original.html` and `examples/settings-page.html`)
are deliberately different surfaces. If they both feel like the same
product, the system is doing its job — that's the test.

---

## Credits & license

- Card design & implementation: [Design DNA](https://karosu3510.github.io/design-dna/) inspiration library.
- Typography: [Inter](https://rsms.me/inter/) (OFL) and
  [Geist Mono](https://vercel.com/font) (OFL), loaded from Google Fonts.
- This kit is provided for inspiration and personal/internal projects.
  When using it in a public product, attribute "Inspired by Design DNA"
  and review font licenses for production.
