<template>
  <div class="p-1 px-4">
    <h1 class="text-primary-color font-light text-xl m-0">
      I'm <n-link to="/" class="font-normal">Beautus S. Gumede</n-link>
    </h1>
    <h1 class="text-primary-color font-light text-xl m-0">
      This is my personal blog
    </h1>
    <n-link
      v-for="blog in blogPosts"
      :key="blog.slug"
      :to="{
        path: blog.slug.startsWith('blog') ? blog.slug : 'blog/' + blog.slug
      }"
      class="p-4"
    >
      <h1 class="text-accent-color font-bold text-4xl m-0">{{ blog.title }}</h1>
      <h3 class="text-secondary-color">
        {{ new Date(blog.date).toDateString() }}
      </h3>
      <h2 class="text-primary-color font-semibold text-lg">
        {{ blog.description }}
      </h2>
    </n-link>
  </div>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>
