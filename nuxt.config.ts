import defaultTheme from 'tailwindcss/defaultTheme'
export default defineNuxtConfig({
  css: ['assets/css/main.scss'],
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
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    },
  },
  tailwindcss: {
    config: {
      content: [
        './content/**/*.md',
        './layouts/*.vue',
        './components/**/*.vue',
        './app.vue',
        '!./.devcontainer',
        '!./.nuxt',
      ],
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