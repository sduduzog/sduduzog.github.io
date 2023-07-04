<template>
  <div class="max-w-2xl mx-auto px-4 font-mono">
    <nav class="py-8">
      <content-navigation v-slot="{ navigation }">
        <ul class="flex space-x-4">
          <li v-for="link of navigation" :key="link._path">
            <nuxt-link :to="link._path">{{ link.title }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="https://zatechradio.co.za">Podcast</nuxt-link>
          </li>
        </ul>
      </content-navigation>
    </nav>
    <slot />
    <ul class="py-4">
      <li class="space-x-1">
        <icon name="lucide:twitter" size="0.8rem" />
        <nuxt-link to="https://twitter.com/sduduxo_g" class="inline-block">
          @sduduzo_g
        </nuxt-link>
      </li>
      <li class="space-x-1">
        <icon name="lucide:github" size="0.8rem" />
        <nuxt-link to="https://github.com/sduduzog" class="inline-block">
          @sduduzog
        </nuxt-link>
      </li>
      <li class="space-x-1">
        <icon name="lucide:linkedin" size="0.8rem" />
        <nuxt-link
          to="https://www.linkedin.com/in/sduduzog"
          class="inline-block">
          in/sduduzog
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
h1 {
  @apply text-4xl font-medium text-gray-800;
}

h2 {
  @apply text-3xl font-medium text-gray-500;
}

p {
  @apply text-sm py-2;
}

li > a,
p > a {
  @apply text-sm underline text-gray-500 hover:text-gray-800;
  &.router-link-active {
    color: theme('colors.gray.900');
  }
}
</style>
