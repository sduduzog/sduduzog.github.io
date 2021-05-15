<template>
  <div class="max-w-screen-sm lg:max-w-screen-md space-y-6 mx-auto xl:ml-0">
    <!-- <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :slug="story.slug"
      :stories="stories"
    /> -->
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  async asyncData({ error, query, isDev, route, app, store }) {
    const editMode = query._storyblok || isDev;
    isDev ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('_storyblok_draft_mode'));

    const version = editMode ? 'draft' : 'published';
    const path = route.path === '/' ? '/home' : route.path;
    const data = {
      story: { id: 0, full_slug: '', is_startpage: false },
      stories: [],
    };
    try {
      const storyResponse = await app.$storyapi.get(`cdn/stories/${path}`, {
        version,
        cv: store.state.cacheVersion,
      });
      data.story = storyResponse.data.story;
      if (!data.story.is_startpage) {
        return data;
      }
      const storiesResponse = await app.$storyapi.get(`cdn/stories`, {
        starts_with: data.story.full_slug,
        is_startpage: false,
        cv: store.state.cacheVersion,
      });
      data.stories = storiesResponse.data.stories;
      return data;
    } catch (err) {
      console.error(error);
      if (!err.response) {
        error({
          statusCode: 404,
          message: 'Failed to receive content from api',
        });
      } else {
        error({
          statusCode: err.response.status,
          message: err.response.data,
        });
      }
      return {};
    }
  },
  data() {
    return {
      story: {
        id: undefined,
        content: {},
      },
      stories: [],
    };
  },
  mounted() {
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else if (!event.slugChanged) {
        window.location.reload();
      }
    });
  },
});
</script>
