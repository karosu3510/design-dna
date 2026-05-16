/**
 * Mercury Banking · Tailwind preset
 * ----------------------------------------------------
 * Drop-in token bridge for projects using TailwindCSS.
 *
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('./tailwind-tokens.js')],
 *     content: ['./src/**\/*.{html,js,ts,jsx,tsx}'],
 *   };
 *
 * Then `bg-paper`, `text-ink`, `bg-purple-500`, `text-pos`, `font-mono`,
 * `rounded-card`, etc. become available.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        paper: '#fbfaf7',
        surface: '#ffffff',
        'surface-mute': '#f6f5f2',
        'surface-sink': '#f1efea',
        ink: {
          DEFAULT: '#0f0f10',
          2: '#2a2a2d',
          3: '#5b5d63',
        },
        mute:   '#8a8c93',
        'mute-2':'#b6b7bc',
        hair:    '#ececea',
        'hair-2':'#e0dfdc',
        'hair-3':'#d2d1cd',
        purple: {
          50:  '#f3f1ff',
          100: '#e6e2ff',
          200: '#c9c1ff',
          400: '#7a6bf2',
          500: '#5d4ee0',
          600: '#4a3cc8',
          700: '#3a2fa0',
        },
        pos:     '#128a4d',
        'pos-bg':'#e6f4ec',
        neg:     '#b3261e',
        'neg-bg':'#fbeae9',
        warn:    '#a35d00',
        'warn-bg':'#fdf1da',
        info:    '#1857c4',
        'info-bg':'#e7eefb',
      },
      fontFamily: {
        sans: ['Inter', "'SF Pro Text'", '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono'", "'SF Mono'", 'ui-monospace', 'Menlo', 'monospace'],
      },
      fontSize: {
        'tag-mc':     '10.5px',
        'mini-mc':    '11px',
        'cap-mc':     ['12px', { letterSpacing: '0.06em' }],
        'sm-mc':      '13px',
        'base-mc':    '14px',
        'md-mc':      '15px',
        'h2-mc':      ['20px', { letterSpacing: '-0.005em' }],
        'h1-mc':      ['24px', { letterSpacing: '-0.005em' }],
        'display-mc': ['36px', { letterSpacing: '-0.025em', lineHeight: '1.1' }],
      },
      letterSpacing: {
        mcTight: '-0.025em',
        mcNum:   '-0.005em',
        mcCap:   '0.06em',
        mcCap2:  '0.10em',
      },
      borderRadius: {
        shell: '16px',
        card:  '14px',
        tile:  '10px',
        chip:  '8px',
      },
      boxShadow: {
        'mc-card': '0 1px 0 #e0dfdc, 0 2px 6px rgba(15,15,16,.025)',
        'mc-pop':  '0 4px 12px rgba(15,15,16,.08), 0 1px 0 #e0dfdc',
        'mc-cta':  '0 1px 0 rgba(15,15,16,.06), 0 6px 16px rgba(93,78,224,.18)',
      },
      transitionTimingFunction: {
        mcOut:   'cubic-bezier(0.22, 0.61, 0.36, 1)',
        mcInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        mcFast: '120ms',
        mcBase: '180ms',
        mcSlow: '240ms',
      },
    },
  },
};
