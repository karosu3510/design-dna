# Mercury Banking · AI Style Prompt

Three drop-in artifacts so AI tools (Cursor, Claude, ChatGPT, v0,
WorkBuddy) generate new Mercury Banking components instead of generic "AI UI".

---

## 1. Cursor / Claude Code rule (paste into `.cursorrules`)

> **Use the Mercury Banking design system for all UI in this project.**
>
> - Page background `#fbfaf7` — warm paper. NEVER pure `#fff` (looks templated).
> - Cards `#ffffff` with 1px `#ececea` hairline + subtle `0 1px 0 #e0dfdc, 0 2px 6px rgba(15,15,16,.025)` shadow. Never heavier.
> - Typography: **Inter** for everything verbal (headings, body, button labels, nav). **JetBrains Mono** for everything numerical (balances, percentages, dates, account numbers). Numerics always use `font-variant-numeric: tabular-nums` and `letter-spacing: -0.005em`.
> - Type scale (px): `10.5 · 11 · 12 · 13 · 14 · 15 · 20 · 24 · 36`. Hero balance gets `36px` JetBrains Mono with `letter-spacing: -0.025em` for the "well-tailored" feel.
> - Color discipline — **mono-paper light + single purple CTA + four semantic kv pairs**:
>   - Ink ramp: `#0f0f10 / #2a2a2d / #5b5d63 / #8a8c93 / #b6b7bc`
>   - Brand purple `#5d4ee0` (CTA only — `Send money` / `New account`); paired with `rgba(93,78,224,.18)` glow halo
>   - Semantic kv pairs (only on pills/chips):
>     - pos `#128a4d` on `#e6f4ec`
>     - neg `#b3261e` on `#fbeae9`
>     - warn `#a35d00` on `#fdf1da`
>     - info `#1857c4` on `#e7eefb`
>   - Any other accent breaks the system.
> - Radius: `16 / 14 / 10 / 8 / 999`. Default card is 14px.
> - Spacing: 4px modular grid `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40`. Cards typically 20-22px padding; gutter 32px.
> - Layout: sidebar (240-260px) + content area with grid of paper cards, generous breathing room.
> - Motion: cubic-bezier(.22,.61,.36,1) ease-out at 120-240ms. Live status dot uses `mc-pulse` 1800ms opacity keyframes. **Never CSS-transition numeric values.**
> - Reuse classes: `.mc-card[--mute/--sink]`, `.mc-eyebrow`, `.mc-display`, `.mc-num-h1`, `.mc-num-h2`, `.mc-pill--pos/neg/warn/info/neutral`, `.mc-status`, `.mc-btn[--primary]`, `.mc-nav`, `.mc-acct`, `.mc-section`, `.mc-tabs`, `.mc-divider`. Do NOT introduce new CSS unless the system genuinely lacks the primitive.
> - **Regional note**: Upstream Mercury uses green-up / red-down (US convention). For Chinese-market products, swap pos/neg semantics to red-up / green-down.
>
> If a request would require a saturated non-purple brand color, a display serif, heavy drop-shadow, or pure-white canvas, push back: those break Mercury.

---

## 2. Generation prompt template

```
Generate this UI in Mercury Banking style:

Constraints (MUST follow):
- Warm paper canvas (#fbfaf7), NEVER pure #fff. Cards are #ffffff with 1px #ececea hairline + subtle 2-layer shadow.
- Inter for verbal copy + JetBrains Mono for ALL numerics (tabular-nums, letter-spacing -0.005em).
- Hero balance: 36px JetBrains Mono + -0.025em tracking.
- Single brand purple #5d4ee0 (CTA only); semantic kv chips for pos/neg/warn/info — that's the entire color budget.
- Radius 16/14/10/8/999. 4px modular spacing grid.
- 2-layer subtle shadow only: 0 1px 0 #e0dfdc, 0 2px 6px rgba(15,15,16,.025). Heavy drops break the system.
- Calm motion: cubic-bezier(.22,.61,.36,1) at 120-240ms; live dot uses 1800ms opacity pulse; NEVER CSS-transition numbers.
- Reuse .mc-card / .mc-display / .mc-num-h1 / .mc-num-h2 / .mc-pill--* / .mc-status / .mc-btn / .mc-nav / .mc-tabs before authoring new CSS.

Now build:
[YOUR REQUEST HERE — e.g. "a treasury allocation card with 3 sub-account rows + sparklines"]
```

---

## 3. Do / Don't snapshot

✅ **Do**

- Use `#fbfaf7` for the page.
- All money / dates / account numbers in JetBrains Mono with tabular-nums.
- Hero balance gets `-0.025em` tracking — that's where the premium feel comes from.
- Restrict color to ink ramp + purple CTA + 4 semantic kv pairs.
- Use the 2-layer subtle card shadow.
- Calm cubic-bezier motion at 120-240ms.

❌ **Don't**

- Don't use pure `#fff` for the page — you'll lose the "warm" affordance.
- Don't use display serifs.
- Don't drop heavy box-shadow.
- Don't put money figures in Inter — they'll feel unstable.
- Don't add a second brand color.
- Don't combine pos + neg pills on the same card unless showing a comparison.
- Don't CSS-transition numeric values.

---

## 4. AI-readable JSON config

```json
{
  "designSystem": "Mercury Banking",
  "version": "1.0.0",
  "rules": {
    "canvas": "#fbfaf7",
    "surface": "#ffffff",
    "ink": ["#0f0f10", "#2a2a2d", "#5b5d63", "#8a8c93", "#b6b7bc"],
    "hair": ["#ececea", "#e0dfdc", "#d2d1cd"],
    "brandPurple": {
      "scale": ["#f3f1ff", "#e6e2ff", "#c9c1ff", "#7a6bf2", "#5d4ee0", "#4a3cc8", "#3a2fa0"],
      "ctaToken": "#5d4ee0",
      "ctaGlow": "rgba(93,78,224,.18)"
    },
    "semantic": {
      "pos":  { "fg": "#128a4d", "bg": "#e6f4ec" },
      "neg":  { "fg": "#b3261e", "bg": "#fbeae9" },
      "warn": { "fg": "#a35d00", "bg": "#fdf1da" },
      "info": { "fg": "#1857c4", "bg": "#e7eefb" }
    },
    "fontSans": "Inter",
    "fontMono": "JetBrains Mono",
    "monoFor": ["money","percent","date","account-number","tabular-data"],
    "typeScale": [10.5, 11, 12, 13, 14, 15, 20, 24, 36],
    "tracking": { "tight": "-0.025em", "num": "-0.005em", "cap": "0.06em", "cap-2": "0.10em" },
    "radiusScale": [16, 14, 10, 8, 999],
    "spacingGrid": 4,
    "elevation": "0 1px 0 #e0dfdc, 0 2px 6px rgba(15,15,16,.025) — never heavier",
    "motion": {
      "easeOut": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      "easeInOut": "cubic-bezier(0.4, 0.0, 0.2, 1)",
      "durationFast": "120ms",
      "durationBase": "180ms",
      "durationSlow": "240ms",
      "livePulse": "1800ms opacity-only",
      "numericTickViaInterval": true
    },
    "regionalNote": "Upstream uses green-up/red-down; for Chinese market swap pos/neg semantics to red-up/green-down",
    "forbid": [
      "pureWhiteCanvas",
      "secondBrandColor",
      "displaySerif",
      "heavyDropShadow",
      "interForNumerics",
      "cssTransitionOnNumbers",
      "combiningPosAndNegOnSameCard"
    ]
  }
}
```

This JSON is consumable by Cursor MCP, OpenAI function-calling, or any
agent stack that wants to enforce the Mercury rules in code review.
