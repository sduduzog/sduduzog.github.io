<template>
  <main class="min-h-screen px-4 py-8 sm:px-8 sm:py-12">
    <article class="mx-auto max-w-3xl">
      <nuxt-page />
    </article>
  </main>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "canonical",
      href: "https://sduu.dev/",
    },
  ],
  meta: [
    {
      name: "theme-color",
      content: "#FAF7F0",
    },
  ],
});
</script>

<style>
:root {
  font-family: "Space Mono";
  color: #27201f;
  background-color: #faf7f0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

::selection {
  color: #faf7f0;
  background-color: #3b3030;
}
</style>
