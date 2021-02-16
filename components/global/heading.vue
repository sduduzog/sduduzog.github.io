<template>
  <h1
    v-editable="blok"
    class="text-xl lg:text-3xl text-accent-color font-bold whitespace-pre-line"
  >
    {{ blok.name }}
  </h1>
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
