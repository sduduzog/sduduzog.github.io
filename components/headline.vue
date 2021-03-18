<template>
  <h1 v-editable="blok" class="text-4xl lg:text-7xl font-light text-gray-400">
    {{ blok.value }}
  </h1>
</template>
<script>
export default {
  props: {
    blok: { type: Object, default: undefined },
  },
};
</script>
