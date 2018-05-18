<template>
<div>
  <Menu :active-name="$route.name" theme="dark" width="auto" :class="menuitemClasses" v-if="!shrink" :open-names="[$route.matched[0].name]">
    <Submenu name="system">
      <template slot="title">
        <i class="iconfont icon-xitongguanli"></i>
        系统管理
      </template>
      <router-link to="/system/account">
        <MenuItem name="account">
        <i class="iconfont icon-weibiaoti5"></i>账户管理</MenuItem>
      </router-link>
      <router-link to="/system/role">
        <MenuItem name="role">
        <i class="iconfont icon-jiaoseguanli"></i>角色管理</MenuItem>
      </router-link>
      <router-link to="/system/auth">
        <MenuItem name="auth">
        <i class="iconfont icon-erji-quanxianguanli"></i>权限管理</MenuItem>
      </router-link>
      <router-link to="/system/menu">
        <MenuItem name="menu">
        <i class="iconfont icon-caidan"></i>菜单管理</MenuItem>
      </router-link>
      <!-- <router-link to="/system/sensitive">
        <MenuItem name="sensitive">
        <i class="iconfont icon-caidan"></i>敏感词汇</MenuItem>
      </router-link> -->
      <router-link to="/system/log">
        <MenuItem name="sensitive">
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
      <span>顾问管理</span>
      </MenuItem>
    </router-link>
    <router-link to="/eva">
      <MenuItem name="eva">
      <i class="iconfont icon-pingjia"></i>
      <span>评价管理</span>
      </MenuItem>
    </router-link>
    <!-- <router-link to="/complaints">
      <MenuItem name="complaints">
      <i class="iconfont icon-pingjia"></i>
      <span>投诉管理</span>
      </MenuItem>
    </router-link> -->
    <router-link to="/errorCount">
      <MenuItem name="errorCount">
      <i class="iconfont icon-report"></i>
      <span>报错统计</span>
      </MenuItem>
    </router-link>
    <Submenu name="component">
      <template slot="title">
        <i class="iconfont icon-tianjiazujian"></i>
        组件管理
      </template>
      <router-link to="/component/editor">
        <MenuItem name="editor">
        <i class="iconfont icon-fuwenbenkuang"></i>富文本</MenuItem>
      </router-link>
      <router-link to="/component/upload">
        <MenuItem name="upload">
        <i class="iconfont icon-wenjianshangchuan"></i>文件上传</MenuItem>
      </router-link>
      <router-link to="/component/drag">
        <MenuItem name="drag">
        <i class="iconfont icon-paixu-jiangxu"></i>拖拽排序</MenuItem>
      </router-link>
      <router-link to="/component/cityLink">
        <MenuItem name="cityLink">
        <i class="iconfont icon-liandongcelve"></i>城市联动</MenuItem>
      </router-link>
    </Submenu>
  </Menu>
  <div class="shrink_" v-else>
    <Dropdown placement="right-start" class="drop" @on-click="handleClickUserDropdown" >
      <a href="javascript:void(0)">
        <i class="iconfont icon-xitongguanli"></i>
      </a>
      <DropdownMenu slot="list" >

        <DropdownItem name="account"><i class="iconfont icon-weibiaoti5"></i>账户管理</DropdownItem>
        <DropdownItem name="role"><i class="iconfont icon-jiaoseguanli"></i>角色管理</DropdownItem>
        <DropdownItem name="auth"><i class="iconfont icon-erji-quanxianguanli"></i>权限管理</DropdownItem>
        <DropdownItem name="menu"><i class="iconfont icon-caidan"></i>菜单管理</DropdownItem>
        <!-- <DropdownItem name="sensitive"><i class="iconfont icon-caidan"></i>敏感词汇</DropdownItem> -->
        <DropdownItem name="log"><i class="iconfont icon-caozuorizhi"></i>操作日志</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown placement="right-start" class="drop" @on-click="handleClickUserDropdown" >
      <a href="javascript:void(0)">
        <i class="iconfont icon-yonghuguanli"></i>
      </a>
      <DropdownMenu slot="list" >
        <DropdownItem name="userList"><i class="iconfont icon-yonghuguanli"></i>用户管理</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown placement="right-start" class="drop" @on-click="handleClickUserDropdown" >
      <a href="javascript:void(0)">
        <i class="iconfont icon-fuwuguwen"></i>
      </a>
      <DropdownMenu slot="list" >
        <DropdownItem name="adviser"><i class="iconfont icon-fuwuguwen"></i>顾问管理</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown placement="right-start" class="drop" @on-click="handleClickUserDropdown" >
      <a href="javascript:void(0)">
        <i class="iconfont icon-pingjia"></i>
      </a>
      <DropdownMenu slot="list" >
        <DropdownItem name="eva"><i class="iconfont icon-pingjia"></i>评价管理</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <!-- <Dropdown placement="right-start" class="drop" @on-click="handleClickUserDropdown" >
      <a href="javascript:void(0)">
        <i class="iconfont icon-pingjia"></i>
      </a>
      <DropdownMenu slot="list" >
        <DropdownItem name="complaints"><i class="iconfont icon-pingjia"></i>投诉管理</DropdownItem>
      </DropdownMenu>
    </Dropdown> -->
    <Dropdown placement="right-start" class="drop" @on-click="handleClickUserDropdown" >
      <a href="javascript:void(0)">
        <i class="iconfont icon-report"></i>
      </a>
      <DropdownMenu slot="list" >
        <DropdownItem name="errorCount"><i class="iconfont icon-report"></i>报错统计</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown placement="right-start" class="drop" @on-click="handleClickUserDropdown" >
      <a href="javascript:void(0)">
        <i class="iconfont icon-tianjiazujian"></i>
      </a>
      <DropdownMenu slot="list" >
        <DropdownItem name="editor"><i class="iconfont icon-fuwenbenkuang"></i>富文本</DropdownItem>
        <DropdownItem name="upload"><i class="iconfont icon-wenjianshangchuan"></i>文件上传</DropdownItem>
        <DropdownItem name="drag"><i class="iconfont icon-paixu-jiangxu"></i>拖拽排序</DropdownItem>
        <DropdownItem name="cityLink"><i class="iconfont icon-liandongcelve"></i>城市联动</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      isCollapsed: false
    }
  },
  props: ['shrink'],
  methods: {
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    },
    // 切换路由
    handleClickUserDropdown (name) {
      this.$router.push({name: name})
    }
  },
  watch: {
    '$route': function (newval, oldval) {
      let isKeep = newval.query.isKeep === true ? true : false
      this.isKeep = isKeep
      this.$store.commit('SET_KEEP', isKeep)
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
  .drop{
    margin: 10px 0;
    .iconfont{
      font-size: 18px;color: #fff;
    }
  }
</style>
