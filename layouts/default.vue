<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 font-sans flex items-center"
  >
    <div class="absolute top-0 w-full flex justify-end p-2">
      <div
        class="rounded-full p-2 bg-gray-300 dark:bg-gray-300 dark:bg-opcity-50"
        @click="toggleTheme"
      >
        <moon-icon v-if="theme === 'dark'" size="1x" />
        <sun-icon v-else size="1x" />
      </div>
    </div>
    <div class="w-full max-w-screen-md mx-auto">
      <nuxt />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, watch } from '@nuxtjs/composition-api';
import { useMediaQuery, useStorage } from '@vueuse/core';
import { SunIcon, MoonIcon } from 'vue-feather-icons';

export default defineComponent({
  components: { SunIcon, MoonIcon },
  setup() {
    const isPreferredDark = useMediaQuery('(prefers-color-scheme: dark)');
    const defaultThemeState = isPreferredDark.value ? 'dark' : 'light';
    const theme = useStorage('theme', defaultThemeState);

    onMounted(() => toggleThemeClass(theme.value));

    watch(theme, toggleThemeClass);

    function toggleThemeClass(themeString: string) {
      if (themeString === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    function toggleTheme() {
      theme.value = theme.value === 'dark' ? 'light' : 'dark';
    }
    return { toggleTheme, theme };
  },
});
</script>
<style lang="scss">
h1 {
  @apply text-7xl md:text-8xl font-black text-fuchsia-500;
}
p {
  @apply text-gray-800 dark:text-gray-200;

  a {
    @apply underline text-fuchsia-600 dark:text-fuchsia-400;
  }
}
</style>
