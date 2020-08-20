<template>
  <div class="max-w-screen-md">
    <img
      :src="post.coverImage"
      alt="Hacktoberfest t-shirt with a dev sticker"
    />
    <nuxt-content :document="post" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params, error }) {
    let post
    try {
      post = await $content("blog", params.slug).fetch()
    } catch (e) {
      error({ message: "Blog Post not found" })
    }

    return {
      post,
    }
  },
}
</script>
<style>
.nuxt-content h1 {
  @apply text-accent-color;
  @apply font-bold;
  @apply text-2xl;
}

@screen lg {
  .nuxt-content h1 {
    @apply text-4xl;
  }
}
</style>
