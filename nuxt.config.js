export default {
  mode: 'universal',
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
          "I'm a Junior QA Engineer turned Junior Software Developer at Codeo. When I'm not writting pretty cool code at work," +
          ' I spend my free time writting pretty cool code at home. Google me!'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  vendor: ['prismjs'],
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
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/markdownit', '@nuxtjs/feed'],
  markdownit: {
    injected: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  generate: {
    routes() {
      const fs = require('fs')
      const path = require('path')
      return fs.readdirSync('./assets/content/blog').map((file) => {
        return {
          route: `/blog/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/blog/${file}`)
        }
      })
    }
  },
  feed: [
    {
      path: '/feed.xml',
      create(feed) {
        const link = 'https://sduduzog.com'
        feed.options = {
          title: 'My blog',
          link: link + '/feed.xml',
          description: 'This is my personal feed!'
        }

        const fs = require('fs')
        const path = require('path')
        fs.readdirSync('./assets/content/blog').forEach(async (file) => {
          const post = await require(`./assets/content/blog/${file}`)
          post.slug = `${path.parse(file).name}`
          const ln = `${link}/blog/${post.slug}`
          if (post.published)
            feed.addItem({
              title: post.title,
              id: ln,
              link: ln,
              category: [
                ...post.tags.map((tag) => {
                  return {
                    name: tag
                  }
                })
              ],
              date: new Date(post.date),
              description: post.description,
              content: post.body,
              image: `${link}/${post.image}`
            })
        })
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    }
  ]
}
