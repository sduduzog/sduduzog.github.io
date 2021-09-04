import Vue from 'vue';
declare module '*.vue' {
  export default Vue;
}

type StoryblokEventAction = 'input' | 'published' | 'change';
interface StoryblokEvent {
  action: StoryblokEventAction;
  story: any;
}
interface StoryblokInstance {
  on: (
    actions: Array<StoryblokEventAction>,
    callback: (event: StoryblokEvent) => void,
  ) => void;
}

interface RichTextResolver {
  render: (body: any) => any;
}
interface StoryAPI {
  get: any;
  richTextResolver: RichTextResolver;
}

declare module 'vue/types/vue' {
  interface Vue {
    $storyapi: StoryAPI;
  }
  interface Context {}
}

declare module '@nuxt/types' {
  interface Context {
    $storyapi: StoryAPI;
    $storybridge: (cb: Function) => void;
  }
}
declare module 'vuex' {
  interface Store<S> {
    $storyapi: StoryAPI;
  }
}

type StoryblokBridgeConstructor = new () => StoryblokInstance;

declare global {
  interface Window {
    StoryblokBridge: StoryblokBridgeConstructor;
  }
}
