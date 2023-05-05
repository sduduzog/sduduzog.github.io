export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/google-fonts', 'nuxt-og-image',
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