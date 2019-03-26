const menuList = [
  {
    title: '系统管理',
    name: 'system',
    icon: 'icon-xitongguanli',
    auth: 'page-system',
    children: [
      {
        title: '账号管理',
        name: 'account',
        url: '/system/account',
        icon: 'icon-weibiaoti5',
        auth: 'page-account'
      },
      {
        title: '角色管理',
        name: 'role',
        url: '/system/role',
        icon: 'icon-jiaoseguanli',
        auth: 'page-role'
      },
      {
        title: '权限管理',
        name: 'auth',
        url: '/system/auth',
        icon: 'icon-erji-quanxianguanli',
        auth: 'page-auth'
      },
      {
        title: '菜单管理',
        name: 'menu',
        url: '/system/menu',
        icon: 'icon-caidan',
        auth: 'page-menu'
      },
      {
        title: '操作日志',
        name: 'log',
        url: '/system/log',
        icon: 'icon-caozuorizhi',
        auth: 'page-log'
      }
    ]
  },
  {
    title: '用户管理',
    name: 'userList',
    url: '/userList',
    icon: 'icon-yonghuguanli',
    auth: 'page-userList'
  },
  {
    title: '顾问管理',
    name: 'adviser',
    url: '/adviser',
    icon: 'icon-fuwuguwen',
    auth: 'page-adviser'
  },
  {
    title: '评价管理',
    name: 'eva',
    url: '/eva',
    icon: 'icon-pingjia',
    auth: 'page-eva'
  },
  {
    title: '报错统计',
    name: 'errorCount',
    url: '/errorCount',
    icon: 'icon-report',
    auth: 'page-errorCount'
  },
  {
    title: '组件管理',
    name: 'component',
    url: '/component',
    icon: 'icon-tianjiazujian',
    auth: 'page-component',
    children: [
      {
        title: '富文本',
        name: 'editor',
        url: '/component/editor',
        icon: 'icon-fuwenbenkuang',
        auth: 'page-editor'
      },
      {
        title: '文件上传',
        name: 'upload',
        url: '/component/upload',
        icon: 'icon-wenjianshangchuan',
        auth: 'page-upload'
      },
      {
        title: '拖拽排序',
        name: 'drag',
        url: '/component/drag',
        icon: 'icon-paixu-jiangxu',
        auth: 'page-drag'
      },
      {
        title: '城市联动',
        name: 'cityLink',
        url: '/component/cityLink',
        icon: 'icon-liandongcelve',
        auth: 'page-cityLink'
      }
    ]
  }
]

export default menuList
