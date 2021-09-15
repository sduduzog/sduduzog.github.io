<template>
  <div v-editable="blok" class="grid md:grid-cols-3 gap-2">
    <h3
      class="col-span-full text-3xl font-bold text-gray-400 dark:text-gray-500">
      {{ blok.title }}
    </h3>
    <div
      v-for="item in list"
      :key="item.uuid"
      class="rounded bg-gray-100 hover:bg-gray-50 dark:bg-gray-800 p-4">
      <nuxt-link
        :to="`${slug}/${item.slug}`"
        class="line-clamp-3 hover:underline">
        {{ item.name }}
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  ref,
  useContext,
  useFetch,
} from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    blok: {
      type: Object,
      default: undefined,
    },
  },
  setup(props) {
    const { $storyapi, store } = useContext();
    const { cacheVersion } = store.state;
    const { root } = props.blok;
    const { url, cached_url: cachedUrl } = root;
    const slug = cachedUrl || url;
    const list = ref();

    useFetch(async () => {
      const response = await $storyapi.get(`cdn/stories`, {
        starts_with: slug,
        is_startpage: false,
        cv: cacheVersion,
      });
      const { stories } = response.data;
      list.value = stories;
    });
    return { slug, list };
  },
});
</script>
