<template>
  <div class="max-w-2xl mx-auto px-6 font-mono">
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
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.router-link-active {
  @apply text-gray-900 font-semibold underline;
}
</style>
