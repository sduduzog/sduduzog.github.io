<template>
  <div>
    <nav>
      <content-navigation v-slot="{ navigation }">
        <div v-for="link of navigation" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </div>
      </content-navigation>
    </nav>
    <main class="max-w-screen-md">
      <content-doc />
    </main>
  </div>
</template>
