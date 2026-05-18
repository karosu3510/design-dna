# Vortex Gallery — AI prompt rules

> Drop this into `.cursorrules`, Claude system prompt, or any LLM prompt header to prime generation in **Vortex Gallery** style.

---

Use the **Vortex Gallery** design system for all UI in this project. It is a **deep-space WebGL gallery** system — cinematic, warm-accented, momentum-scrolled. Borrowed visual DNA from 1950s American travel posters and Three.js camera systems.

## Surface

- Page canvas is `#0a0a0a` (void). **Never** lighter than `#1f1f1f` for any background. No off-white. No gradients to lighter colors.
- Surface depth scale: `void #0a0a0a → depth #101010 → shell #161616 → soft #1f1f1f`. Each tier is `+6% black`, no improvisation.
- Shadows: 1px white-4% inset top + 24px black-60% drop. Don't invent new shadow recipes.
- One ember accent only: `#ff7a3d`. Reserve for active state, primary CTA, "live", current item. Don't add a second saturated red/pink/purple.
- Optional: `sun #ffd24a` for badges, `ocean #3a78ff` for links — but only if the brief truly needs them.

## Typography

- **Inter Tight 500** for hero / display / h1 / h2. Letter-spacing `-0.04em` on hero, `-0.02em` on h1/h2.
- **Inter** for UI / body. Weights 400 / 500 only — never 700 (no bold UI).
- **JetBrains Mono + `font-variant-numeric: tabular-nums`** for every ticking or grid-aligned number — frame indices, timers, dB, BPM, percentages, file sizes. Never use proportional sans for numbers.
- Uppercase caption: 10px Inter Medium, letter-spacing `0.18em`.
- Mono index (e.g. `01 / 24`): JetBrains Mono, letter-spacing `0.24em`.

## Spacing & radius

- 4px grid: `4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64`. Never `5`, `7`, `10`, `15`.
- Radius: `20 (shell) / 14 (panel) / 10 (card) / 6 (tile) / 999 (pill)`. Five values only.

## Motion

- **Don't use CSS transitions for wheel-driven values.** Use a lerp in `requestAnimationFrame`:
  ```js
  current += (target - current) * 0.05;  // vortex camera (inertial)
  current += (target - current) * 0.10;  // default scroll
  current += (target - current) * 0.18;  // cursor follow (snappy)
  ```
- Easings:
  - `cubic-bezier(0.16, 1, 0.3, 1)` — vortex (hero entrance, image flip-in, overshoot)
  - `cubic-bezier(0.4, 0, 0.2, 1)` — soft (default UI)
- Durations: `120ms fast / 260ms base / 640ms slow` — pick from these three.

## Components — reuse before authoring

`design-system.css` exposes:
- `.vg-shell` `.vg-panel` `.vg-tile` (surfaces)
- `.vg-pill` `.vg-pill--ember` `.vg-btn-ghost` (buttons)
- `.vg-hero` `.vg-display` `.vg-h1` `.vg-h2` `.vg-body` `.vg-cap` `.vg-index` `.vg-mono` (typography)
- `.vg-poster` (3:4 image with hairline + cover)
- `.vg-dot` (ember status dot with glow)

If you need something new, consult `components/` first — there are 8 reference HTML files. Only author from scratch if none fits.

## Anti-patterns — push back if asked

- Light gray background, off-white surfaces — kills the cinematic depth.
- Two saturated accents (ember + a green or pink).
- Drop shadows without inset highlight — looks like Material 2014.
- Bold (700+) headings — break the cinematic minimal feel.
- CSS transitions on wheel-driven scroll — jitters.
- Bright white text on hover state — break the value hierarchy.

If a request requires breaking these rules, **say so explicitly** and ask which DNA kit fits better. Likely candidates:
- Tools / dashboards / forms → use `a-record`
- Productivity / hyper-organized → use `linear` (or a Linear-flavored kit)
- Industrial / cold / gray → use `nothing`

## When applying the system

1. Start with the void canvas + `<body class="vg">`.
2. Pick a depth tier for primary surfaces (most cards = `--vg-c-depth`).
3. Place exactly one ember pill / dot per visible viewport.
4. Numbers in mono. Headings in Inter Tight. Body in Inter.
5. Scroll-driven? Add lerp in RAF.
6. Verify: take a screenshot, squint. If it doesn't read as cinematic + warm-accented + dark, the system isn't applied yet.
