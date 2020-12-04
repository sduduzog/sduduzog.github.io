<template>
  <div class="flex flex-wrap w-full overflow-auto max-h-screen">
    <div class="flex-grow md:flex-grow-0 w-full max-w-sm mx-auto md:pt-20">
      <img
        class="h-32 m-auto mt-12 rounded-lg shadow-lg md:mt-12"
        src="~/assets/img/sdu.jpg"
        alt="My face"
      />
      <h1 class="p-4 mt-6 text-lg font-semibold text-center text-gray-700">
        Beautus S. Gumede
      </h1>
      <nav class="p-3 flex justify-evenly">
        <nuxt-link to="/">Me</nuxt-link>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </nav>
    </div>
    <div class="p-2 lg:p-12 lg:max-h-screen flex-grow lg:overflow-auto">
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
