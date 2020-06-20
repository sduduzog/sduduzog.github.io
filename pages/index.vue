<template>
  <div class="max-w-screen-lg space-y-4">
    <h1 class="p-2 text-4xl font-bold md:p-8 text-accent-color">
      My latest articles
    </h1>
    <div
      v-for="article in articles"
      :key="article.id"
      class="p-1 shadow-sm hover:shadow md:p-6"
    >
      <div class="p-2 grid text-secondary-color">
        <a
          :href="article.url"
          rel="noreferrer"
          target="_blank"
          class="text-xl font-bold md:text-3xl"
        >
          {{ article.title }}
        </a>
        <span class="opacity-50">{{ article.readable_publish_date }}</span>
        <p class="text-secondary-color">{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const articles = await $axios.$get(
      'https://dev.to/api/articles/?username=sduduzog&per_page=4'
    )
    return { articles }
  },
  data() {
    return {
      articles: [],
    }
  },
  methods: {
    niceDate: (date) => {
      return date
    },
  },
}
</script>
