<template>
  <div>
    <div @click="tray" v-for="blog in blogPosts" :key="blog.slug">
      <a :href="blog.slug">{{ blog.slug }}</a>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  },
  methods: {
    tray() {
      // eslint-disable-next-line
      console.log(this.blogPosts)
    }
  }
}
</script>
