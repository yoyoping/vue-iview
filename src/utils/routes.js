const _import_ = file => () => import("../views/" + file + ".vue");
const routes = [
  {
    path: "/",
    name: "Layout",
    component: _import_("Layout"),
    redirect: "/",
    children: [
      {
        path: "/",
        name: "home",
        component: _import_("Home"),
        meta: {
          title: "首页"
        }
      },
      {
        path: "/userList",
        name: "userList",
        component: _import_("userList/Index"),
        meta: {
          title: "用户管理"
        }
      },
      {
        path: "/userDetail/:id",
        name: "userDetail",
        component: _import_("userList/Detail"),
        meta: {
          title: "用户详情",
          isChange: true
        }
      },
      {
        path: "/adviser",
        name: "adviser",
        component: _import_("adviser/Index"),
        meta: {
          title: "顾问管理"
        }
      },
      {
        path: "/adviserDetail/:id",
        name: "adviserDetail",
        component: _import_("adviser/Detail"),
        meta: {
          title: "顾问详情"
        }
      },
      {
        path: "/eva",
        name: "eva",
        component: _import_("eva/Index"),
        meta: {
          title: "评价管理"
        }
      },
      {
        path: "/errorCount",
        name: "errorCount",
        component: _import_("errorCount/Index"),
        meta: {
          title: "报错统计",
          role: "admin"
        }
      }
    ]
  },
  {
    path: "/system",
    name: "system",
    component: _import_("Layout"),
    redirect: "/system/account",
    meta: {
      title: "系统管理"
    },
    children: [
      {
        path: "auth",
        name: "auth",
        component: _import_("system/auth/Index"),
        meta: {
          title: "权限管理",
          role: "admin"
        }
      },
      {
        path: "account",
        name: "account",
        component: _import_("system/account/Index"),
        meta: {
          title: "账号管理",
          role: "admin"
        }
      },
      {
        path: "role",
        name: "role",
        component: _import_("system/role/Index"),
        meta: {
          title: "角色管理",
          role: "admin"
        }
      },
      {
        path: "menu",
        name: "menu",
        component: _import_("system/menu/Index"),
        meta: {
          title: "菜单管理",
          role: "admin"
        }
      },
      {
        path: "sensitive",
        name: "sensitive",
        component: _import_("system/sensitive/Index"),
        meta: {
          title: "敏感词汇",
          role: "admin"
        }
      },
      {
        path: "log",
        name: "log",
        component: _import_("system/log/Index"),
        meta: {
          title: "操作日志",
          role: "admin"
        }
      }
    ]
  },
  {
    path: "/component",
    name: "component",
    component: _import_("Layout"),
    redirect: "/component/editor",
    meta: {
      title: "组件管理"
    },
    children: [
      {
        path: "editor",
        name: "editor",
        component: _import_("component/editor/Index"),
        meta: {
          title: "富文本"
        }
      },
      {
        path: "upload",
        name: "upload",
        component: _import_("component/upload/Index"),
        meta: {
          title: "文件上传"
        }
      },
      {
        path: "drag",
        name: "drag",
        component: _import_("component/drag/Index"),
        meta: {
          title: "拖拽排序"
        }
      },
      {
        path: "cityLink",
        name: "cityLink",
        component: _import_("component/cityLink/Index"),
        meta: {
          title: "城市联动"
        }
      }
    ]
  }
]

export const errRoute = [
  {
    path: '/noPermissions',
    name: 'noPermissions',
    component: _import_('errorPage/403'),
    meta: {
      title: '没权限访问'
    }
  },
  {
    path: '*',
    name: 'NotFound',
    component: _import_('errorPage/404'),
    meta: {
      title: '页面没找到'
    }
  }
]

export default routes
