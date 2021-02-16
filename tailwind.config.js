const colors = require('tailwindcss/colors');
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
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
      gray: colors.coolGray,
      cyan: colors.cyan,
      fuchsia: colors.fuchsia,
      background: '#fafafa',
      'secondary-color': '#263238',
      'accent-color': '#ff8f00',
      'overlay-color': 'rgba(255, 255, 255, 0.4)',
    },
    extend: {
      boxShadow: {
        x:
          '0 20px 25px -5px rgba(0, 0, 0, .4), 0 10px 10px -5px rgba(0, 0, 0, .4)',
      },
      gridTemplateColumns: {
        layout: '24rem 1fr',
      },
      gridTemplateRows: {
        layout: 'auto 1fr',
      },
    },
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
  variants: {},
  plugins: [],
};
