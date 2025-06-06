const path = require("path");
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/introduce",
  chainWebpack: (config) => {
    // 配置路径别名（确保@指向src目录）:ml-citation{ref="6,8" data="citationList"}
    config.resolve.alias.set("@", path.resolve(__dirname, "src"));
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // less vars，customize ant design theme
          "primary-color": "#1D2088",
          "link-color": "#1D2088",
        },
        javascriptEnabled: true,
      },
    },
  },
});
