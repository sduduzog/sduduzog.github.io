import axios from 'axios';

export default {
  target: 'static',
  components: [{ path: '~/components/global', global: true }],
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
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'storyblok-nuxt',
      { accessToken: '5i2lrLgiTzCtvr9fKcp5PAtt', cacheProvider: 'memory' },
    ],
    '@nuxt/http',
  ],

  /*
   ** Build configuration
   */
  router: {
    middleware: 'setCacheVersion',
  },
  generate: {
    crawler: false,
    routes(callback) {
      const token = `5i2lrLgiTzCtvr9fKcp5PAtt`;
      const version = 'published';
      let cache_version = 0;

      const toIgnore = ['home'];

      // other routes that are not in Storyblok with their slug.
      const routes = ['/']; // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then((space_res) => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version;

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`,
            )
            .then((res) => {
              Object.keys(res.data.links).forEach((key) => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push(`/${res.data.links[key].slug}`);
                }
              });

              callback(null, routes);
            });
        });
    },
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
