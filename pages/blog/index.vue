<template>
  <div class="max-w-screen-md space-y-6">
    <h1 class="text-2xl lg:text-4xl font-light text-gray-400">Blog</h1>
    <p v-if="posts.length === 0" class="text-gray-700 lg:text-2xl">
      Stay tuned!
    </p>
    <nuxt-link
      v-for="post of posts"
      :key="post.slug"
      :to="`blog/${post.slug}`"
      class="block p-1 lg:p-4 space-y-1 lg:space-y-4 shadow"
    >
      <img
        v-if="post.coverImage"
        :src="post.coverImage"
        class="border rouded-sm lg:rounded-lg"
        alt="Blog cover image"
      />
      <h2 class="text-xl lg:text-3xl font-bold text-accent-color">
        {{ post.title }}
      </h2>
      <span class="text-gray-600">
        Published on {{ getDate(post.createdAt) }}
      </span>
    </nuxt-link>
  </div>
</template>
<script>
import { parseISO, format } from 'date-fns';

export default {
  async asyncData({ isDev, app, $content }) {
    const _posts = [];
    let editMode = false;

    if (isDev) {
      editMode = true;
    }

    const version = editMode ? 'draft' : 'published';

    try {
      const response = await app.$storyapi.get(`cdn/stories/pages/`, {
        version,
        starts_with: 'blog/',
      });
      console.log(response.data.story.content);
    } catch (error) {
      console.error(error);
    }

    const posts = await $content('blog')
      .only(['title', 'coverImage', 'createdAt', 'slug', 'published'])
      .sortBy('createdAt', 'desc')
      .fetch();
    _posts.push(posts);
    const filtered = isDev ? posts : posts.filter((post) => post.published);
    return {
      posts: filtered,
    };
  },
  methods: {
    getDate(date) {
      return format(parseISO(date), 'd MMM yyyy');
    },
  },
};
</script>
