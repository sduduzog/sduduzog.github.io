<template>
  <div v-editable="blok" class="space-y-4">
    <!-- eslint-disable vue/no-template-shadow -->
    <component
      :is="blok.component"
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
    <div v-if="stories">
      <component
        :is="`${slug}-item`"
        v-for="story in stories"
        :key="story.uuid"
        :blok="story"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blok: { type: Object, default: undefined },
    slug: { type: String, default: undefined },
    stories: {
      type: Array,
      default: undefined,
    },
  },
};
</script>
