<template>
  <div class="p-4 overflow-hidden border rounded space-y-2">
    <img v-if="logo" class="h-20 w-20 rounded" :src="logo" alt="Project logo" />
    <div
      v-else
      class="h-20 w-20 bg-fuchsia-50 rounded flex justify-center items-center"
    >
      <span class="text-3xl font-bold text-fuchsia-600">{{ abbr }}</span>
    </div>
    <h3 class="text-xl font-semibold">{{ blok.name }}</h3>
    <a
      :href="github"
      class="truncate overflow-hidden max-w-full text-fuchsia-600"
    >
      {{ github }}</a
    >
    <div class="flex flex-wrap">
      <span
        v-for="language in languages"
        :key="language"
        class="p-2 text-xs text-gray-400"
        >{{ language }}</span
      >
    </div>
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
  async fetch() {
    const { url } = this.blok.github_repo;
    const [username, repo] = url.split('/').splice(-2);
    const api = `https://api.github.com/repos/${username}/${repo}/languages`;
    const response = await this.$http.get(api);
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    const languages = Object.keys(data);
    this.languages = languages;
  },
  data() {
    return {
      languages: [],
    };
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
};
</script>
