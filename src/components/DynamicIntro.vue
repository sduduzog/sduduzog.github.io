<template>
  <section class="intro">
    <h1>
      <span>{{ displayedTitle }}</span>
      <span class="fake-cursor" :class="{ active: cursorActive }">|</span>
    </h1>
    <p></p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DynamicIntro",
  data() {
    return {
      cursorActive: true,
      index: 0,
      displayedTitle: "",
      content: [{ title: "I write code" }]
    };
  },
  methods: {
    sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async emulateTyping() {
      let title = this.content[this.index].title.split("");
      this.cursorActive = false;
      for (let i = 0; i < title.length; i++) {
        this.displayedTitle += title[i];
        await this.sleep(50);
      }
      this.cursorActive = true;
    },
    async initAnimation() {
      await this.sleep(1500);
      this.emulateTyping();
    }
  },
  mounted: function() {
    this.initAnimation();
  }
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
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
        &.active {
          animation-name: blinker;
          animation-duration: 0.93s;
          animation-iteration-count: infinite;
        }
      }
    }
  }
  p {
    font-size: 1.5em;
    margin: 0;
    padding: 20px 5px;
  }
}
</style>
