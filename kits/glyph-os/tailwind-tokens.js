/**
 * Glyph OS · Tailwind preset
 * ----------------------------------------------------
 * Drop-in token bridge for projects using TailwindCSS.
 *
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('./tailwind-tokens.js')],
 *     content: ['./src/**\/*.{html,js,ts,jsx,tsx}'],
 *   };
 *
 * Then `bg-canvas`, `bg-card`, `text-rec`, `text-ok`, `font-pixel`,
 * `rounded-card`, etc. are all available.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: '#000000',
        shell:  '#0e0e0e',
        card:   '#141414',
        'card-2': '#1b1b1b',
        line:   '#2a2a2a',
        'line-2': '#3a3a3a',
        ink: {
          DEFAULT: '#ffffff',
          2: '#c5c5c5',
          3: '#7c7c7c',
          4: '#4a4a4a',
        },
        rec: '#ff3b30',
        ok:  '#c8ff5e',
        'inv-bg':  '#fafaf6',
        'inv-ink': '#0a0a0a',
      },
      fontFamily: {
        pixel: ['VT323', "'Press Start 2P'", 'ui-monospace', 'Menlo', 'monospace'],
        sans:  ['Inter', "'Helvetica Neue'", 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Scale (px)
        'mini':    '11px',
        'cap':     ['12px', { letterSpacing: '0.18em', textTransform: 'uppercase' }],
        'sm-gl':   '13px',
        'base-gl': '14px',
        'md-gl':   '22px',
        'num':     '30px',
        'h2-gl':   '46px',
        'h1-gl':   '62px',
        'display-gl': ['118px', { letterSpacing: '0.02em', lineHeight: '1' }],
      },
      letterSpacing: {
        capGl:   '0.16em',
        capGl2:  '0.18em',
      },
      borderRadius: {
        shell: '22px',
        card:  '18px',
        tile:  '10px',
        chip:  '8px',
        // pill = rounded-full
      },
      transitionTimingFunction: {
        glStep: 'steps(1, end)',
        glOut:  'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: {
        glTick: '60ms',
        glFast: '120ms',
        glBase: '240ms',
      },
    },
  },
};
