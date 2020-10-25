<template>
  <nuxt-link :to="slug" class="block p-1 lg:p-4 space-y-1 lg:space-y-4 shadow">
    <img
      :src="image.src"
      :alt="image.alt"
      class="border rounded-sm lg:rounded-lg"
    />
    <h2 class="text-xl lg:text-3xl font-bold text-accent-color">{{ name }}</h2>
    <span class="text-gray-600">Published on {{ publishDate }} </span>
  </nuxt-link>
</template>
<script>
import { parseISO, format } from 'date-fns';

export default {
  props: {
    blok: {
      type: Object,
      default: undefined,
    },
    article: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    name() {
      return this.$props.article.name;
    },
    slug() {
      return `blog/${this.$props.article.slug}`;
    },
    publishDate() {
      const date =
        this.$props.article.first_published_at ||
        this.$props.article.published_at ||
        this.$props.article.created_at;
      return format(parseISO(date), 'd MMM yyyy');
    },
    image() {
      const { image } = this.$props.article.content;
      return { src: image.filename, alt: image.alt };
    },
  },
};
</script>
