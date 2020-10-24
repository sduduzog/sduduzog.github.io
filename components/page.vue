<template>
  <div v-editable="blok" class="space-y-12">
    <!-- eslint-disable vue/no-template-shadow -->
    <component
      :is="blok.component | dashify"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script>
export default {
  props: {
    blok: { type: Object, default: undefined },
  },
};
</script>
