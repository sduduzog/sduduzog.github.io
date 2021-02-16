<template>
  <nuxt-link :to="url">
    {{ blok.name || blok.Name }}
  </nuxt-link>
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
    url() {
      const url = this.blok.Url.url || this.blok.Url.cached_url;
      return `/${url === 'home' ? '' : url}`;
    },
  },
};
</script>
