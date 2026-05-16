/**
 * Nothing System · Tailwind preset
 * ----------------------------------------------------
 * Drop-in token bridge for projects using TailwindCSS.
 *
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('./tailwind-tokens.js')],
 *     content: ['./src/**\/*.{html,js,ts,jsx,tsx}'],
 *   };
 *
 * Then `bg-canvas`, `bg-card`, `text-rec`, `text-ok`, `font-mono`,
 * `rounded-card`, etc. are all available.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        canvas:   '#0a0a0a',
        shell:    '#0e0e0e',
        card:     '#111111',
        'card-2': '#1a1a1a',
        line:     '#1f1f1f',
        'line-2': '#2a2a2a',
        'cell-off': '#262626',
        ink: {
          DEFAULT: '#f4f4f4',
          2: '#bdbdbd',
          3: '#9a9a9a',
          4: '#5a5a5a',
          5: '#3a3a3a',
        },
        rec: '#ff3b3b',
        ok:  '#3ddc84',
        'inv-bg':    '#fafafa',
        'inv-ink':   '#0a0a0a',
        'inv-ink-2': '#666666',
        'inv-ink-3': '#bdbdbd',
      },
      fontFamily: {
        mono: ["'Space Mono'", 'ui-monospace', 'Menlo', 'monospace'],
        sans: ["'Inter Tight'", 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Scale (px)
        'mini':    '9px',
        'cap-nt':  ['9.5px', { letterSpacing: '0.18em', textTransform: 'uppercase' }],
        'sm-nt':   '11px',
        'base-nt': '12px',
        'md-nt':   '14px',
        'h3-nt':   ['18px', { letterSpacing: '-0.01em', lineHeight: '1.2' }],
        'h2-nt':   '26px',
        'h1-nt':   ['32px', { letterSpacing: '0.02em', lineHeight: '1' }],
      },
      letterSpacing: {
        ntTight: '-0.01em',
        ntCap:   '0.16em',
        ntCap2:  '0.18em',
        ntCap3:  '0.20em',
      },
      borderRadius: {
        shell: '14px',
        card:  '12px',
        tile:  '6px',
        chip:  '2px',
        // pill = rounded-full
      },
      transitionTimingFunction: {
        ntStep: 'steps(1, end)',
        ntOut:  'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: {
        ntBlink: '2400ms',
        ntTick:  '140ms',
        ntFast:  '180ms',
        ntBase:  '240ms',
      },
      backgroundImage: {
        'nt-grid': "linear-gradient(rgba(255,255,255,.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.012) 1px, transparent 1px)",
      },
      backgroundSize: {
        'nt-grid': '18px 18px',
      },
    },
  },
};
