const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "/";

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  baseUrl: BASE_URL,
  assetsDir: "static", // 会在dist文件夹下生成一个static目录.放置压缩后的文件
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,

  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set("@@", resolve("src/zone_pages"))
      .set("_c", resolve("src/components"))
      .set("_n", resolve("node_modules"));
  },

  // configureWebpack: {
  //   devtool: "source-map",
  //   cacheBusting: false
  // }
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   proxy: 'localhost:3000'
  // }

  // 设为false打包时不生成.map文件
  productionSourceMap: false,

  pages: {
    iotosHome: {
      entry: "src/zone_pages/iotosHome/main.js",
      template: "public/iotosHome.html",
      filename: "index.html",
      title: "爱投斯官网"
    },
    dataVusual: {
      entry: "src/zone_pages/dataVusual/main.js",
      template: "public/dataVusual.html",
      filename: "dataVisual.html",
      title: "dataVusual"
    },
    page1: {
      entry: "src/zone_pages/page1/main.js",
      template: "public/page1.html",
      filename: "page1.html",
      title: "page1"
    },
    page2: {
      entry: "src/zone_pages/page2/main.js",
      template: "public/page2.html",
      filename: "page2.html",
      title: "page2"
    }
  }
};
