import Vue from 'vue';
import section from '@/pages/components/section.vue';
import platform from '@/pages/components/platform.vue';
import App from './App.vue';

Vue.component('uv-section', section);
Vue.component('uv-platform', platform);
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.mixin({
  onPullDownRefresh() {
    this.timer = setTimeout(uni.stopPullDownRefresh, 888);
  },
  onUnLoad() {
    this.timer && clearTimeout(this.timer);
  },
});
const app = new Vue({
  ...App,
});
app.$mount();
