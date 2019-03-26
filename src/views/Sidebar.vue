<template>
<div class="menuCon">
  <Menu :active-name="$route.name" theme="dark" width="auto" :class="menuitemClasses" v-if="!shrink" :open-names="[$route.matched[0].name]">
    <!-- 循环左侧菜单栏 -->
    <div v-for="item in menulist" :key="item.name">
      <Submenu :name="item.name" v-if="item.children">
        <template slot="title">
          <i class="iconfont" :class="item.icon"></i>
          {{item.title}}
        </template>
        <router-link :to="cls.url" v-for="cls in item.children" :key="cls.name">
          <MenuItem :name="cls.name">
          <i class="iconfont" :class="cls.icon"></i>{{cls.title}}</MenuItem>
        </router-link>
      </Submenu>
      <router-link :to="item.url" v-if="!item.children">
        <MenuItem :name="item.name">
        <i class="iconfont" :class="item.icon"></i>
        <span>{{item.title}}</span>
        </MenuItem>
      </router-link>
    </div>
  </Menu>
  <div class="shrink_" v-else>
    <div v-for="item in menulist" :key="item.name">
      <Dropdown placement="right-start" class="drop" @on-click="handleClickUserDropdown">
        <a href="javascript:void(0)">
          <i class="iconfont" :class="item.icon"></i>
        </a>
        <DropdownMenu slot="list" v-if="item.children">
          <DropdownItem v-for="cls in item.children" :key="cls.name" :name="cls.name"><i class="iconfont shrinkIcon" :class="cls.icon"></i>{{cls.title}}</DropdownItem>
        </DropdownMenu>
        <DropdownMenu slot="list" v-if="!item.children">
          <DropdownItem :name="item.name"><i class="iconfont shrinkIcon" :class="item.icon"></i>{{item.title}}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</div>
</template>

<script>
import menulist from '@utils/menulist'
export default {
  data () {
    return {
      isCollapsed: false,
      menulist: menulist
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
      let isKeep = newval.query.isKeep === true
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
  .menuCon{
    height: calc(100% - 64px);
    overflow-y: auto;
  }
  .shrinkIcon{
    margin-right: 5px;
  }
</style>
