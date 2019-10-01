<template>
  <section class="intro">
    <h1>
      <span>I write code</span>
      <span class="fake-cursor">|</span>
    </h1>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DynamicIntro"
});
</script>

<style lang="scss">
.intro {
  padding: 5px;

  h1 {
    margin: 0;
    font-size: 5em;

    span {
      &:not(.fake-cursor) {
        color: var(--secondary-color);
      }
      &.fake-cursor {
        display: inline-block;
        transform: translate(-10px, -8px) scale(1.4);
        font-weight: lighter;
        color: var(--accent-color);
      }
    }
  }
}
</style>
