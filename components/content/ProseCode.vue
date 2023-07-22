<script lang="ts">
import { defineComponent } from '#imports'

export default defineComponent({
  props: {
    code: {
      type: String,
      default: ''
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array as () => number[],
      default: () => []
    },
    meta: {
      type: String,
      default: null
    }
  }
})
</script>

<template>
  <slot />
</template>

<style lang="scss">
pre {
  @apply rounded-md p-1 bg-slate-100 border;
}
pre code .line {
  display: block;
  min-height: 1rem;
}
</style>