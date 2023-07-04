<template>
  <div class="max-w-2xl mx-auto px-4 font-mono">
    <nav class="mt-4">
      <content-navigation v-slot="{ navigation }">
        <ul class="flex space-x-4">
          <li
            v-for="link of navigation"
            :key="link._path">
            <nuxt-link
              hover:underline
              text="gray-500 hover:gray-900"
              :to="link._path"
              >{{ link.title }}</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              hover:underline
              text="gray-500 hover:gray-900"
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
        space-x-1
        v-for="link in socialLinks"
        :key="link.to">
        <span
          :class="link.icon"
          text="gray-500"></span>
        <nuxt-link
          underline
          text="gray-500 hover:gray-900"
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
