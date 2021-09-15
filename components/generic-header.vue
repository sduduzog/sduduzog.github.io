<template>
  <div class="p-4">
    <nav class="flex text-base">
      <nuxt-link
        to="/"
        class="rounded-full p-2 hover:bg-fuchsia-600 hover:bg-opacity-10">
        <home-icon size="1.2x" stroke-width="2" />
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
