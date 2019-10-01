<template>
  <div id="app">
    <app-header />
    <main class="wrapper">
      <div class="social"></div>
      <dynamic-intro />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import AppHeader from "./components/AppHeader.vue";
import DynamicIntro from "./components/DynamicIntro.vue";

export default Vue.extend({
  name: "App",
  components: { AppHeader, DynamicIntro }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu+Mono&display=swap");
:root {
  --primary-color: #ffa000;
  --secondary-color: #ff6f00;
  --accent-color: #ff3d00;
}
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: white;
}

#app {
  font-family: "Ubuntu Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1280px;
  margin: auto;
}
.wrapper {
  padding: 20px;
  margin: auto;
  max-width: 1280px;
}
</style>
