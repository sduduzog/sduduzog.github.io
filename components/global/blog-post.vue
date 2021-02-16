<template>
  <div v-editable="blok">
    <img :src="imageSrc" alt="" class="border rounded-md" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="space-y-8 text-gray-800 text-justify" v-html="richtext" />
  </div>
</template>
<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';

export default {
  props: {
    blok: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    imageSrc() {
      return `${this.resize(this.blok.image.filename, '768x0/smart')}`;
    },
    richtext() {
      return this.blok.body
        ? this.$storyapi.richTextResolver.render(this.blok.body)
        : '';
    },
  },
  mounted() {
    Prism.highlightAll();
  },
  methods: {
    resize(image, option) {
      const imageService = '//img2.storyblok.com/';
      const path = image.replace(/(http(s?):)?\/\/a.storyblok.com/, '');
      return imageService + option + path;
    },
  },
};
</script>
<style lang="scss">
h1,
h2,
h3,
h4 {
  @apply font-bold;
}
h1 {
  @apply text-accent-color;
  @apply text-3xl;
}
h2 {
  @apply text-2xl;
}
h3 {
  @apply text-xl;
}
h4 {
  @apply text-lg;
}
p {
  @apply text-base;
  @apply text-gray-900;

  a {
    @apply text-gray-600;
    @apply underline;
  }
  img {
    @apply border;
    @apply m-auto;
    @apply rounded-md;
  }
}
@screen lg {
  h1 {
    @apply text-5xl;
  }
  h2 {
    @apply text-4xl;
  }
  h3 {
    @apply text-3xl;
  }
  h4 {
    @apply text-2xl;
  }
  p {
    @apply text-lg;
  }
}
</style>
