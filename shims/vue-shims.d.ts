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
    $storybridge: StoryBridge;
    $storyapi: StoryAPI;
  }
  interface Context {
    $storybridge: StoryBridge;
  }
}
// declare module '@nuxt/vue-app' {
//   interface Context {
//     $storybridge: {};
//   }

//   interface NuxtAppOptions {
//     $storybridge: {};
//   }
// }

// declare module '@nuxt/types' {
//   interface Context {
//     $storybridge: {};
//   }

//   interface NuxtAppOptions {
//     $storybridge: {};
//   }
// }
