<template>
  <div class="mx-auto max-w-screen-lg space-y-12 p-4">
    <nav class="flex space-x-4 font-medium">
      <content-navigation v-slot="{ navigation }">
        <nuxt-link
          :to="link._path"
          v-for="link of navigation"
          :key="link._path">
          {{ link.title }}
        </nuxt-link>
      </content-navigation>
    </nav>
    <main class="max-w-screen-md">
      <content-doc />
    </main>
  </div>
</template>
