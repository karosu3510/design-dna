# Vortex Gallery — Design System Specification

Version 1.0.0 · Distilled from J0SUKE / vortex-gallery for the Design DNA library.

---

## 1. Philosophy

Vortex Gallery is a **cinematic media surface**. It is not for productivity, not for dashboards, not for forms. It is for moments where the interface should disappear into the content — archives, photo books, fashion lookbooks, label catalogs, video loops. The DNA borrows from:

- **1950s American travel posters** — saturated warm orange against deep black, hand-set sans display type, paper-stock grain
- **WebGL camera systems** — momentum, lerp, wheel-driven inertia, no scrollbar
- **Cinematic title cards** — Inter Tight at hero size, single accent, generous void

The system optimizes for **scrolling through density** — show 30+ posters at once without overwhelming the eye, by relying on void background to do the negative-space work.

## 2. Color

### 2.1 Void scale (4 tiers, never lighter than `#1f1f1f`)

| Token         | Value      | Use                                                  |
|---------------|------------|------------------------------------------------------|
| `--vg-c-void`  | `#0a0a0a`  | Page canvas, the deep-space layer everything sits on |
| `--vg-c-depth` | `#101010`  | Card surfaces, modals, key panels                    |
| `--vg-c-shell` | `#161616`  | Inner panels, list rows, secondary surfaces          |
| `--vg-c-soft`  | `#1f1f1f`  | Hover states, tertiary surfaces, code blocks         |

### 2.2 Ink ramp

| Token        | Value                       | Use                          |
|--------------|-----------------------------|------------------------------|
| `--vg-c-ink`   | `#fafafa`                  | Primary text, hero, buttons  |
| `--vg-c-ink-2` | `rgba(255,255,255,.62)`    | Body, descriptions           |
| `--vg-c-ink-3` | `rgba(255,255,255,.42)`    | Captions, meta, cap labels   |
| `--vg-c-ink-4` | `rgba(255,255,255,.22)`    | Disabled, decorative dividers|

### 2.3 Accents (use sparingly)

| Token             | Value            | Reserved for                                        |
|-------------------|------------------|-----------------------------------------------------|
| `--vg-c-ember`    | `#ff7a3d`        | Active state, primary CTA, "live", current item     |
| `--vg-c-sun`      | `#ffd24a`        | Optional secondary highlight (numerals, badges)     |
| `--vg-c-ocean`    | `#3a78ff`        | Link / nav underline only — never on backgrounds    |

> **Rule:** Exactly one ember per visible viewport. Sun and ocean are optional, never replace ember.

## 3. Typography

### 3.1 Families

- **Inter Tight** — display copy (hero, h1, h2). 500 weight, letter-spacing −0.04em on hero, −0.02em on h1/h2.
- **Inter** — UI / body. 400 / 500 weights only.
- **JetBrains Mono + tabular-nums** — every ticking or grid-aligned number. Frame indices, timers, dB readouts, BPM, percentages, file sizes.

### 3.2 Scale

| Token             | Size     | Use                                         |
|-------------------|----------|---------------------------------------------|
| `--vg-fs-hero`    | 84px     | Landing hero (`Footage,\nnot a feed.`)      |
| `--vg-fs-display` | 56px     | Section headers                             |
| `--vg-fs-h1`      | 36px     | Page titles                                 |
| `--vg-fs-h2`      | 22px     | Card titles, sub-section headers            |
| `--vg-fs-lg`      | 17px     | Lead paragraph                              |
| `--vg-fs-md`      | 15px     | Standard UI                                 |
| `--vg-fs-base`    | 13.5px   | Body                                        |
| `--vg-fs-sm`      | 12px     | Meta, secondary                             |
| `--vg-fs-cap`     | 10px     | Uppercase captions, index numbers           |
| `--vg-fs-mini`    | 9px      | Footnotes, tag chips                        |

## 4. Spacing & radius

- 4px grid: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64`. Never `5`, `7`, `10`, `15`.
- Radius: `20 (shell) / 14 (panel) / 10 (card) / 6 (tile) / 999 (pill)`. Five values, no improvisation.

## 5. Shadow & depth

Three recipes, three uses. Don't invent a fourth.

- `--vg-shadow-depth` — Card sits on void. White-1% inset top edge + black-60% drop shadow at 24px offset.
- `--vg-shadow-glow` — Reserve for ember-active states only (button hover, current item ring).
- `--vg-shadow-inset` — Subtle 1px inset for any surface that needs to read as "panel inside panel".

## 6. Motion

### 6.1 Easings

- `--vg-ease-vortex` `cubic-bezier(0.16, 1, 0.3, 1)` — hero entrance, image flip-in. Strong overshoot, gentle land.
- `--vg-ease-soft` `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover / fades.
- `--vg-ease-snap` `cubic-bezier(0.22, 0.61, 0.36, 1)` — UI affordances (toast, modal).

### 6.2 Durations

- `120ms` fast — micro feedback (hover color)
- `260ms` base — most UI transitions
- `640ms` slow — hero entrance, image reveal

### 6.3 Lerp constants (for RAF, not CSS)

```js
// Vortex camera
scrollY.current += (target - current) * 0.05;  // inertial — main camera
cursor.current  += (target - current) * 0.18;  // snappy   — cursor follow
nav.current     += (target - current) * 0.10;  // balanced — sidebar
```

> **Rule:** Anything driven by `wheel` or `mousemove` must use lerp + RAF, never CSS transition.

## 7. Components

Eight building blocks. Each is one file under `components/` you can open and copy from.

| #  | Name              | What it is                                                    |
|----|-------------------|---------------------------------------------------------------|
| 01 | Void shell        | Card surface — `--vg-c-depth` + 1px hairline + drop shadow    |
| 02 | Ember pill        | Primary CTA pill — ember bg, void text, hover lighten         |
| 03 | Poster tile       | 3:4 image with inset 1px border ring, hover scale 1.04        |
| 04 | Momentum cursor   | SVG cursor with feTurbulence + lerp follow                    |
| 05 | Cap index         | Mono index label `01 / 24` — letter-spaced 0.24em             |
| 06 | Mono readout      | Tabular numeric display — wheels, counters, BPM               |
| 07 | Vortex strip      | Horizontal poster strip with edge fade-mask + wheel scroll    |
| 08 | Glow badge        | Ember dot with 12px ring glow — "live" / "current" indicator  |

## 8. Application heuristics

When the system applies well:
- Image archives (record covers, posters, fashion editorial)
- Cinematic landing pages
- Photo essay / longform article hero
- Festival schedules (deep-black + ember active state)
- Music label catalogs

When the system is wrong:
- Forms, tables, dashboards (use a.Record or Linear instead)
- Marketing pages with high information density
- Anything that needs a light theme

## 9. Distinct moves vs neighbors

- vs **a.Record** — vortex is dark/cold, a.Record is warm/cream. Both warm-accent, but vortex is for media, a.Record for tools.
- vs **retro-ascii** — both dark, but retro-ascii is monospace-only / phosphor-emissive / terminal; vortex is cinematic display + hand-set sans.
- vs **Linear** — Linear is gray/blue / productivity. Vortex is black/orange / archive.
- vs **Nothing** — Nothing is industrial-cold / gray-on-gray. Vortex has a warm accent and a cinematic feel.

---

## 10. Anti-patterns (do not ship these)

- ❌ Light gray background `#f4f4f4` — kills the cinematic depth
- ❌ Two saturated accents (ember + a green / pink)
- ❌ Drop shadows with low blur and no inset highlight (looks like Material 2014)
- ❌ Headings in regular weight (lose the cinematic punch)
- ❌ CSS transitions on wheel-driven scroll (jitters)
- ❌ Bright white text on hover — break the value hierarchy

If a brief contradicts these, push back or pick a different DNA kit.
