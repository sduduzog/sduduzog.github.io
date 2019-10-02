<template>
  <section class="intro">
    <h1>
      <span>I write code</span>
      <span class="fake-cursor active">|</span>
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
@keyframes blinker {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

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
        &.active {
          animation-name: blinker;
          animation-duration: 0.93s;
          animation-iteration-count: infinite;
        }
      }
    }
  }
}
</style>
