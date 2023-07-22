<template>
  <h3
    class="relative text-lg font-bold text-gray-500 my-1"
    :id="id">
        <span class="absolute right-full opacity-50 pr-0.5 sm:pr-1">###</span>
    <a
      v-if="id && generate"
      :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id?: string }>()
const heading = 3
// @ts-expect-error doesn't exist or something
const { anchorLinks } = useRuntimeConfig().public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
