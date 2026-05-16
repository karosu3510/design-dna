/**
 * a.Record · Tailwind preset
 * ----------------------------------------------------
 * Drop-in token bridge for projects using TailwindCSS.
 * Usage:
 *
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('./tailwind-tokens.js')],
 *     content: ['./src/**\/*.{html,js,ts,jsx,tsx}'],
 *   };
 *
 * Then `bg-canvas`, `bg-shell`, `text-ink`, `font-mono`, `rounded-shell`,
 * `shadow-card`, etc. are all available.
 */

module.exports = {
  theme: {
    extend: {
      colors: {
        canvas: '#eceae3',
        shell:  '#ffffff',
        hero:   '#f1efe9',
        soft:   '#e8e6df',
        softer: '#efedf0',
        ink: {
          DEFAULT: '#1c1c1a',
          2: '#5b5a55',
          3: '#92908a',
          4: '#bfbdb5',
        },
        rec: '#f24a3a',
        line: 'rgba(28,28,26,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['Geist Mono', 'SF Mono', 'ui-monospace', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Use these if you need a class form. Otherwise lean on `text-[34px]`.
        'cap':     ['10.5px', { letterSpacing: '0.18em', textTransform: 'uppercase' }],
        'mini':    '9.5px',
        'xs2':     '11.5px',
        'sm2':     '12.5px',
        'base2':   '13.5px',
        'lg2':     '17px',
        'h1':      ['34px', { letterSpacing: '-0.025em', lineHeight: '1.05' }],
        'display': ['62px', { letterSpacing: '-0.05em', lineHeight: '1' }],
      },
      letterSpacing: {
        tightAr: '-0.025em',
        snugAr:  '-0.01em',
        baseAr:  '-0.005em',
        capAr:   '0.18em',
        capArWide: '0.2em',
      },
      spacing: {
        // 4px grid (Tailwind has these by default; here for clarity)
        ar1: '4px',
        ar2: '8px',
        ar3: '12px',
        ar4: '16px',
        ar5: '20px',
        ar6: '24px',
        ar7: '28px',
        ar8: '32px',
      },
      borderRadius: {
        shell: '30px',
        panel: '20px',
        card:  '16px',
        tile:  '14px',
        // pill = rounded-full
      },
      boxShadow: {
        card: '0 1px 0 rgba(255,255,255,0.9) inset, 0 24px 60px rgba(40,38,32,0.10), 0 4px 14px rgba(40,38,32,0.05)',
        glass: '0 14px 30px rgba(35,33,28,0.08)',
        pill: '0 1px 1px rgba(28,28,26,0.03)',
      },
      transitionTimingFunction: {
        arOut:  'cubic-bezier(0.22, 0.61, 0.36, 1)',
        arSoft: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        arFast: '120ms',
        arBase: '240ms',
        arSlow: '600ms',
      },
      keyframes: {
        arPulse: {
          '0%':   { transform: 'scale(0.6)', opacity: '0.9' },
          '100%': { transform: 'scale(1.15)', opacity: '0' },
        },
      },
      animation: {
        'ar-pulse': 'arPulse 1.6s ease-out infinite',
      },
    },
  },
};
