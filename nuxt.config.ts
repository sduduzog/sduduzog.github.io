import defaultTheme from 'tailwindcss/defaultTheme'
export default defineNuxtConfig({
  modules: [
    'nuxt-content-assets',
    '@nuxt/content',
    'nuxt-og-image',
    '@nuxtjs/html-validator',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
  ],
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  tailwindcss: {
    config: {
      theme: {
        fontFamily: {
          mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
        },
      },
    },
  },
  googleFonts: {
    families: {
      'JetBrains+Mono': true,
    },
  },
  app: {
    head: { htmlAttrs: { lang: 'en' } },
  },
})
