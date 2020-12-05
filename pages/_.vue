<template>
  <div class="max-w-screen-sm lg:max-w-screen-md space-y-8 mx-auto lg:ml-0">
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
    const editMode = context.query._storyblok || context.isDev;
    // context.isDev ||
    // (typeof window !== 'undefined' &&
    //   window.localStorage.getItem('_storyblok_draft_mode'));

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
