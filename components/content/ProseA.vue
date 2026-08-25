<template>
  <nuxt-link
    :href="props.href"
    :target="props.target"
    :class="props.href.startsWith('#') ? 'font-normal' : 'font-bold'"
    class="text-[#3B3030] underline decoration-[#9B8B7E] decoration-2 underline-offset-4 transition-colors hover:text-[#6B5555] focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B3030]"
  >
    <slot></slot>
  </nuxt-link>
</template>
<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  href: {
    type: String,
    default: "",
  },
  target: {
    type: String as PropType<
      | "_blank"
      | "_parent"
      | "_self"
      | "_top"
      | (string & object)
      | null
      | undefined
    >,
    default: undefined,
    required: false,
  },
});
</script>
