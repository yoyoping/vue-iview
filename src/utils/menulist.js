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
        url: "/system/account",
        icon: "md-person",
        auth: "page-account"
      },
      {
        title: "角色管理",
        name: "role",
        url: "/system/role",
        icon: "ios-people",
        auth: "page-role"
      },
      {
        title: "权限管理",
        name: "auth",
        url: "/system/auth",
        icon: "ios-contrast",
        auth: "page-auth"
      },
      {
        title: "菜单管理",
        name: "menu",
        url: "/system/menu",
        icon: "md-grid",
        auth: "page-menu"
      },
      {
        title: "操作日志",
        name: "log",
        url: "/system/log",
        icon: "ios-pulse",
        auth: "page-log"
      }
    ]
  },
  {
    title: "用户管理",
    name: "userList",
    url: "/userList",
    icon: "md-people",
    auth: "page-userList"
  },
  {
    title: "顾问管理",
    name: "adviser",
    url: "/adviser",
    icon: "md-contact",
    auth: "page-adviser"
  },
  {
    title: "评价管理",
    name: "eva",
    url: "/eva",
    icon: "md-chatboxes",
    auth: "page-eva"
  },
  {
    title: "报错统计",
    name: "errorCount",
    url: "/errorCount",
    icon: "ios-flash",
    auth: "page-errorCount"
  },
  {
    title: "组件管理",
    name: "component",
    url: "/component",
    icon: "ios-keypad",
    auth: "page-component",
    children: [
      {
        title: "富文本",
        name: "editor",
        url: "/component/editor",
        icon: "ios-create",
        auth: "page-editor"
      },
      {
        title: "文件上传",
        name: "upload",
        url: "/component/upload",
        icon: "md-cloud-upload",
        auth: "page-upload"
      },
      {
        title: "拖拽排序",
        name: "drag",
        url: "/component/drag",
        icon: "ios-infinite",
        auth: "page-drag"
      },
      {
        title: "城市联动",
        name: "cityLink",
        url: "/component/cityLink",
        icon: "ios-shuffle",
        auth: "page-cityLink"
      }
    ]
  }
];

export default menuList;
