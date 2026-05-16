# Retro ASCII · Design System

> CRT phosphor terminal. Tar-black canvas, P1 phosphor green primary, amber and red as alarm-only LEDs. JetBrains Mono everywhere. Scanlines + vignette as page chrome. Inspired by 80s DEC VT terminals and modern CRT aesthetic projects.

This is the long-form rationale. The machine version is in
[`design-system.css`](./design-system.css) and
[`design-tokens.json`](./design-tokens.json).

---

## 1. Personality

| Trait        | Value                                                                |
| ------------ | -------------------------------------------------------------------- |
| Mood         | Forensic, archival, slightly haunted. A 4 AM pager dump.             |
| Posture      | Bracketed panels, dashed dividers, ASCII trees, blinking cursors.    |
| Reference    | DEC VT100 · Tascam DA-88 · old AT&T monitors · Hyper terminal aesthetic. |
| Forbidden    | Color UI. Sans-serif body. Drop shadows. Anything sharp-edged but rounded. |

Glyph OS / Nothing System are clinical industrial mono — Retro ASCII is **alive**. The scanlines breathe, the cursor blinks, the boot log streams. Every numeric tick is a polled hardware reading on a terminal.

---

## 2. Color

This system is **mono-phosphor with two single-purpose alarm LEDs**.

```
bg        #05090A   ████  tar-black canvas — never #000
shell     #080F0B   ████  deepest panel
card      rgba(5,10,7,.6)  translucent panel — let the radial glow bleed through
line      #0F1F14   ────  hairline
line-2    #1a3320   ────  slightly stronger hairline

ink       #B8FFB8   ████  soft P1 phosphor — primary text
hi        #00FF6A   ████  highlight phosphor — titles, brackets, cursor
dim       #2A4A32   ────  secondary / disabled phosphor
dim-2     #3a5e44   ────  slightly brighter dim
```

Alarm LEDs — **single-purpose, never combined, never decorative**:

- `--ra-c-amber` `#FFB000` — warning / live values / chip emphasis
- `--ra-c-red`   `#FF3B3B` — error / fatal / break / destructive

If you need a third accent, the answer is: don't. Bend the dim ramp instead.

---

## 3. Typography

One family, used everywhere:

- **JetBrains Mono** (with IBM Plex Mono / Fira Code / Space Mono fallbacks). Every label, every number, every title. Tabular-nums on numerics is mandatory.

Type scale (px): `9 · 10 · 11 · 12 · 15 · 26 · 34`.

Letter-spacing presets:

- Body terminal copy → `+0.02em`
- Uppercase mono caption → `+0.20em`
- Tape / status labels → `+0.25em`
- Brand wordmark → `+0.28em`

Every text node should carry the phosphor glow `text-shadow`. This is what makes the terminal feel emissive instead of printed.

---

## 4. Spacing & layout

4px grid: `--ra-sp-1 … --ra-sp-6`. Layouts are typically a 3-column grid `1fr 1.35fr 1fr` inside a 14×18 padded frame, with `gap: 10px` between panels.

```
shell 0 → panel 0 → tile 0 → chip 0 → all sharp
```

**All radius is 0.** This is a CRT. Right-angle corners are a feature.

---

## 5. Elevation

No shadows. Surfaces are separated by:

1. background step (`bg` → `card` translucent → panel border)
2. 1px dim border
3. **Bracket corners** — every `.ra-panel` ships with `::before` and `::after` pseudo-elements drawing 7×7px right-angle brackets at the top-left and bottom-right corners. This is the visual signature.
4. Internal radial gradient `linear-gradient(180deg, rgba(0,255,106,.03), transparent 50%)` — a faint bloom inside every panel.

If you find yourself reaching for `box-shadow`, the layout is wrong. Brackets and the page-level vignette do all the depth work.

---

## 6. Page chrome (what makes it a CRT)

Wrap your root container in `.ra-crt`. It paints:

1. A **center-bloom radial gradient** + **bottom-glow gradient** on the body — gives the dot-pitch warmth.
2. `::before` — **scanlines** as `repeating-linear-gradient(to bottom, transparent 0, transparent 2px, var(--ra-scan) 2px, var(--ra-scan) 3px)` with `mix-blend-mode: screen`.
3. `::after` — **vignette** as `radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.55) 100%)`.

Without these three layers, the system collapses into "green text on black". With them, it becomes a CRT.

---

## 7. Motion

Motion is **terminal-real-time**. Two recipes:

- **`ra-blink`** at `1200ms` — the live phosphor dot and the block cursor. Opacity-only.
- **`steps(1, end)`** for any pixel-frame swap (no tween).

Live numerical data updates on `setInterval`:

| Source             | Cadence  |
| ------------------ | -------- |
| Clock              | 1000ms   |
| Boot log streaming | 60-180ms (variable, simulating spool) |
| Meter values       | 800ms    |
| Signal wave        | 60ms (canvas rAF) |
| Ticker             | 50-80ms  |

**Don't animate values via CSS transition** — the system is supposed to feel like polled hardware.

---

## 8. Components in this kit

| Class               | What it does                                                    |
| ------------------- | --------------------------------------------------------------- |
| `.ra-crt`           | Page wrapper — paints scanlines + vignette                      |
| `.ra-panel`         | Default panel with bracket corners                              |
| `.ra-ttl`           | Panel title (uppercase mono caption + dashed underline)         |
| `.ra-body`          | Panel body wrapper for scrollable content                       |
| `.ra-topbar`        | Device chrome strip (brand + chips)                             |
| `.ra-brand`         | Brand wordmark (uppercase, +0.28em tracking, hi color)          |
| `.ra-chip`          | KEY VALUE ASCII pill                                            |
| `.ra-dot`           | Blinking phosphor LED                                           |
| `.ra-cursor`        | Block cursor / caret                                            |
| `.ra-line.is-*`     | Boot log line variants (ok / warn / err / dim)                  |
| `.ra-meter`         | Labelled numeric + ASCII bar                                    |
| `.ra-tree`          | ASCII directory tree                                            |
| `.ra-tape`          | Status strip with dashed top border                             |
| `.ra-divider`       | Dashed hairline divider                                         |

---

## 9. Do / Don't

✅ **Do**

- Use `#05090A` for the page. Never `#000`.
- Every text node carries `text-shadow: var(--ra-glow)` (or amber/red variants).
- Use `--ra-c-amber` only for live values and warnings; `--ra-c-red` only for fatal/error.
- Wrap layouts in `.ra-crt` to ship scanlines + vignette.
- Right-angle corners everywhere. No exceptions.
- Stream boot logs with `setInterval` at 60-180ms per line for the spool feel.

❌ **Don't**

- Don't add a non-mono font anywhere. JetBrains Mono is the system voice.
- Don't add a third accent color (no blue, purple, cyan).
- Don't use `border-radius` > 0. The CRT has no curves.
- Don't drop the scanlines — they're not decoration, they're how the system reads as a CRT.
- Don't transition numbers with CSS. Tick them.

---

## 10. Component library

Eight live, self-contained components under `components/`:

| #  | File                              | Component         | What it teaches                              |
| -- | --------------------------------- | ----------------- | -------------------------------------------- |
| 01 | `01-panel.html`                   | Panel + brackets  | The bracket-corner panel primitive           |
| 02 | `02-topbar-chips.html`            | Topbar + chips    | Device chrome strip with status chips        |
| 03 | `03-boot-log.html`                | Boot log stream   | setInterval-driven boot spool with 4 levels  |
| 04 | `04-meter.html`                   | Meter             | Labelled value + ASCII bar (live)            |
| 05 | `05-ascii-tree.html`              | ASCII tree        | Directory tree with dir/sel/ext styling      |
| 06 | `06-clock.html`                   | Phosphor clock    | Big numerals + threads/qps/latency stats     |
| 07 | `07-cursor-prompt.html`           | Cursor + prompt   | Block-cursor command line                    |
| 08 | `08-event-feed.html`              | Event feed        | Timestamped warn/err/info events             |

---

## 11. AI integration

Pair this kit with [`ai-prompt.md`](./ai-prompt.md) — Cursor / Claude rule,
generation template, and AI-readable JSON config. Retro ASCII is the easiest
system to abuse (one wrong color, one rounded corner and the CRT collapses).

---

When in doubt, reference [`index.html`](./index.html) — the canonical
browser-based documentation, with every token, every component, and both
example pages rendered live.
