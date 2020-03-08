<template>
  <div
    :class="{ dark: darkMode }"
    class="layout p-1 bg-background min-h-screen"
  >
    <div class="max-w-screen-lg m-auto relative">
      <div
        @click="toggleMode"
        class="cursor-pointer p-2 absolute right-0 text-primary-color"
      >
        <Moon v-if="!darkMode" /><Sun v-else />
      </div>
      <nuxt />
    </div>
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
    this.applyMode(this.darkMode)
  },
  methods: {
    applyMode(darkMode) {
      // const background = darkMode ? '#2f363d' : '#fafafa'
      // const root = document.documentElement
      // root.style.setProperty('--color-background', background)
    },
    toggleMode() {
      localStorage.setItem('mode', this.darkMode ? 'light' : 'dark')
      this.darkMode = !this.darkMode
      this.applyMode(this.darkMode)
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

  &.dark {
    --color-background: #2f363d;
    --color-primary: #e0e0e0;
    --color-secondary: #bdbdbd;
  }
}
</style>
