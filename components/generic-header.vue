<template>
  <div class="p-4 px-0">
    <nav class="flex items-center text-base space-x-2">
      <nuxt-link
        to="/"
        class="rounded-full p-2 hover:bg-fuchsia-600 hover:bg-opacity-10">
        <home-icon size="1.2x" stroke-width="2" />
      </nuxt-link>
      <nuxt-link to="/blog" class="hover:underline hover:font-medium">
        Blog
      </nuxt-link>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { HomeIcon } from 'vue-feather-icons';
export default defineComponent({
  components: { HomeIcon },
});
</script>

<style lang="scss">
.nuxt-link-exact-active {
  @apply underline opacity-50;
}
</style>
