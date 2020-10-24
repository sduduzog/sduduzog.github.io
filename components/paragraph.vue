<!-- eslint-disable vue/no-v-html -->
<template>
  <p v-editable="blok" class="lg:text-2xl text-gray-700" v-html="blok.text" />
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      default: undefined,
    },
  },
};
</script>
