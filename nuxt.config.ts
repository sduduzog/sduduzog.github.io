export default defineNuxtConfig({
  css: ['@unocss/reset/tailwind.css'],
  modules: [
    '@unocss/nuxt',
    'nuxt-content-assets',
    '@nuxt/content',
    'nuxt-og-image',
    '@nuxtjs/html-validator',
  ],
  unocss: {
    uno: true,
    icons: {
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    },
    components: false,
    webFonts: {
      provider: 'google',
      fonts: {
        mono: ['JetBrains Mono'],
      },
    },
    withDirectives: true,
  },
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  app: {
    head: { htmlAttrs: { lang: 'en' } },
  },
  $production: {
    routeRules: {
      '/*': { prerender: true },
    },
  },
})
