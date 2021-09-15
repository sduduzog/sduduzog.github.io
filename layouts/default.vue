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
    "
  >
    <div
      class="
        absolute
        top-2
        right-2
        rounded-full
        p-2
        bg-gray-300
        dark:bg-gray-300 dark:bg-opcity-50
      "
      @click="() => toggleDark()"
    >
      <moon-icon v-if="isDark" size="1x" />
      <sun-icon v-else size="1x" />
    </div>
    <div class="w-full max-w-screen-md mx-auto">
      <nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import { useDark, useToggle } from '@vueuse/core';
import { SunIcon, MoonIcon } from 'vue-feather-icons';

export default defineComponent({
  components: { SunIcon, MoonIcon },
  setup() {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    return { toggleDark, isDark };
  },
});
</script>
