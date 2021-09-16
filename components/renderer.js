import Vue from 'vue';

export default Vue.component('Renderer', {
  functional: true,
  render(h, context) {
    if (!context.props.template) return h();
    return h(Vue.compile(context.props.template));
  },
});
