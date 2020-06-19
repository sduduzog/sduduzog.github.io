<template>
  <div class="space-y-4">
    <div v-for="article in articles" :key="article.id" class="p-6 bg-blue-300">
      <div class="m-4 bg-red-400">
        <a :href="article.url" target="_blank" class="text-3xl font-bold">
          {{ article.title }}
        </a>
        <p>{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const articles = await $axios.$get(
      'https://dev.to/api/articles/?username=sduduzog&per_page=3'
    )
    return { articles: [] }
  },
  data() {
    return {
      message: 'Hello world',
      user: { first_name: 'waiting' },
      articles: [],
    }
  },
}
</script>
