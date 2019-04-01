const menuList = [
  {
    title: "系统管理",
    name: "system",
    icon: "md-settings",
    auth: "page-system",
    children: [
      {
        title: "账号管理",
        name: "account",
        path: "/system/account",
        icon: "md-person",
        auth: "page-account"
      },
      {
        title: "角色管理",
        name: "role",
        path: "/system/role",
        icon: "ios-people",
        auth: "page-role"
      },
      {
        title: "权限管理",
        name: "auth",
        path: "/system/auth",
        icon: "ios-contrast",
        auth: "page-auth"
      },
      {
        title: "菜单管理",
        name: "menu",
        path: "/system/menu",
        icon: "md-grid",
        auth: "page-menu"
      },
      {
        title: "操作日志",
        name: "log",
        path: "/system/log",
        icon: "ios-pulse",
        auth: "page-log"
      }
    ]
  },
  {
    title: "用户管理",
    name: "userList",
    path: "/userList",
    icon: "md-people",
    auth: "page-userList"
  },
  {
    title: "顾问管理",
    name: "adviser",
    path: "/adviser",
    icon: "md-contact",
    auth: "page-adviser"
  },
  {
    title: "评价管理",
    name: "eva",
    path: "/eva",
    icon: "md-chatboxes",
    auth: "page-eva"
  },
  {
    title: "报错统计",
    name: "errorCount",
    path: "/errorCount",
    icon: "ios-flash",
    auth: "page-errorCount"
  },
  {
    title: "组件管理",
    name: "component",
    path: "/component",
    icon: "ios-keypad",
    auth: "page-component",
    children: [
      {
        title: "富文本",
        name: "editor",
        path: "/component/editor",
        icon: "ios-create",
        auth: "page-editor"
      },
      {
        title: "文件上传",
        name: "upload",
        path: "/component/upload",
        icon: "md-cloud-upload",
        auth: "page-upload"
      },
      {
        title: "拖拽排序",
        name: "drag",
        path: "/component/drag",
        icon: "ios-infinite",
        auth: "page-drag"
      },
      {
        title: "城市联动",
        name: "cityLink",
        path: "/component/cityLink",
        icon: "ios-shuffle",
        auth: "page-cityLink"
      }
    ]
  }
];

export default menuList;
