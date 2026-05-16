# Glyph OS · Design System

> Pixel desktop OS. Pure black canvas. VT323 numerals. One red dot for "live", one lime bar for "charge". Everything else is monochrome.

This is the long-form rationale. The machine version is in
[`design-system.css`](./design-system.css) and
[`design-tokens.json`](./design-tokens.json).

---

## 1. Personality

| Trait        | Value                                                                |
| ------------ | -------------------------------------------------------------------- |
| Mood         | Cold, precise, slightly retro. A handheld instrument from 2027.     |
| Posture      | Modular. Every panel is a separate "device" on the same desk.        |
| Reference    | Nothing OS · Teenage Engineering TM-1 · old DECstation displays.     |
| Forbidden    | Color UI. Soft shadows. Display serifs. Anything that feels "warm".  |

If a design choice would feel at home in a Notion app, it doesn't belong here.

---

## 2. Color

This system is **mono with two single-purpose accents**. That is the rule.

```
bg        #000000   ████  page canvas — never #111 or near-black grey
shell     #0e0e0e   ████  deepest panel
card      #141414   ████  default module card
card-2    #1b1b1b   ████  secondary fill (rows, chips)
line      #2a2a2a   ────  hairline
line-2    #3a3a3a   ────  slightly stronger hairline

inv-bg    #fafaf6   ████  inverse card (one per layout, max)
inv-ink   #0a0a0a   ████  ink on inverse card
```

Ink ramp:

```
ink     #ffffff
ink-2   #c5c5c5
ink-3   #7c7c7c
ink-4   #4a4a4a
```

Accents — **single-purpose, never combined, never decorative**:

- `--gl-c-rec` `#ff3b30` — recording / live / error / destructive
- `--gl-c-ok` `#c8ff5e` — battery OK / charging only

If you need a third accent, the answer is: don't. Use ink-2 / ink-3.

---

## 3. Typography

Two families, used very differently:

- **VT323** — every number, label, and uppercase pixel caption. This is the
  voice of the OS. All numerical data uses VT323 with `font-variant-numeric: tabular-nums`.
- **Inter** — short bursts of body copy on the inverse card and modal-style
  surfaces only. Never headlines.

Type scale (px): `11 · 12 · 13 · 14 · 22 · 30 · 46 · 62 · 118`.

Letter-spacing presets:

- Pixel display / numerals → `0` (the font is already shaped)
- Uppercase pixel captions → `+0.16em`
- Tape / status strips → `+0.18em`

---

## 4. Spacing & layout

4px grid: `--gl-sp-1 … --gl-sp-6`. The desktop layout is two columns of
modules; each module is a `.gl-card`. Panels are 18px radius; rows inside
panels are 8–10px radius.

```
shell 22px → card 18px → tile 10px → chip 8px → pill 999px
```

---

## 5. Elevation

Glyph OS does **not** use shadows. Surfaces are separated by:

1. background step (`bg` → `card` → `card-2`)
2. 1px line at `--gl-c-line`
3. radius

If you find yourself reaching for `box-shadow`, the layout is wrong. Step
the background instead.

---

## 6. Motion

Motion is **digital, not analog**. Two recipes:

- **Step easing** (`steps(1, end)`) for pixel-perfect frame swaps — segment
  bars turning on/off, sequencer cells, glyph matrix shimmer.
- **240ms cubic-bezier(.22,.61,.36,1)** for the rare smooth transition
  (panel reveal, focus ring sweep).

Live numerical data updates on `setInterval` ticks (700ms for sparklines,
1000ms for clock, 110ms for VU meters). **Don't animate via CSS transition** —
the OS is supposed to feel like polled hardware.

---

## 7. Components in this kit

| Class               | What it does                                                    |
| ------------------- | --------------------------------------------------------------- |
| `.gl-card`          | Default module card                                             |
| `.gl-card--inverse` | Inverse panel (e.g. Now Playing). At most one per layout.       |
| `.gl-cap`           | Top label of a module — uppercase pixel caption                 |
| `.gl-actions`       | Top-right ghost dots (action affordances)                       |
| `.gl-pixel`         | Pixel numerical display (any size)                              |
| `.gl-display`       | Largest pixel display (118px clock numerals)                    |
| `.gl-rec`           | Pulsing red recording dot                                       |
| `.gl-row`           | Quick-bus row pill                                              |
| `.gl-tape`          | Lower status strip                                              |
| `.gl-divider`       | Hairline divider with tapered ends                              |
| `.gl-bars`          | Segmented bar (battery / VU). Add `.gl-bars--ok` for lime tint. |

---

## 8. Do / Don't

✅ **Do**

- Use `bg` for the page. `card` for modules. Never invent a "softer black".
- Numbers always VT323 + tabular-nums.
- Use `--gl-c-rec` only for live/error states, `--gl-c-ok` only for charging.
- Step backgrounds and 1px lines for separation; never shadow.
- Match the OS posture: every module looks like a discrete device.

❌ **Don't**

- Don't add a second body color (no warm white, no cream, no pink).
- Don't use display serifs (Instrument Serif, Playfair) — they break the mood.
- Don't animate with CSS transition on numbers; tick the values instead.
- Don't make the inverse card `bg-shell` again — it must be the only inverted surface in the layout.
- Don't curve the corners further than 22px. Glyph OS is not Apple's iOS.

---

## 9. Extending

If you need a new module:

1. Pick from existing tokens — surface step, ink ramp, radius, spacing.
2. New numerical data must use `.gl-pixel` or `.gl-display` with tabular-nums.
3. New icon work prefers 1px hairline strokes / square corners. No filled
   icons unless they're the recording dot.

---

## 10. Component library

Eight live, self-contained components under `components/`. Each is a
standalone HTML — open it, copy the snippet you need.

| #  | File                          | Component         | What it teaches                              |
| -- | ----------------------------- | ----------------- | -------------------------------------------- |
| 01 | `01-pixel-clock.html`         | Pixel clock       | 118px VT323 numerals + live tick              |
| 02 | `02-module-card.html`         | Module card       | Card / cap / actions baseline                |
| 03 | `03-dot-matrix.html`          | Glyph matrix      | 28×11 dot grid with shimmer                  |
| 04 | `04-pixel-meter.html`         | Pixel meter       | 22-segment battery + 14-block focus blocks   |
| 05 | `05-spectrum.html`            | Now-playing bars  | Inverse card + 48-bar equalizer              |
| 06 | `06-ascii-divider.html`       | ASCII divider     | Pixel art ascii art elements                 |
| 07 | `07-pill-row.html`            | Quick-bus row     | List rows with grip                          |
| 08 | `08-pixel-toggle.html`        | Pixel toggle      | Stepped toggle + sequencer cells             |

---

## 11. AI integration

Pair this kit with [`ai-prompt.md`](./ai-prompt.md) — Cursor / Claude rule,
generation template, and AI-readable JSON config. Glyph OS is the easiest
system for an AI to misuse (one extra hex and the mood breaks); the rule
exists to prevent that.

---

When in doubt, reference [`index.html`](./index.html) — the canonical
browser-based documentation, with every token, every component, and both
example pages rendered live.
