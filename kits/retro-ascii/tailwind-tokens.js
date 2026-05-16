/**
 * Retro ASCII · Tailwind preset
 * ----------------------------------------------------
 * Drop-in token bridge for projects using TailwindCSS.
 *
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('./tailwind-tokens.js')],
 *     content: ['./src/**\/*.{html,js,ts,jsx,tsx}'],
 *   };
 *
 * Then `bg-canvas`, `text-hi`, `text-amber`, `text-red`, `font-mono`,
 * etc. become available.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: '#05090A',
        shell:  '#080F0B',
        card:   'rgba(5,10,7,.6)',
        line:   '#0F1F14',
        'line-2': '#1a3320',
        ink:    '#B8FFB8',
        hi:     '#00FF6A',
        dim:    '#2A4A32',
        'dim-2': '#3a5e44',
        amber:  '#FFB000',
        red:    '#FF3B3B',
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "'IBM Plex Mono'", "'Fira Code'", "'Space Mono'", 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'mini':   '9px',
        'cap-ra': ['10px', { letterSpacing: '0.20em', textTransform: 'uppercase' }],
        'sm-ra':  '11px',
        'base-ra':'12px',
        'md-ra':  '15px',
        'h2-ra':  '26px',
        'h1-ra':  ['34px', { letterSpacing: '0.28em', lineHeight: '1' }],
      },
      letterSpacing: {
        raBody: '0.02em',
        raCap:  '0.20em',
        raCap2: '0.25em',
        raCap3: '0.28em',
      },
      borderRadius: {
        // All zero — this is a CRT
      },
      transitionTimingFunction: {
        raStep: 'steps(1, end)',
        raOut:  'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: {
        raBlink: '1200ms',
        raTick:  '140ms',
        raFast:  '180ms',
        raBase:  '240ms',
      },
      boxShadow: {
        'glow':       '0 0 2px rgba(0,255,106,.55), 0 0 8px rgba(0,255,106,.22)',
        'glow-amber': '0 0 2px rgba(255,176,0,.55), 0 0 8px rgba(255,176,0,.22)',
        'glow-red':   '0 0 2px rgba(255,59,59,.55), 0 0 8px rgba(255,59,59,.22)',
      },
    },
  },
};
