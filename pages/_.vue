<template>
  <lazy-hydrate :never="!isDev">
    <component
      :is="`lazy-${story.content.component}`"
      v-if="story && story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :slug="story.slug"
      :stories="stories" />
  </lazy-hydrate>
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
import LazyHydrate from 'vue-lazy-hydration';

export default defineComponent({
  components: {
    LazyHydrate,
  },
  setup() {
    const story = ref();
    const stories = ref();
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
      if (!storyData.is_startpage) {
        return;
      }
      const storiesResponse = await $storyapi.get(`cdn/stories`, {
        starts_with: storyData.full_slug,
        is_startpage: false,
        cv: cacheVersion,
      });
      const { stories: storiesData } = storiesResponse.data;
      stories.value = storiesData;
    });

    $storyapi.setComponentResolver((component, blok) => {
      return `<component :blok='${JSON.stringify(
        blok,
      )}' is="lazy-${component}" />`;
    });

    return { story, stories, isDev };
  },
});
</script>

<style lang="scss">
h1,
h2 {
  @apply text-fuchsia-600 dark:text-fuchsia-500 font-black;
}
h1 {
  @apply text-6xl md:text-7xl;
}
h2 {
  @apply text-3xl md:text-4xl;
}
p {
  @apply text-gray-800 dark:text-gray-200;

  a {
    @apply underline font-medium;
  }
}
a {
  @apply text-fuchsia-600 dark:text-fuchsia-500;
}
</style>
