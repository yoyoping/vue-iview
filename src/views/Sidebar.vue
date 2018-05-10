<template>
  <Menu :active-name="$route.name" theme="dark" width="auto" :class="menuitemClasses">
    <Submenu name="system">
      <template slot="title">
        <i class="iconfont icon-xitongguanli"></i>
        系统管理
      </template>
      <router-link to="/system/auth">
        <MenuItem name="auth">
        <i class="iconfont icon-erji-quanxianguanli"></i>权限管理</MenuItem>
      </router-link>
      <router-link to="/system/account">
        <MenuItem name="account">
        <i class="iconfont icon-weibiaoti5"></i>账户管理</MenuItem>
      </router-link>
      <router-link to="/system/role">
        <MenuItem name="role">
        <i class="iconfont icon-jiaoseguanli"></i>角色管理</MenuItem>
      </router-link>
      <router-link to="/system/menu">
        <MenuItem name="menu">
        <i class="iconfont icon-caidan"></i>菜单管理</MenuItem>
      </router-link>
      <router-link to="/system/log">
        <MenuItem name="log">
        <i class="iconfont icon-caozuorizhi"></i>操作日志</MenuItem>
      </router-link>
    </Submenu>
    <router-link to="/userList">
      <MenuItem name="userList">
      <i class="iconfont icon-yonghuguanli"></i>
      <span>用户管理</span>
      </MenuItem>
    </router-link>
    <router-link to="/adviser">
      <MenuItem name="adviser">
      <i class="iconfont icon-fuwuguwen"></i>
      <span>顾问列表</span>
      </MenuItem>
    </router-link>
    <router-link to="/eva">
      <MenuItem name="eva">
      <i class="iconfont icon-pingjia"></i>
      <span>评价列表</span>
      </MenuItem>
    </router-link>
  </Menu>
</template>

<script>
import { Menu, Submenu, MenuItem, Icon } from 'iview'
export default {
  components: {
    Menu, Submenu, MenuItem, Icon
  },
  data () {
    return {
      isCollapsed: false
    }
  },
  methods: {
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .iconfont{
    font-size: 13px;
  }
</style>
