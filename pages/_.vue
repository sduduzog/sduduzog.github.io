<template>
  <lazy-hydrate never>
    <component
      :is="story.content.component"
      v-if="story && story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :slug="story.slug"
      :stories="stories"
    />
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
      if (!storyData.is_startpage) {
        story.value = storyData;
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
    return { story, stories };
  },
});
</script>
