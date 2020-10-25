<template>
  <div class="max-w-screen-md">
    <img
      :src="image.src"
      :alt="image.alt"
      class="border lg:border-2 rounded-md"
    />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="space-y-8 text-gray-900" v-html="richtext" />
  </div>
</template>
<script>
import Prism from 'prismjs';
import 'prismjs/themes/prism-solarizedlight.css';

export default {
  async asyncData(context) {
    let editMode = false;

    if (
      context.query._storyblok ||
      context.isDev ||
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('_storyblok_draft_mode'))
    ) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('_storyblok_draft_mode', '1');
        if (window.location === window.parent.location) {
          window.localStorage.removeItem('_storyblok_draft_mode');
        }
      }

      editMode = true;
    }

    const version = editMode ? 'draft' : 'published';
    const { slug } = context.route.params;
    try {
      const response = await context.app.$storyapi.get(
        `cdn/stories/blog/${slug}`,
        {
          version,
          cv: context.store.state.cacheVersion,
        },
      );
      const { content } = response.data.story;
      return {
        image: {
          src: content.image.filename,
          alt: content.image.alt,
        },
        text: content.body,
        blok: content,
      };
    } catch (error) {
      console.error(error);
      if (!error.response) {
        context.error({
          statusCode: 404,
          message: 'Failed to receive content from api',
        });
      } else {
        context.error({
          statusCode: error.response.status,
          message: error.response.data,
        });
      }
      return {};
    }
  },

  data() {
    return { story: { content: {} } };
  },
  computed: {
    richtext() {
      return this.$data.text
        ? this.$storyapi.richTextResolver.render(this.$data.text)
        : '';
    },
  },
  mounted() {
    Prism.highlightAll();
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content;
        }
      } else if (!event.slugChanged) {
        window.location.reload();
      }
    });
  },
  head() {
    return {};
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
    @apply text-xl;
  }
}
</style>
