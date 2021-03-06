const hostname = 'https://iamsdu.online';
export default {
  target: 'static',
  ssr: true,
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || hostname,
  },
  components: true,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Beautus S. Gumede' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'I write code. Lots and lots of code. To be honest I also delete most of it too ,' +
          "but hey, that's how programming is, I guess",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    htmlAttrs: {
      lang: 'en', // it sets the language English
    },
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  vendor: ['prismjs'],
  plugins: ['~/plugins/foo.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'storyblok-nuxt',
      { accessToken: '5i2lrLgiTzCtvr9fKcp5PAtt', cacheProvider: 'memory' },
    ],
    '@nuxtjs/sitemap',
    [
      '@nuxtjs/robots',
      {
        Sitemap: `${hostname}/sitemap.xml`,
      },
    ],
    '@nuxt/http',
  ],
  sitemap: {
    hostname,
  },

  /*
   ** Build configuration
   */
  router: {
    middleware: 'prepareStories',
  },
  generate: {
    routes: ['/'],
    interval: 1000,
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
