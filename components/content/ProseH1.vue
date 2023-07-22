<template>
  <h1
    class="my-4 text-2xl text-gray-800 font-bold relative"
    :id="id">
        <span class="absolute right-full opacity-50 pr-0.5 sm:pr-1">#</span>
    <a
      v-if="id && generate"
      :href="`#${id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#imports'
defineProps<{ id?: string }>()
const heading = 1
// @ts-expect-error doesn't exist or something
const { anchorLinks } = useRuntimeConfig().public.content
const generate =
  anchorLinks?.depth >= heading && !anchorLinks?.exclude.includes(heading)
</script>
