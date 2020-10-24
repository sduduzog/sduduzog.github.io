<template>
  <h1 v-editable="blok" class="text-xl lg:text-3xl text-accent-color font-bold">
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
  head() {
    const head = {};
    const title = this.$props.blok.name;
    if (title) {
      head.title = title;
    }
    return head;
  },
};
</script>
