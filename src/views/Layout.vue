<template>
  <div class="layout">
    <Layout>
      <Sider ref="side1" hide-trigger collapsible :collapsed-width="60" v-model="isCollapsed">
        <h1 class="logo" :class="{shrink_: shrink}">LOGO</h1>
        <Sidebar :shrink="shrink"></Sidebar>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Row class="header">
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
              <Tooltip content="修改密码" placement="bottom">
                <Icon type="android-lock" :size="20" class="modPwdBtn" @click.native="isShowPwd = true"></Icon>
              </Tooltip>
              <own-action></own-action>
            </div>
          </Row>
        </Header>
        <Tags></Tags>
        <Content>
          <keep-alive v-if="isKeep">
            <router-view></router-view>
          </keep-alive>
          <router-view v-else></router-view>
        </Content>
      </Layout>
    </Layout>

    <!-- 弹出密码框 -->
    <mod-pwd :isShow="isShowPwd" @closePwd="closePwd"></mod-pwd>
  </div>
</template>
<script>
import Sidebar from './Sidebar.vue'
import Breadcrumb from '@components/breadcrumb'
import FullScreen from '@components/fullScreen'
import MessageTip from '@components/messageTip'
import Tags from '@components/Tags'
import modPwd from '@components/modPwd'
import ownAction from '@components/ownAction'
import { mapState } from 'vuex'
export default {
  components: {
    Breadcrumb, Sidebar, FullScreen, MessageTip, Tags, modPwd, ownAction
  },
  data () {
    return {
      isCollapsed: false,
      isFullScreen: false,
      shrink: false,
      isShowPwd: false // 是否显示修改密码弹出框
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
    },
    isKeep () {
      return this.$store.state.app.isKeep
    },
    ...mapState(['user'])
  },
  methods: {
    // 关闭修改密码弹窗
    closePwd () {
      this.isShowPwd = false
    },
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
      setTimeout(() => {
        this.shrink = !this.shrink
      }, 100)
    },
    fullscreenChange (isFullScreen) {
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
    width: 300px;
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
  .ivu-layout-content{
    margin: 20px;
    min-height: 260px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .header{
    overflow: inherit;
  }
  .modPwdBtn{
    margin-left: 10px;
    position: relative;
    top: 2px;
    cursor: pointer;
  }
</style>
