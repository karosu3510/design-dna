# a.Record · AI Style Prompt

Three drop-in artifacts so AI tools (Cursor, Claude Code, ChatGPT, v0) generate
new components in **a.Record style** instead of generic "AI UI".

---

## 1. Cursor / Claude Code rule (paste into `.cursorrules` or system prompt)

> **Use the a.Record design system for all UI in this project.**
>
> - Background canvas is warm cream `#eceae3`, never pure white. Card surfaces are `#ffffff` on top of the cream canvas.
> - Inner panels (hero, sidebar, large blocks) use `#f1efe9`.
> - All interactive surfaces (buttons, chips, inputs, tabs) are 999px pill radius. Cards use 30px → 20px → 16px → 14px radius scale, never anything else.
> - Typography: **Inter** for everything except numerical data. Use **Geist Mono** with `font-variant-numeric: tabular-nums` for any number that updates in real time (timers, counters, dB, LUFS, BPM, file sizes).
> - Headlines use `letter-spacing: -0.025em`. Body uses `-0.005em`. Uppercase labels use `+0.18em` and 10.5px Inter Medium.
> - Color discipline: there is exactly one accent — `#f24a3a`. Reserve it for live recording, errors, or destructive states. Never use it for branding, links, charts, or decoration. No gradients. No saturated UI colors.
> - Shadows are soft and directional. Use the three pre-defined recipes only:
>   - card: `0 1px 0 rgba(255,255,255,0.9) inset, 0 24px 60px rgba(40,38,32,0.10), 0 4px 14px rgba(40,38,32,0.05)`
>   - glass: `0 14px 30px rgba(35,33,28,0.08)` with `backdrop-filter: blur(18px) saturate(1.05)` and 55% white background
>   - pill: `0 1px 1px rgba(28,28,26,0.03)`
> - Spacing follows a 4px grid: 4 / 8 / 12 / 16 / 20 / 24 / 28 / 32.
> - Motion: 240ms `cubic-bezier(0.22, 0.61, 0.36, 1)` for entrances, 120ms `cubic-bezier(0.4, 0, 0.2, 1)` for everything else. Real-time data smooths via low-pass coefficient (0.05–0.18), not CSS transitions.
> - When generating components, prefer `<link rel="stylesheet" href="./design-system.css">` and use the existing utility classes (`.ar-shell`, `.ar-panel`, `.ar-pill`, `.ar-glass`, `.ar-mono`, `.ar-rec-dot`, `.ar-cap`) before introducing new CSS.
>
> If a request would require a saturated color, a sharp shadow, or a display serif font, push back: those break the system.

---

## 2. Generation prompt template

When you want AI to produce a new screen in this style, prefix the request with:

```
Generate this UI in a.Record style:

Constraints (MUST follow):
- Cream canvas (#eceae3), white card surfaces, cream-2 (#f1efe9) inner panels.
- Inter for UI/headlines; Geist Mono with tabular-nums for any live number.
- 999px pill radius for all interactive elements; 30/20/16/14 radius scale for cards.
- Single accent #f24a3a, only for live/destructive states.
- 4px spacing grid. Soft directional shadows. No gradients. No saturated colors.
- Reuse classes from design-system.css when possible: .ar-shell, .ar-panel, .ar-pill, .ar-glass, .ar-mono, .ar-cap, .ar-rec-dot.

Now build:
[YOUR REQUEST HERE — e.g. "a notification center with 5 grouped sections"]
```

Paste this whole block when you start a new conversation. It primes the AI
before any generation call.

---

## 3. Do / Don't snapshot

✅ **Do**

- Use cream `#eceae3` for the page, never `#fff` or `#000`.
- Mix Inter (words) and Geist Mono (numbers) — they're the personality.
- Use uppercase 10.5px Inter Medium with `letter-spacing: 0.18em` for section captions.
- Layer glass panels (with backdrop-filter blur) over the hero background, not flat surfaces.
- Reach for the existing utility classes before authoring new CSS.

❌ **Don't**

- Add a second accent color. One red. That's it.
- Use sharp/glow shadows like `0 0 20px ...`.
- Mix Geist Mono and Inter inside a single sentence.
- Bring in display serifs (Instrument Serif, Playfair) — they break the mood.
- Use ChatGPT-default purple-blue gradients, lucide icons in saturated tints, or rounded-2xl Tailwind defaults.

---

## 4. AI-readable JSON (for tooling)

```json
{
  "designSystem": "a.Record",
  "version": "1.0.0",
  "rules": {
    "canvas": "#eceae3",
    "shell": "#ffffff",
    "panel": "#f1efe9",
    "ink": ["#1c1c1a", "#5b5a55", "#92908a", "#bfbdb5"],
    "accent": "#f24a3a",
    "accentUseFor": ["recording", "error", "destructive"],
    "fontSans": "Inter",
    "fontMono": "Geist Mono",
    "monoFor": ["timers", "counters", "dB", "LUFS", "BPM", "fileSize"],
    "radiusScale": [30, 20, 16, 14, 999],
    "spacingGrid": 4,
    "shadows": {
      "card": "0 1px 0 rgba(255,255,255,0.9) inset, 0 24px 60px rgba(40,38,32,0.10), 0 4px 14px rgba(40,38,32,0.05)",
      "glass": "0 14px 30px rgba(35,33,28,0.08)",
      "pill": "0 1px 1px rgba(28,28,26,0.03)"
    },
    "motion": {
      "easeOut": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      "easeSoft": "cubic-bezier(0.4, 0, 0.2, 1)",
      "durationBase": "240ms"
    },
    "forbid": [
      "gradients",
      "secondAccentColor",
      "sharpShadows",
      "displaySerif",
      "saturatedUiColor"
    ]
  }
}
```

This JSON can be wired into a Cursor MCP, an OpenAI function-calling system
prompt, or a v0 generation rule.
