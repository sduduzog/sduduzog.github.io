<template>
  <v-runtime-template
    v-editable="blok"
    class="content p-4 space-y-8"
    :template="runtimeTemplate" />
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api';
import VRuntimeTemplate from 'v-runtime-template';

export default defineComponent({
  components: { VRuntimeTemplate },
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
    return { runtimeTemplate };
  },
});
</script>
