<template>
  <header>
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
    <nav>
      <a href="https://sduduzog.github.io/slim-launcher/">Slim Launcher</a>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Appheader"
});
</script>

<style lang="scss">
header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .social {
    display: grid;
    grid-template-columns: repeat(3, 50px);
    grid-column-gap: 20px;

    a {
      border-radius: 25px;
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

  nav {
    display: grid;
    grid-template-columns: max-content;
    grid-column-gap: 20px;

    a {
      display: inline-block;
      margin: 20px;
      text-decoration: none;
      color: var(--accent-color);
      &:hover {
        color: var(--primary-color);
      }
    }
  }
}
</style>
