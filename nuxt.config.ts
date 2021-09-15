import { NuxtConfig } from '@nuxt/types';
import fs from 'fs';
import path from 'path';

const hostname = 'https://iamsdu.online';

export default (): NuxtConfig => ({
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
    title: "Hi, I'm Sdu" || process.env.npm_package_name,
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
  css: ['~/assets/css/font.css'],
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
    '@nuxtjs/composition-api/module',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/date-fns',
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
  router: {
    middleware: 'prepareStories',
  },
  generate: {
    routes: ['/'],
    interval: 1000,
  },

  build: {
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        if (config.resolve && config.resolve.alias) {
          config.resolve.alias['vue'] = 'vue/dist/vue.common';
        }
        config.module?.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
});
