<template>
  <li>
    {{ blok.value }}
  </li>
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
