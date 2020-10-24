export default {
  components: true,
  target: 'static',
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
  plugins: ['~/plugins/components', '~/plugins/filters'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'storyblok-nuxt',
      { accessToken: '5i2lrLgiTzCtvr9fKcp5PAtt', cacheProvider: 'memory' },
    ],
    '@nuxt/content',
    '@nuxtjs/markdownit',
  ],
  content: {
    liveEdit: false,
  },
  /*
   ** Build configuration
   */
  router: {
    middleware: 'setCacheVersion',
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
