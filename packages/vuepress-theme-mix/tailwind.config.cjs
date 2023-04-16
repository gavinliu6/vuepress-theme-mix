/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/build.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      // >= 640px
      mobile: '640px',

      // <= 639px
      'mobile-reverse': { max: '639px' },

      // >= 768px
      tablet: '768px',

      // <= 767px
      'tablet-reverse': { max: '767px' },

      // >= 1024px
      laptop: '1024px',

      // <= 1023px
      'laptop-reverse': { max: '1023px' },

      // >= 1280px
      desktop: '1280px',

      // <= 1279px
      'desktop-reverse': { max: '1279px' },
    },
    extend: {
      colors: {
        theme: 'var(--color-theme)',
      },
      textColor: {
        default: 'var(--color-text-default)',
        muted: 'var(--color-text-muted)',
        subtle: 'var(--color-text-subtle)',
        tip: 'var(--color-text-tip)',
        warning: 'var(--color-text-warning)',
        danger: 'var(--color-text-danger)',
        'muted-in-code-block': 'var(--color-text-muted-in-code-block)',
      },
      backgroundColor: {
        default: 'var(--color-bg-default)',
        contrast: 'var(--color-bg-contrast)',
        divider: 'var(--color-bg-divider)',
        overlay: 'var(--color-bg-overlay)',
        tip: 'var(--color-bg-tip)',
        warning: 'var(--color-bg-warning)',
        danger: 'var(--color-bg-danger)',
        'code-block': 'var(--color-bg-code-block)',
        highlight: 'var(--color-bg-highlight)',
        'code-group-bar': 'var(--color-bg-code-group-bar)',
      },
      borderColor: {
        default: 'var(--color-border-default)',
        'line-numbers': 'var(--color-border-line-numbers)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      typography: {
        DEFAULT: {
          css: {
            'h2, h3, h4, h5, h6': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            a: {
              color: 'var(--text-default)',
            },
            pre: {
              'font-size': '85%',
              'line-height': '1.45',
              padding: '16px',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
