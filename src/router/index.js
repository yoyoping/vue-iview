import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import_ = file => () => import('../views/' + file + '.vue')

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: _import_('login/Index'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '',
      name: '',
      component: _import_('Layout'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'home',
          component: _import_('Home'),
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/system',
      name: 'system',
      component: _import_('Layout'),
      redirect: '/system/auth',
      meta: {
        title: '系统管理'
      },
      children: [
        {
          path: 'auth',
          name: 'auth',
          component: _import_('system/auth/Index'),
          meta: {
            title: '权限管理',
            role: 'admin'
          }
        },
        {
          path: 'account',
          name: 'account',
          component: _import_('system/account/Index'),
          meta: {
            title: '账号管理',
            role: 'admin'
          }
        },
        {
          path: 'role',
          name: 'role',
          component: _import_('system/role/Index'),
          meta: {
            title: '角色管理',
            role: 'admin'
          }
        },
        {
          path: 'menu',
          name: 'menu',
          component: _import_('system/menu/Index'),
          meta: {
            title: '菜单管理',
            role: 'admin'
          }
        },
        {
          path: 'sensitive',
          name: 'sensitive',
          component: _import_('system/sensitive/Index'),
          meta: {
            title: '敏感词汇',
            role: 'admin'
          }
        }
      ]
    },
    {
      path: 'userList',
      name: '',
      component: _import_('Layout'),
      redirect: '/userList',
      children: [
        {
          path: '/userList',
          name: 'userList',
          component: _import_('userList/Index'),
          meta: {
            title: '用户管理'
          }
        }
      ]
    },
    {
      path: 'adviser',
      name: '',
      component: _import_('Layout'),
      redirect: '/adviser',
      children: [
        {
          path: '/adviser',
          name: 'adviser',
          component: _import_('adviser/Index'),
          meta: {
            title: '顾问管理'
          }
        }
      ]
    },
    {
      path: 'eva',
      name: '',
      component: _import_('Layout'),
      redirect: '/eva',
      children: [
        {
          path: '/eva',
          name: 'eva',
          component: _import_('eva/Index'),
          meta: {
            title: '评价管理'
          }
        }
      ]
    },
    {
      path: 'complaints',
      name: '',
      component: _import_('Layout'),
      redirect: '/complaints',
      children: [
        {
          path: '/complaints',
          name: 'complaints',
          component: _import_('complaints/Index'),
          meta: {
            title: '投诉管理',
            role: 'admin'
          }
        }
      ]
    },
    {
      path: 'errorCount',
      name: '',
      component: _import_('Layout'),
      redirect: '/errorCount',
      children: [
        {
          path: '/errorCount',
          name: 'errorCount',
          component: _import_('errorCount/Index'),
          meta: {
            title: '报错统计',
            role: 'admin'
          }
        }
      ]
    },
    {
      path: 'log',
      name: '',
      component: _import_('Layout'),
      redirect: '/log',
      children: [
        {
          path: '/log',
          name: 'log',
          component: _import_('log/Index'),
          meta: {
            title: '操作日志',
            role: 'admin'
          }
        }
      ]
    },
    {
      path: '/component',
      name: 'component',
      component: _import_('Layout'),
      redirect: '/component/editor',
      meta: {
        title: '组件管理'
      },
      children: [
        {
          path: 'editor',
          name: 'editor',
          component: _import_('component/editor/Index'),
          meta: {
            title: '富文本'
          }
        },
        {
          path: 'upload',
          name: 'upload',
          component: _import_('component/upload/Index'),
          meta: {
            title: '文件上传'
          }
        }
      ]
    }
  ]
})
