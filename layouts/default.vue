<template>
  <div class="flex flex-wrap lg:flex-no-wrap w-full overflow-auto max-h-screen">
    <div class="flex-grow md:flex-grow-0 w-full max-w-sm mx-auto md:pt-20">
      <img
        class="h-32 m-auto mt-12 rounded-lg shadow-lg md:mt-12"
        src="~/assets/img/sdu.jpg"
        alt="My face"
      />
      <h1 class="p-4 mt-6 text-lg font-semibold text-center text-gray-700">
        Beautus S. Gumede
      </h1>
      <nav class="p-3 flex justify-evenly">
        <component
          :is="item.component"
          v-for="item in story.content.nav_bar"
          :key="item._uid"
          :blok="item"
        />
      </nav>
    </div>
    <!-- prettier-ignore -->
    <div
      class="p-2 lg:px-0 lg:py-12 xl:max-h-screen flex-grow lg:overflowss-auto overflow-x-hidden"
    >
      <nuxt />
    </div>
  </div>
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
