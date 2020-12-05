export default function prepareStories({ store: { state, dispatch } }) {
  if (!state.cacheVersion) {
    dispatch('loadCacheVersion');
  }
}
