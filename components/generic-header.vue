<template>
  <div v-editable="blok" class="p-4 px-0">
    <nav class="flex items-center text-base space-x-6">
      <nuxt-link
        to="/"
        class="rounded-full p-2 hover:bg-fuchsia-600 hover:bg-opacity-10">
        <home-icon size="1.2x" stroke-width="2" />
      </nuxt-link>
      <nuxt-link to="/blog" class="hover:underline hover:font-medium">
        Blog
      </nuxt-link>
      <a href="https://twitter.com/sduduzo_g">Twitter</a>
      <a href="https://github.com/sduduzog">Github</a>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { HomeIcon } from 'vue-feather-icons';
export default defineComponent({
  components: { HomeIcon },
  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>

<style lang="scss">
.nuxt-link-exact-active {
  @apply underline opacity-50;
}
</style>
