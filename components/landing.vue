<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-editable="blok" class="space-y-8 p-4" v-html="richText" />
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
    return { richText };
  },
});
</script>
