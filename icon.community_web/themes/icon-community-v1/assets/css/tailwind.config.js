const colors = require('tailwindcss/colors');

module.exports = {
  purge: ["icon.community_web/themes/icon-community-v1/layouts/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      purple: colors.purple,
      red: colors.rose,
      yellow: colors.amber,
      pink: colors.pink,
      'icon-hi': '#31f2f6',
      'icon-lo': '#2ca9b7',
      'icon-dark': '#087083'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
