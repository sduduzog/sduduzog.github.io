<template>
  <div class="max-w-screen-sm lg:max-w-screen-md space-y-6 mx-auto xl:ml-0">
    <component
      :is="story.content.component"
      v-if="story && story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :slug="story.slug"
      :stories="stories"
    />
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  useContext,
  computed,
  useStatic,
} from '@nuxtjs/composition-api';

export default defineComponent({
  // mounted() {
  //   this.$storybridge.on(['input', 'published', 'change'], (event) => {
  //     if (event.action === 'input') {
  //       if (event.story.id === this.story.id) {
  //         this.story.content = event.story.content;
  //       }
  //     } else if (!event.slugChanged) {
  //       window.location.reload();
  //     }
  //   });
  // },
  setup() {
    const { $storyapi, route, store, isDev } = useContext();
    const { path, query } = route.value;
    const slug = computed(() =>
      path === '/' ? 'home' : path.replace(/\/$/, '').replace(/\//g, '~'),
    );
    const blok = useStatic(
      async (key) => {
        const { cacheVersion } = store.state;
        const { _storyblok } = query;
        const editMode = _storyblok || isDev;
        const version = editMode ? 'draft' : 'published';
        const storyResponse = await $storyapi.get(
          `cdn/stories/${key.replace(/~/g, '/')}`,
          {
            version,
            cv: cacheVersion,
          },
        );
        const { story } = storyResponse.data;
        if (!story.is_startpage) {
          return { story };
        }
        const storiesResponse = await $storyapi.get(`cdn/stories`, {
          starts_with: story.full_slug,
          is_startpage: false,
          cv: cacheVersion,
        });
        const { stories } = storiesResponse.data;
        return { story, stories };
      },
      slug,
      'slug',
    );
    const story = computed(() => blok.value?.story);
    const stories = computed(() => blok.value?.stories);
    return { story, stories };
  },
});
</script>
