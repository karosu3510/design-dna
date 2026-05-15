# a.Record · Design System

> Warm audio dashboard for vocal tracking sessions.
> Soft neumorphism on a cream canvas, with Inter for UI and Geist Mono for numerical data.

This document explains the **why** behind the tokens. The machine-readable
versions live in [`design-system.css`](./design-system.css) and
[`design-tokens.json`](./design-tokens.json).

---

## 1. Personality

| Trait        | Value                                                            |
| ------------ | ---------------------------------------------------------------- |
| Mood         | Warm, calm, professional. Studio at dawn — not a club at night. |
| Posture      | Confident negative space, generous rounded corners.             |
| Reference    | Linear · Mercury · Notion warmth · Teenage Engineering hardware. |
| Forbidden    | Saturated brand colors, gradients, hard drop shadows.           |

If you have to ask "is this too colorful?" — it is.

---

## 2. Color

```
Canvas       #eceae3   ████   warm cream, never #fff for the page itself
Shell        #ffffff   ████   the actual card surface
Hero panel   #f1efe9   ████   inner large panel
Secondary    #e8e6df   ████   chips, avatars
Tertiary     #efedf0   ████   spectrum / subtle blocks
```

Text uses a 4-step ink ramp:

```
ink     #1c1c1a   primary
ink-2   #5b5a55   secondary
ink-3   #92908a   caption / labels
ink-4   #bfbdb5   disabled / decorative
```

**Accent: `--ar-c-rec` (#f24a3a)** is the *only* saturated color in the
system. Reserve it for active recording state, errors, or destructive
actions. Never use it for branding, links, or charts.

---

## 3. Typography

Two families only:

- **Inter** — UI, body, headlines. Weights 300 / 400 / 500 / 600.
- **Geist Mono** — any number that updates in real time
  (timer, dB, LUFS, BPM, file size). Weights 200 / 300 / 400.

Use `font-variant-numeric: tabular-nums` on every Geist Mono number so
columns don't shimmer.

Type scale (px): `9.5 · 10.5 · 11.5 · 12.5 · 13.5 · 15 · 17 · 20 · 34 · 62`.

Letter-spacing presets:

- Display / headlines → `-0.025em`
- Body → `-0.005em`
- Uppercase captions → `+0.18em`

---

## 4. Spacing & layout

4px grid, exposed as `--ar-sp-1 … --ar-sp-8`.

The card uses an outer shell (28px padding, 30px radius) with two columns
(`1fr 264px`). Inside, panels are 20px radius, secondary tiles 14–16px.
Never mix radii arbitrarily — pick from the scale.

```
shell  30px → panel 20px → card 16px → tile 14px → pill 999px
```

---

## 5. Elevation

Three shadow recipes only.

| Token              | Use                                |
| ------------------ | ---------------------------------- |
| `--ar-shadow-shell`| The main card. Soft, lifted.       |
| `--ar-shadow-glass`| Floating timer / glass panels.     |
| `--ar-shadow-pill` | Pills and chips. 1px subtle drop.  |

Glass panels use `backdrop-filter: blur(18px) saturate(1.05)` and a
55% white background — that single recipe is what makes the timer feel
"floating on the hero".

---

## 6. Motion

- Default duration: **240ms** (`--ar-dur-base`).
- Easing: `cubic-bezier(.22,.61,.36,1)` for entrances, `cubic-bezier(.4,0,.2,1)` for everything else.
- Real-time data (level meters, spectrum bars) update on `requestAnimationFrame`,
  but smoothing is done via a low-pass coefficient (0.05–0.18), not CSS transitions.
- Recording dot uses a 1.6s `pulse` keyframe — keep it, it's the only
  thing that signals "live".

---

## 7. Components in this kit

The CSS exposes these utility classes — wire them onto your own markup.

| Class            | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `.ar-shell`      | Outer rounded white surface                          |
| `.ar-panel`      | Hero / large information panel                       |
| `.ar-h1`         | Display headline (34px)                              |
| `.ar-body`       | 13.5px secondary copy, max-width 320px               |
| `.ar-pill`       | 34px pill button / chip                              |
| `.ar-cap`        | Uppercase tracked caption                            |
| `.ar-glass`      | Floating glass panel with blur                       |
| `.ar-mono`       | Mono numerical display (timer, counters)             |
| `.ar-rec-dot`    | Pulsing red recording dot                            |
| `.ar-grid-side`  | Main content + 264px sidebar layout                  |
| `.ar-stack`      | Vertical stack with 12px gap                         |
| `.ar-row`        | Horizontal row (with `--between` modifier)           |

---

## 8. Do / Don't

✅ **Do**

- Use `--ar-c-rec` only for active states.
- Pair every Geist Mono number with `tabular-nums`.
- Keep panels on a 4px grid.
- Layer glass panels over the hero, not over flat surfaces.

❌ **Don't**

- Add multiple accent colors. One red. That's it.
- Use rounded shadows (e.g. `0 0 20px`) — the system uses directional, soft shadows.
- Mix Geist Mono and Inter inside a single sentence.
- Bring in display fonts (Instrument Serif etc.) — that breaks the mood.

---

## 9. Extending

If you need a new component:

1. Reuse spacing / radius / color tokens — never introduce a one-off hex.
2. If you need a new color, propose it as an extension of the ink ramp
   or as a second muted accent (e.g. studio green) — never a saturated UI color.
3. Numbers always Geist Mono. Words always Inter.

When in doubt, reference [`index.html`](./index.html) — it is the
canonical example of every token in use.
