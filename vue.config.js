const path = require("path");
const CompressionPlugin = require("compression-webpack-plugin"); //Gzip
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // baseUrl: './',
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      // .set('@', resolve('src'))
      .set("@assets", resolve("src/assets"))
      .set("@images", resolve("src/assets/images"))
      .set("@components", resolve("src/components"))
      .set("@utils", resolve("src/utils"))
      .set("@views", resolve("src/views"));
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new CompressionPlugin({
            //文件开启Gzip
            filename: "[path].gz[query]",
            algorithm: "gzip",
            test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
            threshold: 10240,
            minRatio: 0.8
          })
        ],
        optimization: {
          minimizer: []
        },
        // 取消关于打包报文件大小警告
        performance: {
          hints: false
        }
      };
    }
  },
  devServer: {
    port: 8080,
    // 设置代理
    proxy: {
      "": {
        target: "http://120.78.128.49:3000", // 域名
        changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRequiresRewrite: {
          "^/api": "/"
        }
      }
    }
  }
};
