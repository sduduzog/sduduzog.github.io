<template>
  <article class="m-auto lg:py-4 lg:px-12">
    <img v-if="blogPost.image" :src="blogPost.image" class="w-full" />
    <h1 class="text-accent-color font-bold text-4xl m-0">
      {{ blogPost.title }}
    </h1>
    <div v-html="$md.render(blogPost.body)" />
  </article>
</template>
<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
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
  @apply text-primary-color;
}

pre {
  @apply shadow-x;
  @apply rounded-lg;
}
</style>
