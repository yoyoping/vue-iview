<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
@import './assets/css/index.scss'; // 全局自定义的css样式
@import './assets/icon/iconfont.css';
#app{
  height: 100%;
}
</style>
