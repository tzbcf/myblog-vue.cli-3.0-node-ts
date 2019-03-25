import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import libBase from './libs/base';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// interface Tinymce {
//   baseURL: any;
//   suffix: any;
//   init: any;
// }
// declare global {
//   interface Window {
//     tinymce: Tinymce;
//   }
// }
Vue.config.productionTip = false;
Vue.prototype.libBase = libBase;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
