// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from "vue";
import Vuex from "vuex";
import store from "./store";
import App from "./App";
import router from "./router";
import fetch from "./fetch/fly";
import iView from "iview";
import "iview/dist/styles/iview.css";
import "./utils/guard";
import Plugin from "./plugin";
import lodash from "lodash";

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(iView, {
  transfer: true,
  size: "default"
});
Vue.use(Plugin);

// 创建全局请求
Vue.prototype.$fetch = fetch;

// 创建全局lodash
Vue.prototype._ = lodash;

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
