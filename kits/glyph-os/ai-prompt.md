# Glyph OS · AI Style Prompt

Three drop-in artifacts so AI tools (Cursor, Claude, ChatGPT, v0,
WorkBuddy) generate new Glyph OS components instead of generic "AI UI".

---

## 1. Cursor / Claude Code rule (paste into `.cursorrules`)

> **Use the Glyph OS design system for all UI in this project.**
>
> - Page background is pure `#000000`. Never `#111`, never near-black grey, never tinted dark.
> - Module cards use `#141414`, secondary fills `#1b1b1b`, deepest panels `#0e0e0e`. Surfaces separate via background step + 1px hairline (`#2a2a2a`), **never via shadow**.
> - Typography: **VT323** for every number, label, and uppercase pixel caption. Inter only for short body copy on the inverse card. Numbers must use `font-variant-numeric: tabular-nums`.
> - Type scale (px): `11 · 12 · 13 · 14 · 22 · 30 · 46 · 62 · 118`. Don't invent intermediate sizes.
> - Color discipline — **mono with two single-purpose accents**:
>   - `#ff3b30` (rec) → live / recording / error / destructive only.
>   - `#c8ff5e` (ok) → battery / charging only.
>   - Any other accent breaks the system. Use ink-2 (`#c5c5c5`) or ink-3 (`#7c7c7c`) instead.
> - Radius scale: `22 / 18 / 10 / 8 / 999`. Nothing else. No `rounded-2xl` defaults.
> - Spacing follows a 4px grid: `4 / 8 / 12 / 16 / 20 / 24`.
> - Motion is **digital, not analog**:
>   - Use `steps(1, end)` for pixel-perfect frame swaps (segment bars, sequencer cells, glyph matrix).
>   - Use 240ms `cubic-bezier(.22,.61,.36,1)` only for rare smooth transitions.
>   - **Don't transition numbers via CSS**. Tick values on `setInterval` (700ms sparkline, 1000ms clock, 110ms VU).
> - Inverse card (`.gl-card--inverse`) — light cream `#fafaf6` with `#0a0a0a` ink — at most ONE per layout. Treat it as "paper inside the OS".
> - Reuse classes: `.gl-card`, `.gl-card--inverse`, `.gl-cap`, `.gl-pixel`, `.gl-display`, `.gl-rec`, `.gl-tape`, `.gl-divider`, `.gl-row`, `.gl-bars`, `.gl-bars--ok`. Do NOT introduce new CSS unless the system genuinely lacks the primitive.
>
> If a request would require a saturated UI color, a soft shadow, a display serif, or warm/cream/pink, push back: those are forbidden in Glyph OS.

---

## 2. Generation prompt template

```
Generate this UI in Glyph OS style:

Constraints (MUST follow):
- Pure black canvas (#000000). Module cards #141414. Secondary fills #1b1b1b.
- Surfaces separate via background step + 1px line, NEVER shadow.
- VT323 for all numbers/labels with tabular-nums; Inter for short body copy on the inverse card only.
- Two single-purpose accents: #ff3b30 (live/error), #c8ff5e (charging). Nothing else colored.
- Radius scale 22/18/10/8/999 only. 4px spacing grid.
- Digital motion only: steps(1, end) for cell swaps; 240ms cubic-bezier(.22,.61,.36,1) for rare smooth transitions; tick numbers via setInterval, never CSS transition.
- Reuse .gl-card / .gl-cap / .gl-pixel / .gl-display / .gl-rec / .gl-tape / .gl-row / .gl-bars before authoring new CSS.

Now build:
[YOUR REQUEST HERE — e.g. "a settings panel with four toggle rows and a danger zone"]
```

---

## 3. Do / Don't snapshot

✅ **Do**

- Use `#000000` for the page. Never `#111` or "almost black".
- Numbers always VT323 + tabular-nums.
- Use `--gl-c-rec` (red) only for live/error states; `--gl-c-ok` (lime) only for charging.
- Step backgrounds for elevation. 1px lines for hairlines.
- Tick numerical updates via `setInterval`, not CSS transition.
- Keep at most one inverse card per layout.

❌ **Don't**

- Don't add a third accent color (no blue, no yellow, no purple).
- Don't use `box-shadow` for elevation — step the surface instead.
- Don't transition numbers with CSS — tick them.
- Don't use display serifs (Instrument Serif, Playfair) — wrong mood entirely.
- Don't use `rounded-full` on cards or `rounded-2xl` on toggles. Stick to the radius scale.
- Don't introduce warm/cream colors anywhere. Glyph OS is cold.

---

## 4. AI-readable JSON config

```json
{
  "designSystem": "Glyph OS",
  "version": "1.0.0",
  "rules": {
    "canvas": "#000000",
    "card": "#141414",
    "card-2": "#1b1b1b",
    "shell": "#0e0e0e",
    "ink": ["#ffffff", "#c5c5c5", "#7c7c7c", "#4a4a4a"],
    "accents": {
      "rec": { "color": "#ff3b30", "use": ["live","recording","error","destructive"] },
      "ok":  { "color": "#c8ff5e", "use": ["battery","charging"] }
    },
    "fontPixel": "VT323",
    "fontSans": "Inter",
    "pixelFor": ["numbers","labels","caps","tape","sequencer"],
    "typeScale": [11, 12, 13, 14, 22, 30, 46, 62, 118],
    "radiusScale": [22, 18, 10, 8, 999],
    "spacingGrid": 4,
    "elevation": "background-step + 1px line, never shadow",
    "motion": {
      "easeStep": "steps(1, end)",
      "easeOut": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      "durationTick": "60ms",
      "durationFast": "120ms",
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
      "almostBlackBackground"
    ]
  }
}
```

This JSON is consumable by Cursor MCP, OpenAI function-calling, or any
agent stack that wants to enforce the Glyph OS rules in code review.
