export const state = () => ({
  cacheVersion: '',
});

export const mutations = {
  setCacheVersion(_state, version) {
    _state.cacheVersion = version;
  },
};

export const actions = {
  loadCacheVersion({ commit }) {
    return this.$storyapi.get('cdn/spaces/me').then((res) => {
      commit('setCacheVersion', res.data.space.version);
    });
  },
};
