import router from "../router";
import { Message, LoadingBar } from "iview";
import Cookies from "js-cookie";
let tags; // 本地标签
console.log(router);

// let registerRouteFresh = true

// 路由钩子函数
router.beforeEach((to, from, next) => {
  //检测本地路由
  // debugger
  // if (registerRouteFresh) {
  //   let localRoutes = sessionStorage.getItem('routes');
  //   if(localRoutes){
  //       router.addRoutes(JSON.parse(localRoutes));
  //       console.log(JSON.parse(localRoutes))
  //       registerRouteFresh = false
  //       console.log(router)
  //   }
  // }

  window.document.title = to.meta.title;
  // 拦截路由
  let roles;
  if (Cookies.get("loginStatus")) {
    roles = localStorage.roles.split("-");

    // 判断是否缓存
    // if (to.meta.keepAlive)
    if (roles.indexOf("admin") !== -1) {
      // 如果是管理员拥有所有权限
      LoadingBar.start();
      next();

      // 跳转的时候添加tag标签
      if (localStorage.tags) {
        tags = JSON.parse(localStorage.tags);
      } else {
        tags = [];
      }
      let tagsitem = {
        title: to.meta.title,
        url: to.path,
        name: to.name
      };
      let flagPush = true; // 是否能添加进入标签数组
      if (tags.length === 0) {
        tags.push(tagsitem);
      } else {
        tags.forEach(item => {
          // 循环当前打开的标签是否存在
          if (to.name === item.name) {
            flagPush = false;
            // 为了避免进入的详情id都是同一个
            if (to.meta.isChange) {
              item.url = to.path;
            }
          }
        });
        if (flagPush) {
          if (tagsitem.name !== "login") {
            if (tags.length >= 10) {
              tags.splice(1, 1);
            }
            tags.push(tagsitem);
          }
        }
      }
      router.app.$store.commit("TAGS", JSON.stringify(tags));
    } else if (to.meta.role && roles.indexOf(to.meta.role) === -1) {
      Message.warning("您没有权限访问该页面");
    } else {
      if (from.matched.length !== 0) {
        localStorage.isRefresh_ = "1";
      }
      LoadingBar.start();
      next();
    }
  } else {
    roles = [];
    if (to.path === "/login") {
      LoadingBar.start();
      next();
    } else {
      LoadingBar.start();
      next({ path: "/login" });
    }
  }
});

router.afterEach(() => {
  LoadingBar.finish();
});
