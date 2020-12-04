<template>
  <div class="max-w-screen-md space-y-8 font-semibold">
    <component
      :is="story.content.component"
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
  </div>
</template>
<script>
export default {
  async asyncData(context) {
    let editMode = false;

    if (
      context.query._storyblok ||
      context.isDev ||
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
    const path = context.route.path === '/' ? '/home' : context.route.path;
    try {
      const response = await context.app.$storyapi.get(`cdn/stories/${path}`, {
        version,
        cv: context.store.state.cacheVersion,
      });
      return response.data;
    } catch (error) {
      console.error(error);
      if (!error.response) {
        context.error({
          statusCode: 404,
          message: 'Failed to receive content from api',
        });
      } else {
        context.error({
          statusCode: error.response.status,
          message: error.response.data,
        });
      }
      return {};
    }
  },
  data() {
    return { story: { content: {} } };
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
};
</script>
