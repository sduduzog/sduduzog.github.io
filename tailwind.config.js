/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        'primary-color': 'var(--color-primary)',
        'secondary-color': 'var(--color-secondary)',
        'accent-color': 'var(--color-accent)',
        'overlay-color': 'var(--color-overlay)'
      },
      boxShadow: {
        x:
          '0 20px 25px -5px rgba(0, 0, 0, .4), 0 10px 10px -5px rgba(0, 0, 0, .4)'
      },
      gridTemplateColumns: {
        layout: '24rem 1fr'
      }
    }
  },
  variants: {},
  plugins: []
}
