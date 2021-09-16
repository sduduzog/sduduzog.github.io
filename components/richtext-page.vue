<template>
  <div class="p-4 space-y-4">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="space-y-8" v-html="richText"></div>
    <nuxt-dynamic
      v-for="extra in blok.extras"
      :key="extra._uid"
      hydration="Never"
      :component="extra.component"
      :blok="extra" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    blok: {
      type: Object,
      default: undefined,
    },
  },
  setup(props) {
    const { $storyapi } = useContext();
    const richText = computed(() =>
      props.blok.body ? $storyapi.richTextResolver.render(props.blok.body) : '',
    );
    const runtimeTemplate = computed(() => `<div>${richText.value}</div>`);
    return { runtimeTemplate, richText };
  },
});
</script>
