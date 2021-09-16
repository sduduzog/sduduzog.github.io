<template>
  <div
    class="
      min-h-screen
      bg-white
      dark:bg-gray-900
      font-sans
      flex
      items-center
      text-lg
    ">
    <div class="w-full max-w-screen-md mx-auto">
      <nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>
