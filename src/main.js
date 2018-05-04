// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(vuex);
Vue.use(ElementUI);
var store = new vuex.Store({
  state:{
    step:0,
    user:'user',
    time:''
  }
});
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>'
})
window.vm = vm
