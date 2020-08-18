<template>
  <div class="max-w-screen-md space-y-6">
    <h1 class="text-2xl lg:text-4xl font-bold text-accent-color">Blog</h1>
    <p v-if="posts.length === 0" class="text-gray-700 lg:text-2xl">
      Stay tuned!
    </p>
    <div v-for="post of posts" :key="post.slug">
      <nuxt-link
        :to="`blog/${post.slug}`"
        class="text-xl lg:text-3xl font-semibold"
        >{{ post.title }}</nuxt-link
      >
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog").fetch()
    const isDev = process.env.NODE_ENV === "development"
    return {
      posts: isDev ? posts : posts.filter((post) => post.published),
    }
  },
}
</script>
