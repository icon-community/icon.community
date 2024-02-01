const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    minHeight: {
      '36': '144px',
      '40': '160px',
      '44': '176px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      purple: colors.purple,
      rose: colors.rose,
      sky: colors.sky,
      slate: colors.slate,
      teal: colors.teal,
      white: colors.white,
      yellow: colors.yellow,
      red: colors.red,
      orange: colors.orange,
      slate: colors.slate,
      'icon': '#32b8bb',
      'icon-hi': '#31f2f6',
      'icon-lo': '#2ca9b7',
      'icon-dark': '#087083',
      'rookteal-dark': '#357488',
      'rookteal-light': '#5FB7BC',
      'rookteal-darktwo': '#4EAAC1',
      'xpurple': '#7d7490',
      'xindigo': '#4a3d60',
      'xgreen': '#34b8bb',
      'xteal': '#5cffe3',
      'xgray': '#5A6B80',
    },
    screens: {
      'xs': '360px',
      '3xl': '1920px',
      ...defaultTheme.screens,
    },
    extend: {
      scale: {
        '-100': '-1',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lemon': ['LEMON', 'sans-serif'],
        'courier': ['Courier', 'sans-serif'],
      },
      cursor: {
        'xcall': 'url(/assets/images/xcall_orb2.png), pointer',
      },
      backgroundImage: {
        conic: 'conic-gradient(var(--tw-gradient-stops))',
        'conic-to-t': 'conic-gradient(at top, var(--tw-gradient-stops))',
        'conic-to-b': 'conic-gradient(at bottom, var(--tw-gradient-stops))',
        'conic-to-l': 'conic-gradient(at left, var(--tw-gradient-stops))',
        'conic-to-r': 'conic-gradient(at right, var(--tw-gradient-stops))',
        'conic-to-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
        'conic-to-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
        'conic-to-bl':
          'conic-gradient(at bottom left, var(--tw-gradient-stops))',
        'conic-to-br':
          'conic-gradient(at bottom right, var(--tw-gradient-stops))',
        radial: 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'radial-at-t':
          'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'radial-at-b':
          'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'radial-at-l':
          'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'radial-at-r':
          'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'radial-at-tl':
          'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'radial-at-tr':
          'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'radial-at-bl':
          'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'radial-at-br':
          'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
        'left-to-right-gray-white-gray': 
          'repeating-linear-gradient(to right, #F8FAFC, #FFFFFF, #F8FAFC)',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        }
      },
      animation: {
        "fade-in-delay": "fade-in 1.5s ease-out both 3s",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
