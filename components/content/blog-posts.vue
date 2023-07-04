<template>
  <dev-only>
    <content-list
      path="/blog"
      :query="{ where: [{ _dir: 'blog' }] }"
      v-slot="{ list }">
      <div v-for="blog in list">{{ blog }}</div>
    </content-list>
  </dev-only>
  <content-list
    path="/blog"
    :query="{ where: [{ _dir: 'blog' }] }"
    v-slot="{ list }">
    <div v-for="blog in list" :key="blog._path">
      <h2 class="text-lg font-semibold">
        <nuxt-link :to="blog._path">{{ blog.title }}</nuxt-link>
      </h2>
    </div>
  </content-list>
</template>
<script lang="ts" setup></script>
