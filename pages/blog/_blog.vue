<template>
  <div class="bg-gray-100">
    <article class="max-w-screen-md m-auto p-4 bg-white">
      <h1>{{ blogPost.title }}</h1>
      <div v-html="$md.render(blogPost.body)" />
    </article>
  </div>
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
