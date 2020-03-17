<template>
  <div :class="{ dark: darkMode }" class="layout bg-background min-h-screen">
    <div
      class="flex text-lg font-light justify-end p-2 text-primary-color max-w-screen-xl m-auto"
    >
      <div class="flex-grow p-1">
        <n-link to="/">Home</n-link>
      </div>
      <!-- <n-link to="/blog" class="m-1 mr-4">My Blog</n-link> -->
      <!-- <n-link to="/projects" class="m-1 mr-4 md:mr-12">My Projects</n-link> -->
      <span @click="toggleMode" class="p-2">
        <Sun v-if="darkMode" />
        <Moon v-else />
      </span>
    </div>
    <nuxt />
  </div>
</template>
<script>
import Sun from '../components/icons/Sun.vue'
import Moon from '../components/icons/Moon.vue'
export default {
  components: { Sun, Moon },
  data() {
    return { darkMode: false }
  },
  mounted() {
    const mode = localStorage.getItem('mode')
    this.darkMode = mode === 'dark'
  },
  methods: {
    toggleMode() {
      localStorage.setItem('mode', this.darkMode ? 'light' : 'dark')
      this.darkMode = !this.darkMode
    }
  }
}
</script>
<style lang="scss">
.layout {
  --color-background: #fafafa;
  --color-primary: #263238;
  --color-secondary: #546e7a;
  --color-accent: #ff8f00;
  --color-overlay: rgba(255, 255, 255, 0.4);

  &.dark {
    --color-background: #2f363d;
    --color-primary: #e0e0e0;
    --color-secondary: #bdbdbd;
    --color-overlay: rgba(0, 0, 0, 0.1);
  }
}
</style>
