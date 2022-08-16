<template>
  <nuxt-link :href="href" class="text-teal-600 hover:underline">
    <slot></slot>
  </nuxt-link>
</template>

<script lang="ts" setup>
defineProps({
  href: {
    type: String,
    default: '',
  },
  blank: {
    type: Boolean,
    default: false,
  },
});
</script>
