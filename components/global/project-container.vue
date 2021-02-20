<template>
  <div class="grid md:grid-cols-2 gap-2">
    <component
      :is="blok.component"
      v-for="blok in blok.projects"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
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
