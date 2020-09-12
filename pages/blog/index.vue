<template>
  <div class="max-w-screen-md space-y-6">
    <h1 class="text-2xl lg:text-4xl font-bold text-accent-color">Blog</h1>
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
      <h2
        :to="`blog/${post.slug}`"
        class="text-xl lg:text-3xl font-bold text-gray-800"
      >
        {{ post.title }}
      </h2>
    </nuxt-link>
  </div>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content("blog").sortBy("createdAt", "desc").fetch()
    console.log(posts)
    const isDev = process.env.NODE_ENV === "development"
    return {
      posts: isDev ? posts : posts.filter((post) => post.published),
    }
  },
}
</script>
