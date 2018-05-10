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
            role: 'user'
          }
        },
        {
          path: 'account',
          name: 'account',
          component: _import_('system/account/Index'),
          meta: {
            title: '账号管理',
            role: 'user'
          }
        },
        {
          path: 'role',
          name: 'role',
          component: _import_('system/role/Index'),
          meta: {
            title: '角色管理',
            role: 'user'
          }
        },
        {
          path: 'menu',
          name: 'menu',
          component: _import_('system/menu/Index'),
          meta: {
            title: '菜单管理',
            role: 'user'
          }
        },
        {
          path: 'log',
          name: 'log',
          component: _import_('system/log/Index'),
          meta: {
            title: '操作日志',
            role: 'user'
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
            title: '顾问列表'
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
            title: '评价列表'
          }
        }
      ]
    }
  ]
})
