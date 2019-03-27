const Plugin = {};
Plugin.install = Vue => {
  // 添加全局方法或属性
  Vue.prototype.myGlobalMethod = () => {
    console.log("global-function");
  };
};
module.exports = Plugin;
