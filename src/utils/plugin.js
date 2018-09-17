const MyPlugin = {}
MyPlugin.install = (Vue) => {
  // 添加全局方法或属性
  Vue.prototype.myGlobalMethod = () => {
    console.log('global-function')
  }
}
module.exports = MyPlugin
