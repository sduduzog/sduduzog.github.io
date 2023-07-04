<template>
  <div class="max-w-2xl mx-auto px-4 font-mono">
    <nav class="my-4">
      <content-navigation v-slot="{ navigation }">
        <ul class="flex space-x-4">
          <li
            v-for="link of navigation"
            :key="link._path">
            <nuxt-link
              class="hover:underline text-gray-500 hover:text-gray-900"
              :to="link._path"
              >{{ link.title }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="hover:underline text-gray-500 hover:text-gray-900"
              to="https://zatechradio.co.za"
              >Podcast</nuxt-link
            >
          </li>
        </ul>
      </content-navigation>
    </nav>
    <slot />
    <ul class="py-4">
      <li
        class="space-x-1"
        v-for="link in socialLinks"
        :key="link.to">
        <span
          :class="link.icon"
          class="text-gray-500"></span>
        <nuxt-link
          class="underline text-gray-500 hover:text-gray-900"
          :to="link.to"
          >{{ link.label }}</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
const socialLinks = [
  {
    to: 'https://twitter.com/sduduzo_g',
    icon: 'i-lucide:twitter',
    label: '@sduduzo_g',
  },
  {
    to: 'https://github.com/sduduzog',
    icon: 'i-lucide:github',
    label: '@sduduzog',
  },
  {
    to: 'https://www.linkedin.com/in/sduduzog',
    icon: 'i-lucide:linkedin',
    label: 'in/sduduzog',
  },
]
</script>
<style lang="scss" scoped>
.router-link-active {
  --at-apply: text-gray-900 font-semibold underline;
}
</style>
<style lang="scss">
div[data-content-id] {
  h1 {
    @apply my-4 text-3xl text-gray-800 font-bold;
  }
  h2 {
    @apply mt-2 mb-1 text-2xl text-gray-700 font-semibold;
  }
  h3 {
    @apply text-lg font-bold text-gray-500 my-1;
  }
  p {
    @apply text-gray-800;
    & + p {
      @apply mt-4;
    }
  }
  ul {
    @apply my-2;
  }
  ul > li {
    @apply list-disc list-inside;
  }
}
</style>
