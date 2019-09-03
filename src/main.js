// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口js
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from '../src/store/store.js'// 引入store

import './mock/mockServer.js'// 引入mock数据

import './vantPulugin/vantImport.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
