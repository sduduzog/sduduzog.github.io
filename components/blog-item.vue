<template>
  <div class="py-1 lg:py-4 space-y-1">
    <nuxt-link
      class="text-xl lg:text-2xl font-semibold hover:text-accent-color"
      :to="`/${blok.full_slug}`"
    >
      {{ blok.name }}
    </nuxt-link>
    <div class="block text-sm text-gray-600">
      <client-only>
        <span ref="dateSpan" />
      </client-only>
      <span v-if="!dynamic"> Published on {{ publishDate }} </span>
    </div>
  </div>
</template>
<script>
import { parseISO, format, formatDistanceToNow } from 'date-fns';

export default {
  props: {
    blok: { type: Object, default: undefined },
  },
  data() {
    return {
      dynamic: false,
    };
  },
  computed: {
    date() {
      const date =
        this.blok.first_published_at ||
        this.blok.published_at ||
        this.blok.created_at;
      return parseISO(date);
    },
    publishDate() {
      return format(this.date, 'd MMM yyyy');
    },
    publishedOn() {
      return `Published on ${this.publishDate}`;
    },
  },
  mounted() {
    this.initClientDate();
  },
  methods: {
    initClientDate(count = 10) {
      this.$nextTick(() => {
        if (this.$refs.dateSpan) {
          this.$refs.dateSpan.innerHTML = `Published ${formatDistanceToNow(
            this.date,
          )} ago`;
          this.dynamic = true;
        } else if (count > 0) {
          this.initClientDate(count - 1);
        }
      });
    },
  },
};
</script>
