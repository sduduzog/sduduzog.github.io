import { MutationTree, ActionTree } from 'vuex';
type RootState = {
  cacheVersion: string;
  listing: any;
  story?: any;
  stories?: any;
};
export const state = (): RootState => ({
  cacheVersion: '',
  listing: {},
});

export const mutations: MutationTree<RootState> = {
  setCacheVersion(_state, version) {
    _state.cacheVersion = version;
  },
  setListing(_state, payload) {
    _state.listing[payload.key] = payload.value;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async loadCacheVersion({ commit }) {
    const response = await this.$storyapi.get('cdn/spaces/me');
    return commit('setCacheVersion', response.data.space.version);
  },
  async loadStory() {},
  async loadStories() {},
};
