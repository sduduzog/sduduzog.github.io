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
      cyan: colors.cyan,
      fuchsia: colors.fuchsia,
      background: '#fafafa',
      'secondary-color': '#263238',
      'accent-color': '#ff8f00',
      'overlay-color': 'rgba(255, 255, 255, 0.4)',
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
  plugins: [],
};
