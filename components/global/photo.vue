<template>
  <img :src="imageSrc" :alt="alt" />
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    alt() {
      return this.blok.src.alt;
    },
    src() {
      return this.$foo.resizeBlokImage(this.blok.src.filename);
    },
    imageSrc() {
      return this.blok.src.filename;
    },
  },
  mounted() {
    console.log(this.blok);
  },
};
</script>
