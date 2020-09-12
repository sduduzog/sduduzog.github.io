<template>
  <div class="max-w-screen-md">
    <img
      :src="post.coverImage"
      class="border"
      alt="Hacktoberfest t-shirt with a dev sticker"
    />
    <span></span>
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
  head() {
    const domain = "https://sduduzog.com"
    return {
      title: this.post.title,
      meta: [
        { hid: "og:title", name: "og:title", content: this.post.title },
        {
          hid: "og:url",
          name: "og:url",
          content: `${domain}/blog/${this.post.slug}`,
        },
        {
          hid: "og:image",
          name: "og:image",
          content: `${domain}${this.post.coverImage}`,
        },
        { hid: "og:type", name: "og:type", content: "article" },
        {
          hid: "og:article:author",
          name: "og:article:author",
          content: "Beautus S. Gumede",
        },
      ],
    }
  },
}
</script>
<style>
.nuxt-content {
  @apply text-gray-800;
}
.nuxt-content p > em > a,
.nuxt-content p > a {
  @apply text-gray-600;
  @apply underline;
}
.nuxt-content ul {
  @apply list-disc;
  @apply pl-4;
}

.nuxt-content h1 {
  @apply text-accent-color;
  @apply font-bold;
  @apply text-3xl;
}
.nuxt-content h2 {
  @apply font-bold;
  @apply text-2xl;
}
.nuxt-content h3 {
  @apply font-bold;
  @apply text-xl;
}
.nuxt-content h4 {
  @apply font-bold;
  @apply text-lg;
}

.nuxt-content p {
  @apply my-4;
  @apply text-base;
}

.nuxt-content img {
  @apply m-auto;
}

@screen lg {
  .nuxt-content h1 {
    @apply text-5xl;
  }
  .nuxt-content h2 {
    @apply font-bold;
    @apply text-4xl;
  }
  .nuxt-content h3 {
    @apply font-bold;
    @apply text-3xl;
  }
  .nuxt-content h4 {
    @apply font-bold;
    @apply text-2xl;
  }
  .nuxt-content p {
    @apply text-xl;
  }
}
</style>
