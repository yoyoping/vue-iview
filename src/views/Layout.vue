<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="60" v-model="isCollapsed">
        <h1 class="logo" :class="{shrink_: shrink}">LOGO</h1>
        <Sidebar :shrink="shrink"></Sidebar>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Row>
            <Col span="1">
              <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0',cursor: 'pointer'}" type="navicon-round" size="24"></Icon>
            </Col>
            <Col span="6">
              <Breadcrumb></Breadcrumb>
            </Col>
            <div class="header-middle-con">
              <full-screen v-model="isFullScreen" @on-change="fullscreenChange" class="action fullscreen"></full-screen>
              <message-tip v-model="mesCount" class="action"></message-tip>
              <!-- <theme-switch></theme-switch> -->

              <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown" @visible-change="select_change(event)">
                <a href="javascript:void(0)">
                  <span class="main-user-name">{{ userName }}</span>
                  <Icon type="arrow-down-b"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem name="ownSpace">个人中心</DropdownItem>
                  <DropdownItem name="loginout" divided><div >退出登录</div></DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <Avatar src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg" style="background: #619fe7;margin-left: 10px;"></Avatar>
            </div>
          </Row>
        </Header>
        <Content :style="{margin: '20px', minHeight: '260px'}">
          <router-view></router-view>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import Sidebar from './Sidebar.vue'
import Breadcrumb from '_components/breadcrumb'
import FullScreen from '_components/fullScreen'
import MessageTip from '_components/messageTip'
export default {
  components: {
    Breadcrumb, Sidebar, FullScreen, MessageTip
  },
  data () {
    return {
      isCollapsed: false,
      isFullScreen: false,
      userName: 'admin',
      shrink: false
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? 'rotate-icon' : ''
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    },
    mesCount () {
      return this.$store.state.app.messageCount
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
      setTimeout(() => {
        this.shrink = !this.shrink
      }, 100)
    },
    fullscreenChange (isFullScreen) {
    },
    handleClickUserDropdown (name) {
      if (name === 'ownSpace') {
        // util.openNewPage(this, 'ownspace_index')
        // this.$router.push({
        //   name: 'ownspace_index'
        // })
      } else if (name === 'loginout') {
        this.$Modal.confirm({
          title: '退出提示',
          content: '确认要退出当前账号吗？',
          onOk: () => {
            this.$router.push('/login')
            localStorage.removeItem('loginStatus')
            localStorage.removeItem('userInfo')
            localStorage.removeItem('roles')
          }
        })
      }
    },
    select_change (e) {
      debugger
    }
  }
}
</script>
<style scoped lang="scss">
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

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
  .ivu-layout{
    height: 100%;
  }
  .logo{
    font-size: 20px;color: #fff;height: 64px;line-height: 64px;padding: 0 20px;
    &.shrink_{
      font-size: 14px;padding: 0;text-align: center;
    }
  }
  .action{
    display: inline-block;margin-right: 10px;
  }
  .fullscreen{
    display: inline-block;
    width: 30px;
    text-align: center;
    cursor: pointer;
    position: relative;
    top: 4px;
  }
  .header-middle-con{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 220px;
  }
  .ivu-row{
    height: 100%;overflow: hidden;
  }
  .main-user-name{
    color: #2d8cf0;
  }
  .ivu-dropdown{
    margin-left: 20px;
  }
</style>
