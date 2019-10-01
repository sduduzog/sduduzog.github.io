<template>
  <div id="app">
    <app-header />
    <main class="wrapper">
      <div class="social">
        <a href="https://github.com/sduduzog/" id="github" title="GitHub">
          <img src="@/assets/img/github.svg" alt="GitHub logo" />
        </a>
        <a href="https://twitter.com/sduduzog" id="twitter" title="Twitter">
          <img src="@/assets/img/twitter.svg" alt="Twitter logo" />
        </a>
        <a href="https://dev.to/sduduzog" id="devto" title="Dev.to">
          <img src="@/assets/img/devto.svg" alt="Dev.to logo" />
        </a>
      </div>
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

  .social {
    padding: 160px 5px 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, 50px);
    grid-column-gap: 20px;
    a {
      display: block;
      border-radius: 25px;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        display: block;
        padding: 10px;
        filter: invert(1);
      }

      &#twitter {
        background-color: #1da1f2;
      }
      &#github {
        background-color: #181717;
      }
      &#devto {
        background-color: #0a0a0a;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .social {
      padding: 40px 5px;
    }
  }
}
</style>
