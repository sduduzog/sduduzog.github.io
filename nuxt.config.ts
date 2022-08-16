import { defineNuxtConfig } from 'nuxt';
export default defineNuxtConfig({
  typescript: {
    shim: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  tailwindcss: {
    viewer: false,
  },
});
