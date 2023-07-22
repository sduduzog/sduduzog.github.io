<template>
  <h2
    class="mt-2 mb-1 text-lg text-gray-700 font-semibold relative"
    :id="id">
        <span class="absolute right-full opacity-50 pr-0.5 sm:pr-1">##</span>
    <a
      v-if="id && generate"
      :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id?: string }>()
const heading = 2
// @ts-expect-error doesn't exist or something
const { anchorLinks } = useRuntimeConfig().public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
