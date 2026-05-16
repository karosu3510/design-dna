# Nothing System · AI Style Prompt

Three drop-in artifacts so AI tools (Cursor, Claude, ChatGPT, v0,
WorkBuddy) generate new Nothing System components instead of generic "AI UI".

---

## 1. Cursor / Claude Code rule (paste into `.cursorrules`)

> **Use the Nothing System design system for all UI in this project.**
>
> - Page background is `#0a0a0a` — slightly-lifted black. Never `#000`, never `#111`, never tinted dark.
> - Module cards `#111111`, hover/secondary fill `#1a1a1a`, deepest panels `#0e0e0e`. Surfaces separate via background step + 1px hairline (`#1f1f1f`), **never via shadow**.
> - Every module card must carry an **internal 18px grid texture** (a `::before` overlay with `linear-gradient(rgba(255,255,255,.012) 1px, transparent 1px)` repeated). This is what gives Nothing its "chassis" feel.
> - Typography: **Space Mono** for every label, caption, mono key/value, tape strip. Inter Tight only on the inverse Now Playing card. Numbers must use `font-variant-numeric: tabular-nums`.
> - Type scale (px): `9 · 9.5 · 11 · 12 · 14 · 18 · 26 · 32`. Don't invent intermediate sizes. Hero numerals (clock, temperature, battery) are **drawn on `<canvas>` as 5×7 dot-matrix** — not webfont.
> - Color discipline — **mono with two single-purpose LEDs**:
>   - `#ff3b3b` (rec) → live / recording / error / destructive only.
>   - `#3ddc84` (ok) → battery / charging only.
>   - Any other accent breaks the system. Use ink-2 (`#bdbdbd`) or ink-3 (`#9a9a9a`) instead.
> - Radius scale: `14 / 12 / 6 / 2 / 999`. Nothing else. No `rounded-2xl` defaults — Nothing System leans toward right-angle chassis corners.
> - Spacing follows a 4px grid: `4 / 8 / 10 / 14 / 18 / 24`.
> - Layout: bento `grid-template-columns: repeat(12, 1fr)` with `grid-auto-rows: 64px` and `gap: 8px`.
> - Motion is **digital, not analog**:
>   - Use `steps(1, end)` for pixel-perfect frame swaps (VU bars, sparklines, glyph matrix).
>   - Use 240ms `cubic-bezier(.22,.61,.36,1)` only for rare smooth transitions.
>   - The single live LED breathes via 2400ms opacity-only keyframes.
>   - **Don't transition numbers via CSS.** Tick values on `setInterval` (140ms VU, 800ms sparkline, 1000ms clock, 1400ms tuner needle).
> - Inverse card (`.nt-card--inverse`) — light cream `#fafafa` with `#0a0a0a` ink — at most ONE per layout. Treat it as "paper inside the OS".
> - Reuse classes: `.nt-card`, `.nt-card--inverse`, `.nt-meta`, `.nt-led`, `.nt-cap`, `.nt-stat`, `.nt-row`, `.nt-ind`, `.nt-bars`, `.nt-bars--ok`, `.nt-vu`, `.nt-tape`, `.nt-divider`, `.nt-pixel-canvas`. Do NOT introduce new CSS unless the system genuinely lacks the primitive.
>
> If a request would require a saturated UI color, a soft shadow, a display serif, or warm/cream/pink, push back: those are forbidden in Nothing System.

---

## 2. Generation prompt template

```
Generate this UI in Nothing System style:

Constraints (MUST follow):
- Slightly-lifted black canvas (#0a0a0a), NOT pure #000. Module cards #111111. Secondary fills #1a1a1a.
- Every module card has an internal 18px grid texture overlay (rgba(255,255,255,.012) lines).
- Surfaces separate via background step + 1px line, NEVER shadow.
- Space Mono for all labels/captions/key-values/tape (tabular-nums); Inter Tight only on the inverse Now-Playing card.
- Hero numerals (clock, temp, %, battery) are drawn on <canvas> as 5×7 dot-matrix, NOT webfont.
- Two single-purpose LEDs: #ff3b3b (live/error), #3ddc84 (charging). Nothing else colored.
- Radius scale 14/12/6/2/999 only. 4px spacing grid.
- Bento grid: 12 cols × 64px rows, gap 8px.
- Digital motion only: steps(1, end) for cell swaps; 240ms cubic-bezier(.22,.61,.36,1) for rare transitions; the live LED uses 2400ms opacity blink; tick numbers via setInterval, never CSS transition.
- Reuse .nt-card / .nt-meta / .nt-led / .nt-cap / .nt-stat / .nt-row / .nt-bars / .nt-vu / .nt-tape before authoring new CSS.

Now build:
[YOUR REQUEST HERE — e.g. "a treasury settings panel with four toggle rows and a danger zone"]
```

---

## 3. Do / Don't snapshot

✅ **Do**

- Use `#0a0a0a` for the page. The lift away from `#000` is the system signature.
- Labels always Space Mono uppercase + 0.18em tracking.
- Big numbers go on canvas as 5×7 dot-matrix; small numbers are Space Mono + tabular-nums.
- Use `--nt-c-rec` (red) only for live/error/recording; `--nt-c-ok` (green) only for charging.
- Step backgrounds for elevation. 1px lines for hairlines.
- Keep the 18px grid `::before` texture on every module card.
- Tick numerical updates via `setInterval`, not CSS transition.
- Keep at most one inverse card per layout.

❌ **Don't**

- Don't drop the 18px grid overlay — that's where the "chassis" lives.
- Don't add a third LED color (no blue, no yellow, no purple).
- Don't use `box-shadow` for elevation — step the surface instead.
- Don't transition numbers with CSS — tick them.
- Don't render hero numerals (clock, %) as a webfont — use the canvas dot-renderer.
- Don't use display serifs (Instrument Serif, Playfair) — wrong mood entirely.
- Don't use `rounded-full` on cards or `rounded-2xl` on toggles. Stick to the radius scale.
- Don't introduce warm/cream colors anywhere except the single inverse card. Nothing System is industrial-cold.

---

## 4. AI-readable JSON config

```json
{
  "designSystem": "Nothing System",
  "version": "1.0.0",
  "rules": {
    "canvas": "#0a0a0a",
    "card": "#111111",
    "card-2": "#1a1a1a",
    "shell": "#0e0e0e",
    "ink": ["#f4f4f4", "#bdbdbd", "#9a9a9a", "#5a5a5a", "#3a3a3a"],
    "leds": {
      "rec": { "color": "#ff3b3b", "use": ["live","recording","error","destructive"] },
      "ok":  { "color": "#3ddc84", "use": ["battery","charging"] }
    },
    "fontMono": "Space Mono",
    "fontSans": "Inter Tight",
    "monoFor": ["labels","caps","tape","kv-numbers"],
    "heroNumerals": "canvas-dot-matrix-5x7",
    "typeScale": [9, 9.5, 11, 12, 14, 18, 26, 32],
    "radiusScale": [14, 12, 6, 2, 999],
    "spacingGrid": 4,
    "elevation": "background-step + 1px line, never shadow",
    "cardTexture": "18px grid overlay (linear-gradient rgba(255,255,255,.012) lines)",
    "layout": {
      "bentoCols": 12,
      "bentoRowHeight": 64,
      "bentoGap": 8
    },
    "motion": {
      "easeStep": "steps(1, end)",
      "easeOut": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      "ledBlink": "2400ms opacity-only",
      "durationTick": "140ms",
      "durationFast": "180ms",
      "durationBase": "240ms",
      "numericTickViaInterval": true
    },
    "inverseCardMaxPerLayout": 1,
    "forbid": [
      "boxShadow",
      "thirdAccentColor",
      "displaySerif",
      "warmCreamColors",
      "cssTransitionOnNumbers",
      "pureBlackBackground",
      "webfontHeroNumerals"
    ]
  }
}
```

This JSON is consumable by Cursor MCP, OpenAI function-calling, or any
agent stack that wants to enforce the Nothing System rules in code review.
