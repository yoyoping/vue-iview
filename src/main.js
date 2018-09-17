// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import App from './App'
import router from './router'
import axios from './utils/axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './utils/guard'
import MyPlugin from '@utils/plugin'
import lodash from 'lodash'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(iView)
Vue.use(MyPlugin)

// 创建全局请求
Vue.prototype.axios = axios

// 创建全局lodash
Vue.prototype._ = lodash

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
