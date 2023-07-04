<template>
  <content-list
    path="/blog"
    :query="{ where: [{ _dir: 'blog' }] }"
    v-slot="{ list }">
    <div
      class="pb-2"
      v-for="blog in list"
      :key="blog._path">
      <h2 class="text-lg !m-0 font-bold text-gray-600 hover:text-gray-900">
        <nuxt-link :to="blog._path">{{ blog.title }}</nuxt-link>
      </h2>
      <content-renderer
        v-if="blog.excerpt"
        :value="blog"
        excerpt />
    </div>
  </content-list>
</template>
<script lang="ts" setup></script>
