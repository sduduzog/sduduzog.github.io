<template>
  <section class="max-w-screen-md space-y-4">
    <h1 class="text-xl font-semibold">
      I write code. Lots and lots of code. To be honest, I also delete most of
      it too, but hey, that's how programming is, I guess.
    </h1>
    <p>
      I'm a software developer at
      <a class="underline" href="https://codeo.co.za/team">Codeo_</a> where I've
      contributed in building and breaking really cool stuff. We eventually fix
      most of it.
    </p>
    <p>
      I completed a BSc Computer Science degree at the University of Zululand.
      Although you don't stop learning, you can't be a student forever, and it
      was great fun being a student.
    </p>
    <p>
      I played cricket in high school. I was in various student societies and
      councils during the course of my degree. Apart from that, I'm a code
      enthusiast. A great fan of open source and it's community. I enjoy reading
      tech blogs and I'm gradually getting myself to write more. I hope to one
      day speak in front of an audience about my experiences.
    </p>
    <!-- <h1 class="p-2 text-4xl font-bold md:p-8 text-accent-color">
      My dev.to posts
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
          >{{ article.title }}</a
        >
        <span class="opacity-50">{{ article.readable_publish_date }}</span>
        <p class="text-secondary-color">{{ article.description }}</p>
      </div>
    </div>-->
  </section>
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
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' },
      ],
    }
  },
}
</script>
