<template>
  <div
    :class="{ dark: darkMode }"
    class="min-h-screen grid md:grid-cols-2 bg-background"
  >
    <!--div
      class="flex justify-end p-2 m-auto text-lg font-light text-primary-color max-w-screen-xl"
    >
      <span @click="toggleMode" class="p-2">
        <Sun v-if="darkMode" />
        <Moon v-else />
      </span>
    </div-->
    <div class="md:pt-32 md:max-w-sm">
      <img
        class="h-32 m-auto mt-12 rounded-lg shadow-lg md:mt-18"
        src="~/assets/img/sdu.jpg"
        alt="My face"
      />
      <h1
        class="p-4 mt-6 text-lg font-semibold text-center title text-primary-color"
      >
        Beautus S. Gumede
      </h1>
      <h2 class="mb-4 text-center text-secondary-color">
        I write code. Lots and lots of code.
      </h2>
      <div class="flex justify-center social">
        <a id="github" href="https://github.com/sduduzog"
          ><img src="~/assets/img/github.svg" alt="Github icon"
        /></a>
        <a id="twitter" href="https://twitter.com/sduduzog">
          <img src="~/assets/img/twitter.svg" alt="Twitter icon" />
        </a>
        <a id="devto" href="https://dev.to/sduduzog"
          ><img src="~/assets/img/devto.svg" alt="Dev to icon"
        /></a>
      </div>
    </div>
    <div>
      <!--nuxt /-->
      <h1 class="">Nothing to see here... just yet.</h1>
    </div>
  </div>
</template>
<script>
export default {
  // components: { Sun, Moon },
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
