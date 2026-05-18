/**
 * Vortex Gallery — Tailwind preset
 *
 * Drop into a Tailwind config:
 *   module.exports = {
 *     presets: [require('./tailwind-tokens.js')],
 *     content: ['./src/**\/*.{html,js,ts,jsx,tsx}'],
 *   };
 *
 * Then write markup like:
 *   <body class="bg-void text-ink min-h-screen">
 *     <article class="bg-depth rounded-shell shadow-depth p-7">
 *       <h1 class="text-hero font-display tracking-tight">Footage,<br/>not a feed.</h1>
 *     </article>
 *   </body>
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        void:    '#0a0a0a',
        depth:   '#101010',
        shell:   '#161616',
        soft:    '#1f1f1f',
        line:    'rgba(255,255,255,.08)',
        'line-2':'rgba(255,255,255,.14)',
        ink:     '#fafafa',
        'ink-2': 'rgba(255,255,255,.62)',
        'ink-3': 'rgba(255,255,255,.42)',
        'ink-4': 'rgba(255,255,255,.22)',
        ember:        '#ff7a3d',
        'ember-soft': 'rgba(255,122,61,.18)',
        'ember-ring': 'rgba(255,122,61,.40)',
        sun:    '#ffd24a',
        ocean:  '#3a78ff',
      },
      fontFamily: {
        sans:    ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', '-apple-system', 'sans-serif'],
        mono:    ['"JetBrains Mono"', '"SF Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      fontSize: {
        hero:    ['84px',   { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        display: ['56px',   { lineHeight: '0.96', letterSpacing: '-0.04em' }],
        h1:      ['36px',   { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h2:      ['22px',   { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        lg:      ['17px',   { lineHeight: '1.5'  }],
        md:      ['15px',   { lineHeight: '1.5'  }],
        base:    ['13.5px', { lineHeight: '1.55' }],
        sm:      ['12px',   { lineHeight: '1.5'  }],
        cap:     ['10px',   { lineHeight: '1.4',  letterSpacing: '0.18em' }],
        mini:    ['9px',    { lineHeight: '1.4'  }],
      },
      letterSpacing: {
        'vg-tight': '-0.04em',
        'vg-snug':  '-0.02em',
        'vg-cap':   '0.18em',
        'vg-wide':  '0.24em',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '32px',
        '8': '48px',
        '9': '64px',
      },
      borderRadius: {
        shell: '20px',
        panel: '14px',
        card:  '10px',
        tile:  '6px',
        pill:  '9999px',
      },
      boxShadow: {
        depth: '0 1px 0 rgba(255,255,255,.04) inset, 0 24px 48px rgba(0,0,0,.6)',
        glow:  '0 0 0 1px rgba(255,122,61,.4), 0 0 36px rgba(255,122,61,.18)',
        inset: 'inset 0 0 0 1px rgba(255,255,255,.06)',
      },
      transitionTimingFunction: {
        vortex: 'cubic-bezier(0.16, 1, 0.3, 1)',
        soft:   'cubic-bezier(0.4, 0, 0.2, 1)',
        snap:   'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
      transitionDuration: {
        '120': '120ms',
        '260': '260ms',
        '640': '640ms',
      },
    },
  },
};
