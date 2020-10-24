export default function setCacheVersion({ store }) {
  if (!store.state.cacheVersion) {
    store.dispatch('loadCacheVersion');
  }
}
