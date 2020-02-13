<template>
  <article class="max-w-screen-md m-auto p-4">
    <h1>{{ blogPost.title }}</h1>
    <div v-html="$md.render(blogPost.body)" />
  </article>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
<style>
h1 {
  @apply text-4xl;
  @apply font-semibold;
  @apply my-4;
}

p {
  @apply text-lg;
}
</style>
