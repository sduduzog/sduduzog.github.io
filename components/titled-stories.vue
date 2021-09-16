<template>
  <div v-editable="blok" class="grid md:grid-cols-3 gap-2">
    <h3
      v-if="blok.title"
      class="
        mb-4
        col-span-full
        text-3xl
        font-black
        text-gray-400
        dark:text-gray-500
      ">
      {{ blok.title }}
    </h3>
    <div
      v-for="item in list"
      :key="item.uuid"
      class="
        rounded
        bg-gray-50
        hover:bg-gray-100
        dark:bg-gray-800
        dark:bg-opacity-50
        dark:hover:bg-gray-800
        dark:hover:bg-opacity-100
        p-4
        space-y-4
      ">
      <nuxt-link
        :to="`/${slug}${item.slug}`"
        class="line-clamp-3 hover:underline font-semibold">
        {{ item.name }}
      </nuxt-link>
      <span class="text-sm font-medium text-gray-400 dark:text-gray-500">
        Published {{ formatDate(item) }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, useAsync, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    blok: {
      type: Object,
      default: undefined,
    },
  },
  setup(props) {
    const { $storyapi, $dateFns, isDev } = useContext();
    const { root } = props.blok;
    const { url, cached_url: cachedUrl } = root;
    const slug = cachedUrl || url;

    const list = useAsync(async () => {
      const spaceResponse = await $storyapi.get('cdn/spaces/me');
      const { version: cacheVersion } = spaceResponse.data.space;
      const response = await $storyapi.get(`cdn/stories`, {
        starts_with: slug,
        is_startpage: false,
        cv: cacheVersion,
      });
      const { stories } = response.data;
      return stories;
    }, `stories-${slug}`);
    function formatDate(blok: any) {
      if (!blok) {
        return '';
      }
      const date =
        blok.first_published_at || blok.published_at || blok.created_at;
      try {
        const parsedDate = $dateFns.parseISO(date);
        const formattedDate = $dateFns.format(parsedDate, 'd MMM yyyy');
        return formattedDate;
      } catch (e) {
        if (isDev) {
          // eslint-disable-next-line no-console
          console.error(e);
        }
      }
      return '';
    }
    return { slug, list, formatDate };
  },
});
</script>
