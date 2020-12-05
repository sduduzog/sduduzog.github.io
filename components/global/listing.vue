<template>
  <div v-editable="blok">
    <component
      :is="blok.type"
      v-for="item in stories"
      :key="item.uuid"
      :blok="item"
    />
    <span v-if="$fetchState.error">issue with fetch</span>
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
  async fetch() {
    const {
      query,
      isDev,
      error,
      store: { state },
    } = this.$nuxt.context;
    const editMode =
      query._storyblok ||
      isDev ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('_storyblok_draft_mode'));

    const version = editMode ? 'draft' : 'published';

    const { cached_url } = this.blok.base;
    try {
      const response = await this.$storyapi.get(`cdn/stories`, {
        starts_with: cached_url,
        is_startpage: false,
        version,
        cv: state.cacheVersion,
      });
      const { stories } = response.data;
      this.stories = stories;
    } catch {
      error({ statusCode: 404, message: 'Failed to receive content from api' });
    }
  },
  data() {
    return { stories: [] };
  },
  mounted() {
    this.$nextTick(() => this.$fetch());
  },
};
</script>
