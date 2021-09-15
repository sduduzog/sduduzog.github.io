const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './pages/**/*.vue',
      './layouts/**/*.vue',
      './components/**/*.vue',
    ],
  },
  theme: {
    colors: {
      black: colors.black,
      blue: colors.blue,
      gray: colors.coolGray,
      fuchsia: colors.fuchsia,
      white: colors.white,
    },
    listStyleType: {
      disc: 'disc',
      decimal: 'decimal',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      boxShadow: {
        x: '0 20px 25px -5px rgba(0, 0, 0, .4), 0 10px 10px -5px rgba(0, 0, 0, .4)',
      },
      gridTemplateColumns: {
        layout: '24rem 1fr',
      },
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
};
