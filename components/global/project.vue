<template>
  <div class="p-4 border rounded space-y-2">
    <img v-if="logo" class="h-20 w-20 rounded" :src="logo" alt="Project logo" />
    <div
      v-else
      class="h-20 w-20 bg-fuchsia-50 rounded flex justify-center items-center"
    >
      <span class="text-3xl font-bold text-fuchsia-600">{{ abbr }}</span>
    </div>
    <h3 class="text-xl font-semibold">{{ blok.name }}</h3>
    <a href="github" class="text-fuchsia-600"> {{ github }}</a>
  </div>
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      default: undefined,
    },
  },
  computed: {
    logo() {
      return this.blok.logo.url;
    },
    github() {
      return this.blok.github_repo.url;
    },
    abbr() {
      return this.blok.name[0];
    },
  },
  mounted() {
    console.log(this.blok);
  },
};
</script>
