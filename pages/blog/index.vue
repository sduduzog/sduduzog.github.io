<template>
  <div class="max-w-screen-md space-y-6">
    <h1 class="text-2xl lg:text-4xl font-light text-gray-400">Blog</h1>
    <p v-if="stories.length === 0" class="text-gray-700 lg:text-2xl">
      Stay tuned!
    </p>
    <article-preview
      v-for="story in stories"
      :key="story.uuid"
      :article="story"
    />
  </div>
</template>
<script>
import ArticlePreview from '~/components/article-preview.vue';

export default {
  components: { ArticlePreview },
  async asyncData({ isDev, app, $content }) {
    let editMode = false;

    if (isDev) {
      editMode = true;
    }

    const version = editMode ? 'draft' : 'published';

    try {
      const response = await app.$storyapi.get(`cdn/stories/`, {
        version,
        starts_with: 'blog/',
      });
      const { stories } = response.data;
      return { stories };
    } catch (error) {
      console.error(error);
      return { stories: [] };
    }
  },
};
</script>
