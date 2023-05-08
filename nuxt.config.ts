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
    '@nuxtjs/google-fonts', 'nuxt-og-image',
    'nuxt-icon'
  ],
  content: {
    documentDriven: true
  },
  googleFonts: {
    download: true,
    families: {
      'JetBrains+Mono': true,
    }
  }
});