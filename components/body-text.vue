<template>
  <h1
    v-editable="blok"
    class="text-2xl lg:text-4xl font-semibold text-fuchsia-600"
  >
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
