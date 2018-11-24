import Vue from "vue/dist/vue.esm";
import App from './App'
import router from './router'
import 'bootstrap';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
