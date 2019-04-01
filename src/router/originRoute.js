import Router from "vue-router";
const _import_ = file => () => import("../views/" + file + ".vue");
const routes = [
  {
    path: "/login",
    name: "login",
    component: _import_("login/Index"),
    meta: {
      title: "登录"
    }
  }
];
const createRouter = () => new Router({
  routes
});
export default createRouter
