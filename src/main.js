// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口js
import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant';

import 'vant/lib/index.css';

Vue.use(Vant);

import router from './router/index.js'
import store from '../src/store/store.js' // 引入store

import $apis from "./api/api.js";


Vue.prototype.$apis = $apis;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
