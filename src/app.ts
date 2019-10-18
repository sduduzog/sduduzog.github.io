import Vue from "vue";
import AppHeader from "./components/AppHeader.vue";
import DynamicIntro from "./components/DynamicIntro.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      bus: new Vue()
    };
  },
  components: { AppHeader, DynamicIntro },
  methods: {
    triggerNext() {
      this.bus.$emit("next");
    }
  },
  mounted() {
    window.addEventListener("keyup", event => {
      this.triggerNext();
    });
  }
});
