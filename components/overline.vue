<template>
  <h1
    v-editable="blok"
    class="uppercase lg:text-4xl font-bold text-fuchsia-600"
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
