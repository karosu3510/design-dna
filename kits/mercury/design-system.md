# Mercury Banking · Design System

> Warm-paper treasury dashboard. Inter primary + JetBrains Mono numerics. Restrained light-mode palette, single-purpose purple CTA, hairline borders, ink-on-paper. Inspired by Mercury banking and modern fintech treasury UIs.

This is the long-form rationale. The machine version is in
[`design-system.css`](./design-system.css) and
[`design-tokens.json`](./design-tokens.json).

---

## 1. Personality

| Trait        | Value                                                                  |
| ------------ | ---------------------------------------------------------------------- |
| Mood         | Calm, well-capitalized, slightly editorial. Banking that respects you. |
| Posture      | Sidebar + grid of paper cards on warm canvas; wide breathing room.     |
| Reference    | Mercury banking · Stripe Atlas · early Robinhood checking.             |
| Forbidden    | Pure white canvas. Loud color. Heavy shadow drop. Display serifs.      |

Other Tier 2 systems in the library are either dark/industrial (Nothing, Retro ASCII) or warm/audio (a.Record). Mercury is what the rest of them keep mistakenly skipping past — **light, paper, financial, premium**. Inter + JetBrains Mono pairing carries the entire system.

---

## 2. Color

**Mono-paper light mode + single purple CTA + four semantic kv pairs.**

```
bg            #fbfaf7   ████  warm paper canvas — never pure #fff
surface       #ffffff   ████  card / panel
surface-mute  #f6f5f2   ████  hover / secondary
surface-sink  #f1efea   ████  recessed
hair          #ececea   ────  default hairline
hair-2        #e0dfdc   ────  stronger hairline (card border)
hair-3        #d2d1cd   ────  active state
```

Ink ramp:

```
ink     #0f0f10
ink-2   #2a2a2d
ink-3   #5b5d63
mute    #8a8c93
mute-2  #b6b7bc
```

Brand purple — the only color affordance, used on primary CTAs (`Send money`, `New account`):

```
p-50   #f3f1ff
p-100  #e6e2ff
p-200  #c9c1ff
p-400  #7a6bf2
p-500  #5d4ee0   ← canonical CTA
p-600  #4a3cc8
p-700  #3a2fa0
p-glow rgba(93,78,224,.18) — soft halo behind CTA shadow
```

Semantic — kv pairs (`color` + tinted `bg`) used only on pills and small chips:

```
pos   #128a4d  on  #e6f4ec
neg   #b3261e  on  #fbeae9
warn  #a35d00  on  #fdf1da
info  #1857c4  on  #e7eefb
```

> **Note**: Mercury upstream uses **green-up / red-down** (US convention). Our regional convention for Chinese users is red-up / green-down — when adapting this system to a Chinese-market product, swap `pos` ↔ `neg` semantics.

---

## 3. Typography

**Inter** for everything verbal, **JetBrains Mono** for everything numerical.

- All money figures, balances, dates, account numbers, percentages → JetBrains Mono with `font-variant-numeric: tabular-nums` and `letter-spacing: -0.005em`.
- Headings, body copy, button labels, navigation → Inter.
- Hero balance gets Inter Display weight via JetBrains Mono — the negative tracking `-0.025em` is what gives the system its "well-tailored" feel.

Type scale (px): `10.5 · 11 · 12 · 13 · 14 · 15 · 20 · 24 · 36`.

Letter-spacing presets:

- Hero balance numerals → `-0.025em`
- Inline mono numerics → `-0.005em` (pairs cleanly with Inter)
- Uppercase caption (small) → `+0.06em`
- Uppercase caption (medium) → `+0.10em`

---

## 4. Spacing & layout

4px modular grid: `--mc-sp-1 … --mc-sp-8` (`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40`). Sidebar typically 240-260px, content gutter 32px, card padding 20-22px. Cards breathe.

```
shell 16 → card 14 → tile 10 → chip 8 → pill 999
```

---

## 5. Elevation

Mercury earns depth through **two-layer subtlety**, never bold drops:

1. `--mc-shadow-card`: `0 1px 0 hair-2, 0 2px 6px rgba(15,15,16,.025)` — a single hairline at the bottom + a 6px-blur ground shadow at <3% opacity. That's it.
2. `--mc-shadow-cta`: hairline + 16px soft purple halo (`p-glow`) — the only accent-tinted shadow in the system.
3. `--mc-shadow-pop`: hover/popovers — slightly elevated.

If you reach for bigger blur or higher opacity, the system collapses into "fintech 2018". Stay subtle.

---

## 6. Motion

Motion is **calm, fast, never bouncy**:

- `--mc-ease-out` cubic-bezier(.22,.61,.36,1) — the default
- `--mc-ease-in-out` cubic-bezier(.4,0,.2,1) — for symmetric transitions
- Durations: `120ms` (fast), `180ms` (base), `240ms` (slow)
- Live status dot uses `mc-pulse` 1800ms `opacity` keyframes — calm, not flashy

Live numerical data updates via `setInterval`:

| Source              | Cadence  |
| ------------------- | -------- |
| Live sync indicator | 1800ms breath |
| Market prices ticker| 4000-6000ms (wide range — banking feels less twitchy than trading) |
| Cash position chart | reload on tab change, not auto-tick |

**No CSS transitions on numeric values.** Even in light fintech, that feels off.

---

## 7. Components in this kit

| Class                  | What it does                                                  |
| ---------------------- | ------------------------------------------------------------- |
| `.mc-card[--mute/--sink]` | Paper card surfaces (3 elevation levels)                  |
| `.mc-eyebrow`          | Card eyebrow label + optional info icon                       |
| `.mc-display`          | Hero balance numerals                                          |
| `.mc-num-h1` / `.mc-num-h2` | H1 / H2 mono numerics                                    |
| `.mc-pill--pos/neg/warn/info/neutral` | Semantic kv pills                              |
| `.mc-status`           | Live status dot pill (LIVE · syncing)                          |
| `.mc-btn[--primary]`   | Default + primary CTA buttons                                  |
| `.mc-nav`              | Sidebar nav row                                                |
| `.mc-acct`             | Account row with avatar / balance                              |
| `.mc-section`          | Sidebar section caption                                        |
| `.mc-tabs`             | Range tabs (7D / 30D / 90D / YTD / 1Y)                         |
| `.mc-divider`          | Hairline divider                                               |

---

## 8. Do / Don't

✅ **Do**

- Use `#fbfaf7` for the page. Pure `#fff` makes the system look "templated SaaS".
- Numerics always JetBrains Mono + tabular-nums + `-0.005em` tracking.
- Restrict color: ink ramp, hair, purple CTA, four semantic kv pairs. That's it.
- Use `--mc-shadow-card` for elevation; never go heavier without reason.
- Pair every chart with a tabular-nums summary number, not just a line.

❌ **Don't**

- Don't use a saturated brand color other than purple. Mercury is purple-on-paper.
- Don't use display serifs anywhere. Inter handles all type duty.
- Don't drop heavy box-shadow. The system's restraint is what reads as premium.
- Don't put numerics in Inter — money in Inter looks unstable.
- Don't combine `pos` + `neg` chips on the same card unless showing a comparison.

---

## 9. Component library

Eight live, self-contained components under `components/`:

| #  | File                          | Component         | What it teaches                              |
| -- | ----------------------------- | ----------------- | -------------------------------------------- |
| 01 | `01-paper-card.html`          | Paper card        | The 3-tier mc-card surface + eyebrow         |
| 02 | `02-balance-display.html`     | Hero balance      | mc-display + cur/cents typography pairing    |
| 03 | `03-status-pills.html`        | Status pills      | All five mc-pill variants in context         |
| 04 | `04-live-status.html`         | Live status dot   | mc-status with breathing animation           |
| 05 | `05-cta-buttons.html`         | CTA buttons       | mc-btn primary / secondary / icon            |
| 06 | `06-sidebar-nav.html`         | Sidebar nav       | mc-nav + mc-section + mc-acct rows           |
| 07 | `07-range-tabs.html`          | Range tabs        | mc-tabs segmented control                    |
| 08 | `08-mini-sparkline.html`      | Mini sparkline    | Mono numeric paired with inline canvas line  |

---

## 10. AI integration

Pair this kit with [`ai-prompt.md`](./ai-prompt.md) — Cursor / Claude rule,
generation template, and AI-readable JSON config. Mercury is the easiest
system to over-decorate; the rule exists to keep AI generations restrained.

---

When in doubt, reference [`index.html`](./index.html) — the canonical
browser-based documentation, with every token, every component, and both
example pages rendered live.
