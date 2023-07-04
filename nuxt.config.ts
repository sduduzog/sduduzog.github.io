export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-content-assets',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    'nuxt-icon',
    '@nuxtjs/html-validator'
  ],
  content: {
    documentDriven: true
  },
  googleFonts: {
    download: true,
    families: {
      'JetBrains+Mono': {
        wght: [100,200, 300, 400, 500, 600, 700, 800, 900],
      },
    }
  },
  app: {
    head: { htmlAttrs: { lang: 'en' } },
  },
});