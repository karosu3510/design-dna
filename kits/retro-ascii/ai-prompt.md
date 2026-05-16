# Retro ASCII · AI Style Prompt

Three drop-in artifacts so AI tools (Cursor, Claude, ChatGPT, v0,
WorkBuddy) generate new Retro ASCII components instead of generic "AI UI".

---

## 1. Cursor / Claude Code rule (paste into `.cursorrules`)

> **Use the Retro ASCII design system for all UI in this project.**
>
> - Page background `#05090A` — tar black, NEVER `#000`. Wrap the root container in `.ra-crt` so it paints scanlines + center-bloom + vignette.
> - Panels use `rgba(5,10,7,.6)` translucent fill on a 1px `#0F1F14` border. **Every panel ships with bracket corners** via `::before` and `::after` pseudo-elements (7×7px right-angle brackets at top-left and bottom-right). This is the visual signature.
> - Surfaces separate via background step + 1px line + brackets, **never via shadow**.
> - Typography: **JetBrains Mono** (with IBM Plex Mono / Fira Code / Space Mono fallbacks) everywhere — labels, numerals, body, titles. No exceptions, no sans-serif.
> - Numbers must use `font-variant-numeric: tabular-nums`.
> - Type scale (px): `9 · 10 · 11 · 12 · 15 · 26 · 34`. Don't invent intermediate sizes.
> - **Every text node carries the phosphor glow** `text-shadow: 0 0 2px rgba(0,255,106,.55), 0 0 8px rgba(0,255,106,.22)`. Amber and red variants exist for warnings/errors.
> - Color discipline — **mono-phosphor with two single-purpose alarm LEDs**:
>   - `#B8FFB8` (ink) — primary text
>   - `#00FF6A` (hi) — titles, brackets, cursor, accents
>   - `#2A4A32` (dim) — secondary / disabled
>   - `#FFB000` (amber) — warnings / live values / chip emphasis only
>   - `#FF3B3B` (red) — fatal / error / break / destructive only
>   - Any other color breaks the system.
> - **All radius is 0**. No `border-radius`. This is a CRT.
> - Spacing follows a 4px grid: `4 / 6 / 8 / 12 / 14 / 18`.
> - Layout: 3-column grid `1fr 1.35fr 1fr` with `gap: 10px` is the canonical bento.
> - Motion is **terminal-real-time**:
>   - `ra-blink` at 1200ms for the live LED dot and the block cursor (opacity-only).
>   - `steps(1, end)` for pixel-frame swaps.
>   - **Don't transition numbers via CSS.** Tick values on `setInterval` (60-180ms boot log streaming, 800ms meter, 1000ms clock, 60ms canvas wave).
> - Reuse classes: `.ra-crt`, `.ra-panel`, `.ra-ttl`, `.ra-body`, `.ra-topbar`, `.ra-brand`, `.ra-chip`, `.ra-dot`, `.ra-cursor`, `.ra-line.is-ok/warn/err/dim`, `.ra-meter`, `.ra-tree`, `.ra-tape`, `.ra-divider`. Do NOT introduce new CSS unless the system genuinely lacks the primitive.
>
> If a request would require a saturated UI color, a soft shadow, a sans-serif body, a rounded corner, or anything that feels modern-flat, push back: those are forbidden in Retro ASCII.

---

## 2. Generation prompt template

```
Generate this UI in Retro ASCII style:

Constraints (MUST follow):
- Tar-black canvas (#05090A), NEVER #000. Wrap root in .ra-crt for scanlines + vignette.
- Panels are translucent rgba(5,10,7,.6) with 1px #0F1F14 border AND bracket corners (::before/::after 7×7px right-angle brackets).
- JetBrains Mono everywhere — labels, numbers, body, titles. tabular-nums on numerics.
- Every text node carries the phosphor glow text-shadow.
- Single phosphor color (#B8FFB8 ink + #00FF6A hi + #2A4A32 dim) plus two LED-only accents: #FFB000 amber (warnings/live values), #FF3B3B red (errors only).
- ALL radius is 0. No border-radius.
- 4px spacing grid; 3-column 1fr/1.35fr/1fr layout is canonical.
- Terminal-real-time motion: ra-blink 1200ms for LEDs/cursor; steps(1, end) for frame swaps; tick numbers via setInterval, never CSS transition.
- Reuse .ra-panel / .ra-ttl / .ra-meter / .ra-line / .ra-chip / .ra-dot / .ra-cursor / .ra-tree before authoring new CSS.

Now build:
[YOUR REQUEST HERE — e.g. "a deploy log panel with streaming output and 3 status chips"]
```

---

## 3. Do / Don't snapshot

✅ **Do**

- Use `#05090A` for the page.
- Mono everywhere (JetBrains Mono primary, IBM Plex Mono fallback).
- Every text node carries `text-shadow: var(--ra-glow)`.
- Brackets on every panel.
- Use amber for live numeric meters / warnings; red for fatal/error.
- Wrap pages in `.ra-crt` for scanlines + vignette.
- Stream output via setInterval at 60-180ms per line.

❌ **Don't**

- Don't drop the scanlines — they're load-bearing.
- Don't add a non-mono font anywhere.
- Don't use `border-radius > 0`. Right angles.
- Don't add a third accent (no blue, purple, cyan).
- Don't transition numbers with CSS — tick them.
- Don't use `box-shadow` for elevation — brackets and vignette handle it.
- Don't lighten the bg to "softer black". Tar black is the signature.

---

## 4. AI-readable JSON config

```json
{
  "designSystem": "Retro ASCII",
  "version": "1.0.0",
  "rules": {
    "canvas": "#05090A",
    "shell": "#080F0B",
    "panelFill": "rgba(5,10,7,.6)",
    "ink": "#B8FFB8",
    "hi": "#00FF6A",
    "dim": "#2A4A32",
    "alarms": {
      "amber": { "color": "#FFB000", "use": ["warnings","live-values","chip-emphasis"] },
      "red":   { "color": "#FF3B3B", "use": ["fatal","error","break","destructive"] }
    },
    "fontMono": "JetBrains Mono",
    "monoFor": "everything",
    "typeScale": [9, 10, 11, 12, 15, 26, 34],
    "radiusScale": [0],
    "spacingGrid": 4,
    "elevation": "background-step + 1px line + bracket corners, never shadow",
    "pageChrome": {
      "scanlines": "repeating-linear-gradient(to bottom, transparent 0, transparent 2px, rgba(0,255,106,.05) 2px, rgba(0,255,106,.05) 3px) with mix-blend-mode: screen",
      "vignette": "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.55) 100%)",
      "centerBloom": "radial-gradient(ellipse at center, rgba(0,255,106,.06), transparent 60%)"
    },
    "panelChrome": {
      "brackets": "::before top-left + ::after bottom-right, 7×7px hi-color L-corners"
    },
    "textShadow": "0 0 2px rgba(0,255,106,.55), 0 0 8px rgba(0,255,106,.22)",
    "motion": {
      "easeStep": "steps(1, end)",
      "ledBlink": "1200ms opacity-only",
      "bootLogStream": "60-180ms per line",
      "meterTick": "800ms",
      "clockTick": "1000ms",
      "numericTickViaInterval": true
    },
    "forbid": [
      "boxShadow",
      "thirdAccentColor",
      "sansSerifBody",
      "borderRadius",
      "pureBlackBackground",
      "noScanlines",
      "cssTransitionOnNumbers"
    ]
  }
}
```

This JSON is consumable by Cursor MCP, OpenAI function-calling, or any
agent stack that wants to enforce the Retro ASCII rules in code review.
