<template>
  <div>Cheese</div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useStatic,
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const slug = ref('global');
    const { $storyapi, route, store, isDev } = useContext();
    const { query } = route.value;
    const story = useStatic(
      async (slug) => {
        const { cacheVersion } = store.state;
        const { _storyblok } = query;

        let editMode = false;

        if (
          _storyblok ||
          isDev ||
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
        const storyResponse = await $storyapi.get(`cdn/stories/${slug}`, {
          version,
          cv: cacheVersion,
        });

        const { story } = storyResponse.data;
        return story;
      },
      slug,
      'options',
    );
    return { story };
  },
});
</script>
<style lang="scss">
.nuxt-link-exact-active {
  @apply underline;
  @apply font-bold;
}
</style>
