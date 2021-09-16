<template>
  <component
    :is="`lazy-${story.content.component}`"
    v-if="story && story.content.component"
    :key="story.content._uid"
    :blok="story.content"
    :slug="story.slug" />
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const story = ref();
    const { $storyapi, $storybridge, route, store, isDev } = useContext();
    const { path, query } = route.value;
    const slug = computed(() =>
      path === '/' ? 'home' : path.replace(/\/$/, '').replace(/\//g, '~'),
    );

    onMounted(() => {
      $storybridge(() => {
        const storyBlokInstance = new window.StoryblokBridge();
        storyBlokInstance.on(['input', 'published', 'change'], event => {
          if (event.action === 'input') {
            if (event.story.id === story.value.id) {
              story.value.content = event.story.content;
            }
          } else {
            window.location.reload();
          }
        });
      });
    });

    useFetch(async () => {
      const { cacheVersion } = store.state;
      const { _storyblok } = query;
      const editMode = _storyblok || isDev;
      const version = editMode ? 'draft' : 'published';
      const storyResponse = await $storyapi.get(
        `cdn/stories/${slug.value.replace(/~/g, '/')}`,
        {
          version,
          cv: cacheVersion,
        },
      );
      const { story: storyData } = storyResponse.data;
      story.value = storyData;
    });

    $storyapi.setComponentResolver((component, blok) => {
      return `<component :blok='${JSON.stringify(
        blok,
      )}' is="lazy-${component}" />`;
    });

    return { story };
  },
});
</script>

<style lang="scss">
h1,
h2 {
  @apply text-fuchsia-600 dark:text-fuchsia-500 font-black;
}
h1 {
  @apply text-5xl md:text-7xl;
}
h2 {
  @apply text-3xl md:text-4xl;
}
p {
  @apply font-medium text-gray-800 dark:text-gray-200;

  a {
    @apply underline font-medium;
  }
  img {
    @apply border;
    @apply m-auto;
    @apply rounded-md;
  }
}
a {
  @apply text-fuchsia-600 dark:text-fuchsia-500;
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
</style>
