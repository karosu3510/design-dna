# Nothing System · Design System

> Industrial dot-matrix bento. A slightly-lifted black canvas, Space Mono captions, canvas-drawn pixel numerals, and exactly two LEDs: a red one for "live", a green one for "charging". Inspired by Nothing OS and Teenage Engineering hardware — the device feels like it has a chassis.

This is the long-form rationale. The machine version is in
[`design-system.css`](./design-system.css) and
[`design-tokens.json`](./design-tokens.json).

---

## 1. Personality

| Trait        | Value                                                                |
| ------------ | -------------------------------------------------------------------- |
| Mood         | Industrial, calm, radio-engineering. A device on your desk at 4 AM. |
| Posture      | Bento-modular. Each panel reads as a discrete instrument.            |
| Reference    | Nothing OS · Teenage Engineering OP-1 / TM-1 · old Tascam meters.    |
| Forbidden    | Color UI. Display serifs. Soft drop shadows. Anything "warm".        |

Glyph OS is cold and pure. Nothing System is cold and **industrial** — there's a chassis around the ink, an 18px grid texture inside every card, and the captions feel printed on metal. Same family, different temperament.

---

## 2. Color

This system is **mono with two single-purpose LEDs**. That is the rule.

```
bg        #0a0a0a   ████  page canvas — slightly lifted black, never #000
shell     #0e0e0e   ████  deepest panel
card      #111111   ████  default module card
card-2    #1a1a1a   ████  hovered / secondary fill
line      #1f1f1f   ────  hairline
line-2    #2a2a2a   ────  second hairline (focus rings, ticks)
cell-off  #262626   ████  dot-matrix off cell

inv-bg    #fafafa   ████  inverse Now Playing card (one per layout, max)
inv-ink   #0a0a0a   ████  ink on inverse card
```

Ink ramp:

```
ink     #f4f4f4
ink-2   #bdbdbd
ink-3   #9a9a9a
ink-4   #5a5a5a
ink-5   #3a3a3a
```

LEDs — **single-purpose, never combined, never decorative**:

- `--nt-c-rec` `#ff3b3b` — recording / live / error / destructive (also the breathing dot in module headers)
- `--nt-c-ok`  `#3ddc84` — battery OK / charging only

If you need a third accent, the answer is: don't. Use ink-2 / ink-3.

---

## 3. Typography

Two families, used very differently:

- **Space Mono** — every label, caption, mono key/value, and tape strip. This is the printed voice of the chassis. All numerical data uses Space Mono with `font-variant-numeric: tabular-nums`.
- **Inter Tight** — only the Now Playing inverse card headline + body. Never used on the dark canvas.

Type scale (px): `9 · 9.5 · 11 · 12 · 14 · 18 · 26 · 32`.

Letter-spacing presets:

- Now Playing headline (the only Inter Tight at size) → `-0.01em`
- Uppercase mono captions → `+0.16em`
- Tape / status / key labels → `+0.18em`
- Number labels (UPTIME / THREADS / LATENCY) → `+0.18em`

Large numerics (the giant `17:30` clock, `28°C` sky temp, `92%` battery) are **drawn on `<canvas>` as 5×7 dot-matrix**, not rendered with a webfont. This is what gives Nothing its hardware feel.

---

## 4. Spacing & layout

4px grid: `--nt-sp-1 … --nt-sp-6`. The dashboard uses a 12-column `grid-auto-rows: 64px` bento with `gap: 8px`. Each module is a `.nt-card` with an internal 18px grid texture (the `::before` overlay) — that's the industrial feel.

```
shell 14px → card 12px → tile 6px → chip 2px → pill 999px
```

Notice the radius scale is **tighter** than Glyph OS — Nothing leans toward right-angled chassis corners; only the outermost shell has a meaningful curve.

---

## 5. Elevation

Nothing System does **not** use shadows. Surfaces are separated by:

1. background step (`bg` → `card` → `card-2`)
2. 1px line at `--nt-c-line`
3. internal 18px grid texture (the `::before` overlay)

If you find yourself reaching for `box-shadow`, the layout is wrong. Step the background and let the grid do the work.

---

## 6. Motion

Motion is **digital, not analog**. Three recipes:

- **Step easing** (`steps(1, end)`) for pixel-perfect frame swaps — VU bars, sparklines, glyph matrix shimmer.
- **2400ms breath** for the single live LED (only opacity, no color shift).
- **240ms cubic-bezier(.22,.61,.36,1)** only for the rare smooth transition (panel reveal).

Live numerical data updates on `setInterval` ticks:

| Source              | Cadence  |
| ------------------- | -------- |
| Clock / uptime      | 1000ms   |
| VU / spectrum bars  | 140ms    |
| Tuner needle drift  | 1400ms   |
| CPU sparkline       | 800ms    |
| Network sparkline   | 900ms    |
| Glyph matrix shimmer| 400ms    |
| Ambient VU          | 380ms    |

**Don't animate via CSS transition** — the system is supposed to feel like polled hardware.

---

## 7. Components in this kit

| Class                | What it does                                                    |
| -------------------- | --------------------------------------------------------------- |
| `.nt-card`           | Default module card with 18px grid texture                      |
| `.nt-card--inverse`  | Inverse Now-Playing panel. At most one per layout.              |
| `.nt-meta`           | Top row of a module — caption + LED                             |
| `.nt-led`            | Pulsing red LED (live / recording)                              |
| `.nt-led--idle`      | Quiet LED (status placeholder)                                  |
| `.nt-led--ok`        | Solid green LED (charging only)                                 |
| `.nt-cap`            | Generic uppercase mono caption                                  |
| `.nt-stat`           | Numeric kv pair (k label / v number / u unit)                   |
| `.nt-row`            | Quick Bus row — list pill with indicators                       |
| `.nt-ind`            | 3-cell row LED indicator                                        |
| `.nt-bars`           | Segmented horizontal bar (battery / focus). Add `--ok` for green.|
| `.nt-vu`             | Vertical VU spectrum (bars-end)                                 |
| `.nt-tape`           | Lower status tape strip                                         |
| `.nt-divider`        | Tapered hairline divider (add `--dash` for dashed)              |
| `.nt-pixel-canvas`   | Wrapper for canvas-drawn dot-matrix numerals                    |

---

## 8. Do / Don't

✅ **Do**

- Use `#0a0a0a` for the page. Not `#000`, not `#111`. The slight lift is what differentiates Nothing from pure black systems.
- Numbers always Space Mono + tabular-nums. Big numbers go on canvas.
- Use `--nt-c-rec` only for live/error states; `--nt-c-ok` only for charging.
- Step backgrounds and 1px lines for separation; never shadow.
- Keep the internal 18px grid texture on every module card.
- Match the chassis posture: each module reads as a discrete instrument.

❌ **Don't**

- Don't add a second body color (no warm white, no cream, no pink).
- Don't use display serifs (Instrument Serif, Playfair) — they break the mood.
- Don't render giant numerals as DOM webfont — use the canvas dot-renderer.
- Don't make the inverse card `bg-shell` again — it must be the only inverted surface in the layout.
- Don't curve corners further than 14px. Nothing System is not Apple's iOS.
- Don't combine red + green simultaneously. They're independent state LEDs.

---

## 9. Extending

If you need a new module:

1. Pick from existing tokens — surface step, ink ramp, radius, spacing.
2. Wrap in `.nt-card` to inherit the grid texture.
3. New numerical data uses `.nt-stat` for kv pairs, canvas dot-render for hero numerics.
4. New icon work prefers 1px hairline strokes / sharp corners. No filled icons unless they're an LED.

---

## 10. Component library

Eight live, self-contained components under `components/`. Each is a
standalone HTML — open it, copy the snippet you need.

| #  | File                          | Component         | What it teaches                              |
| -- | ----------------------------- | ----------------- | -------------------------------------------- |
| 01 | `01-pixel-clock.html`         | Pixel clock       | Canvas-drawn 5×7 dot-matrix `HH:MM`           |
| 02 | `02-module-card.html`         | Module card       | Card / meta / LED / 18px grid texture        |
| 03 | `03-glyph-matrix.html`        | Glyph matrix      | 28×11 dot grid with shimmer cycle            |
| 04 | `04-vu-spectrum.html`         | Vertical VU       | 32-bar live spectrum + lo/hot states         |
| 05 | `05-radio-tuner.html`         | Radio tuner       | Linear tuning scale + drifting needle        |
| 06 | `06-battery-bars.html`        | Battery bars      | 14-segment ok-tinted battery meter           |
| 07 | `07-bus-row.html`             | Quick-bus row     | Row pill + 3×3 cell indicator                |
| 08 | `08-stat-kv.html`             | Stat kv pair      | The k/v/u numeric block used everywhere      |

---

## 11. AI integration

Pair this kit with [`ai-prompt.md`](./ai-prompt.md) — Cursor / Claude rule,
generation template, and AI-readable JSON config. Nothing System is the
easiest system for an AI to misuse (one extra hex and the chassis collapses);
the rule exists to prevent that.

---

When in doubt, reference [`index.html`](./index.html) — the canonical
browser-based documentation, with every token, every component, and both
example pages rendered live.
