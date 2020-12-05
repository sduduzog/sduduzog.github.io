export const state = () => ({
  cacheVersion: '',
  listing: {},
});

export const mutations = {
  setCacheVersion(_state, version) {
    _state.cacheVersion = version;
  },
  setListing(_state, payload) {
    _state.listing[payload.key] = payload.value;
  },
};

export const actions = {
  async loadCacheVersion({ commit }) {
    const response = await this.$storyapi.get('cdn/spaces/me');
    return commit('setCacheVersion', response.data.space.version);
  },
};
