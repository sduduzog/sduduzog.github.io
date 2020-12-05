<template>
  <div class="py-1 lg:py-4 space-y-1">
    <nuxt-link
      class="text-xl lg:text-2xl font-semibold hover:text-accent-color"
      :to="slug"
    >
      {{ blok.name }}
    </nuxt-link>
    <span class="block text-sm text-gray-600">
      Published on {{ publishDate }}
    </span>
  </div>
</template>
<script>
import { parseISO, format } from 'date-fns';

export default {
  props: {
    blok: { type: Object, default: undefined },
  },
  computed: {
    slug() {
      return `/blog/${this.blok.slug}`;
    },
    name() {
      return `${this.blok.name}`;
    },
    publishDate() {
      const date =
        this.blok.first_published_at ||
        this.blok.published_at ||
        this.blok.created_at;
      return format(parseISO(date), 'd MMM yyyy');
    },
    publishedOn() {
      return `Published on ${this.publishDate}`;
    },
  },
};
</script>
