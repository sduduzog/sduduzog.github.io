<template>
  <header>
    <img src="@/assets/img/sdu-192x192.png" />
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

  img {
    height: 60px;
  }

  nav {
    display: grid;
    grid-template-columns: repeat(2, max-content);
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
