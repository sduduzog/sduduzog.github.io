<template>
  <div v-editable="blok">
    <component
      :is="blok.type"
      v-for="item in listing"
      :key="item.uuid"
      :blok="item"
    />
    <span v-if="$fetchState.error">issue with fetch</span>
  </div>
</template>
<script>
import { mapState } from 'vuex';

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
      store: { state, commit },
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
      commit('setListing', { key: cached_url, value: stories });
    } catch {
      error({ statusCode: 404, message: 'Failed to receive content from api' });
    }
  },
  computed: {
    ...mapState({
      stories: (state) => state.listing,
    }),
    listing() {
      const { cached_url } = this.blok.base;
      return this.stories[cached_url] || [];
    },
  },
};
</script>
