<template>
  <div v-editable="blok">
    <component
      :is="blok.type"
      v-for="item in stories"
      :key="item.uuid"
      :blok="item"
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
  async fetch() {
    const { query, isDev, error } = this.$nuxt.context;
    let editMode = false;

    if (
      query._storyblok ||
      isDev ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('_storyblok_draft_mode'))
    ) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('_storyblok_draft_mode', '1');
        if (window.location === window.parent.location) {
          window.localStorage.removeItem('_storyblok_draft_mode');
        }
      }

      editMode = true;
    }

    const version = editMode ? 'draft' : 'published';
    const { url, cached_url: cachedUrl } = this.blok.base;
    const path = url || cachedUrl;
    try {
      const response = await this.$storyapi.get(`cdn/stories`, {
        starts_with: path,
        is_startpage: false,
        version,
        cv: this.$store.state.cacheVersion,
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
};
</script>
