<template>
  <h1 v-editable="blok" class="text-2xl lg:text-4xl font-light text-gray-400">
    {{ blok.text }}
  </h1>
</template>
<script>
export default {
  props: {
    blok: { type: Object, default: undefined },
  },
};
</script>
