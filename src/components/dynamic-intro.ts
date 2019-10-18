import Vue from "vue";
import data from "@/assets/data";

export default Vue.extend({
  name: "DynamicIntro",
  props: ["bus"],
  data() {
    return {
      cursorActive: true,
      subtitleShown: false,
      index: 0,
      animatingIntro: false,
      displayedTitle: "",
      displayedSubtitle: "",
      content: data.content
    };
  },
  methods: {
    sleep(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    async emulateTyping() {
      let title = this.content[this.index].title.split("");
      this.cursorActive = false;
      for (let i = 0; i < title.length; i++) {
        this.displayedTitle += title[i];
        await this.sleep(50);
      }
      this.cursorActive = true;
      this.displayedSubtitle = this.content[this.index].subtitle;
      this.subtitleShown = true;
    },
    async initAnimation() {
      this.animatingIntro = true;
      await this.sleep(1500);
      await this.typeText();
      this.index++;
      while (this.index < this.content.length) {
        await this.sleep(6500);
        await this.untypeText();
        await this.sleep(1000);
        await this.typeText();
        this.index++;
      }
      this.animatingIntro = false;
    },
    async untypeText() {
      this.subtitleShown = false;
      this.cursorActive = false;
      while (this.displayedTitle.length > 0) {
        await this.sleep(50);
        this.displayedTitle = this.displayedTitle.slice(0, -1);
      }
      this.cursorActive = true;
    },
    async typeText() {
      this.cursorActive = false;
      let title = this.content[this.index].title.split("");
      for (let i = 0; i < title.length; i++) {
        this.displayedTitle += title[i];
        await this.sleep(50);
      }
      this.cursorActive = true;
      this.displayedSubtitle = this.content[this.index].subtitle;
      this.subtitleShown = true;
    },
    async moveToNext() {
      if (this.animatingIntro) return;
      if (this.index >= this.content.length - 1) this.index = 0;
      else this.index++;
      await this.untypeText();
      await this.sleep(250);
      await this.typeText();
    }
  },
  mounted: function() {
    this.initAnimation();
    this.bus.$on("next", this.moveToNext);
  }
});
