<template>
  <div class="grid md:grid-cols-2 gap-2">
    <component
      :is="b.component"
      v-for="b in blok.projects"
      :key="b._uid"
      :blok="b"
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
  mounted() {
    this.blok.projects.forEach((story) => {
      console.log('container-', story._uid);
    });
  },
};
</script>
