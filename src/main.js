// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue/dist/vue.esm";
import App from './App'
import router from './router'
import VueMqtt from 'vue-mqtt';
// import BootstrapVue from "bootstrap-vue";
import 'bootstrap';

// Vue.use(VueMqtt, 'ws://iot.eclipse.org/ws', options);
Vue.use(VueMqtt, '188.27.135.116:1883')
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// new vue
/* eslint-disable no-new */
// document.addEventListener("DOMContentLoaded", () => {
//   new Vue({
//     i18n: i18n,
//     router: router,
//     store: store,
//     el: "#app",
//     template: "<App/>",
//     components: { App }
//   });
// });
