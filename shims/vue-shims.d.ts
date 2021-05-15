import Vue from 'vue';
declare module '*.vue' {
  export default Vue;
}

interface StoryBridge {
  on: (arg0: Array<string>, callback: (event: any) => void) => void;
}
interface StoryAPI {
  get: any;
}

declare module 'vue/types/vue' {
  interface Vue {
    $storyapi: StoryAPI;
  }
  interface Context {}
}
// declare module '@nuxt/vue-app' {
// interface Context {
// }
// interface NuxtAppOptions {
// }
// }

declare module '@nuxt/types' {
  interface Context {
    $storyapi: StoryAPI;
  }

  // interface NuxtAppOptions {
  // }
  // interface NuxtAppOptions {
  // }
  // interface Configuration {
  // }
}
declare module 'vuex' {
  interface Store<S> {
    $storyapi: StoryAPI;
  }
}
