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
        Published {{ getSubDate(post.createdAt) }} ago
      </span>
    </nuxt-link>
  </div>
</template>
<script>
import { parseISO, formatDistanceToNow } from "date-fns"

export default {
  async asyncData({ $content }) {
    const posts = await $content("blog")
      .only(["title", "coverImage", "createdAt", "slug", "published"])
      .sortBy("createdAt", "desc")
      .fetch()
    const isDev = process.env.NODE_ENV === "development"
    const filtered = isDev ? posts : posts.filter((post) => post.published)
    return {
      posts: filtered,
    }
  },
  methods: {
    getSubDate(date) {
      return formatDistanceToNow(parseISO(date), true)
    },
  },
}
</script>
