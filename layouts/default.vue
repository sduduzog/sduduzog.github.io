<template>
  <div
    class="md:max-h-screen md:overflow-hidden grid md:grid-cols-layout md:grid-rows-layout"
  >
    <div class="md:pt-20">
      <img
        class="h-32 m-auto mt-12 rounded-lg shadow-lg md:mt-12"
        src="~/assets/img/sdu.jpg"
        alt="My face"
      />
      <h1 class="p-4 mt-6 text-lg font-semibold text-center text-gray-700">
        Beautus S. Gumede
      </h1>
    </div>
    <nav class="p-3 row-start-2 flex justify-evenly">
      <nuxt-link to="/">Me</nuxt-link>
      <!-- <nuxt-link to="/blog">Blog</nuxt-link> -->
      <!-- <nuxt-link to="/projects">Projects</nuxt-link> -->
      <!-- <nuxt-link to="/articles">Articles</nuxt-link> -->
    </nav>
    <div class="p-2 lg:p-12 overflow-y-auto row-span-2">
      <nuxt />
    </div>
  </div>
</template>
<style lang="scss">
.nuxt-link-exact-active {
  @apply underline;
  @apply font-bold;
}
</style>
