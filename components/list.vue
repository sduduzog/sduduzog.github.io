<template>
  <ul v-editable="blok" class="ml-6 list-disc">
    <component
      :is="b.component"
      v-for="b in blok.items"
      :key="b._uid"
      :blok="b"
    />
  </ul>
</template>
<script>
export default {
  props: {
    blok: { type: Object, default: undefined },
  },
};
</script>
