<template>
  <div>
    <div v-for="blog in blogPosts" :key="blog.slug">
      <a
        :href="blog.slug.startsWith('blog') ? blog.slug : 'blog/' + blog.slug"
        >{{ blog.slug.startsWith('blog') ? blog.slug : 'blog/' + blog.slug }}</a
      >
    </div>
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
