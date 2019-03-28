import Vue from "vue";
import Router from "vue-router";
import newRoutes, { errRoute } from '@utils/routes'
import Cookies from "js-cookie";
import _ from "lodash";

Vue.use(Router);

const _import_ = file => () => import("../views/" + file + ".vue");

let menu = sessionStorage.getItem('menu');
if(menu){
  menu = JSON.parse(menu)
} else {
  menu = []
}

const originRoutes = [
  {
    path: "/login",
    name: "login",
    component: _import_("login/Index"),
    meta: {
      title: "登录"
    }
  }
]

// 循环所有路由列表判断不在获取的菜单列表里面就删除
let routes;
if (Cookies.get("loginStatus")) {
  _.remove(newRoutes, n => {
    if (n.children && n.children.length > 0) {
      _.remove(n.children, m => {
        return !menu.includes(m.name)
      })
    }
    return !menu.includes(n.name)
  })
  routes = originRoutes.concat(newRoutes).concat(errRoute)
} else {
  routes = originRoutes
}

console.log('------------',routes)
export default new Router({routes})