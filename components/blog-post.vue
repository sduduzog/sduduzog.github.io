<template>
  <div v-editable="blok">
    <lazy-generic-header />
    <img :src="imageSrc" alt="" class="border rounded-md w-full" />
    <h1 class="my-6">{{ blok.title }}</h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="space-y-8 text-gray-800" v-html="richtext" />
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
  head() {
    return {
      title: this.blok.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@sduduzo_g',
        },
        { name: 'twitter:creator', content: '@sduduzo_g' },
        { name: 'twitter:title', content: this.blok.title },
        {
          property: 'og:title',
          content: this.blok.title,
        },
        { property: 'og:description', content: this.description },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:image',
          content: `https:${this.imageSrc}`,
        },
        {
          property: 'og:url',
          content: this.$config.baseURL + this.$route.fullPath,
        },
      ],
    };
  },
  computed: {
    imageSrc() {
      return `${this.$foo.resizeBlokImage(
        this.blok.image.filename,
        '768x0/smart',
      )}`;
    },
    richtext() {
      return this.blok.body
        ? this.$storyapi.richTextResolver.render(this.blok.body)
        : '';
    },
    description() {
      const { content } = this.blok.body;
      if (content.length === 0) {
        return undefined;
      }
      const paragraphs = content.filter(item => {
        if (item.type !== 'paragraph') {
          return false;
        }
        if (!item.content) {
          return false;
        }
        return item.content.find(elem => {
          return elem.type === 'text';
        });
      });
      if (paragraphs.length === 0) {
        return undefined;
      }
      const { text } = paragraphs[0].content[0];
      return text;
    },
  },
  mounted() {
    Prism.highlightAll();

    const inlineCodeElements = document.querySelectorAll('p > code');
    inlineCodeElements.forEach(node => {
      Prism.highlightElement(node);
    });
  },
  methods: {
    getDescription() {
      const { content } = this.blok.body;
      if (content.length === 0) {
        return '';
      }
      const paragraphs = content.filter(item => {
        return item.type === 'paragraph';
      });
      let text;
      paragraphs.forEach(item => {
        if (item.type !== 'paragraph') {
          return;
        }
        const subItem = item.content.find(element => {
          return element.type === 'text';
        });
        if (!subItem) {
          return;
        }
        item = subItem.text;
      });
      return text;
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
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
  @apply text-justify;
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
ul,
ol {
  @apply ml-6;
}
ul {
  @apply list-disc;
}
ol {
  @apply list-decimal;
}
blockquote {
  @apply border-l-4;
  @apply border-gray-400;
  @apply pl-6;
  p {
    @apply text-gray-600;
    @apply italic;
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
