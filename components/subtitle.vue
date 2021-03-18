<template>
  <h1 v-editable="blok" class="text-2xl lg:text-2xl font-bold text-fuchsia-900">
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
