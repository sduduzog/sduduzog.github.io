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
        'accent-color': 'var(--color-accent)'
      }
    }
  },
  variants: {},
  plugins: []
}
