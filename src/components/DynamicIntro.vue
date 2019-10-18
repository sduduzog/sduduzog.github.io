<template>
  <section class="intro">
    <h1>
      <span>{{ displayedTitle }}</span>
      <span class="fake-cursor" :class="{ active: cursorActive }">|</span>
    </h1>
    <transition name="fade">
      <p v-if="subtitleShown" v-html="displayedSubtitle"></p>
    </transition>
  </section>
</template>

<script src="./dynamic-intro.ts"></script>

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}

.intro {
  padding: 140px 5px 5px;

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
    max-width: 768px;
  }
}
</style>
