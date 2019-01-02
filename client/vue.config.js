/*
 * FileName    : vue
 * ProjectName : client
 * Author      : terrorblade
 * Created Date: 2018-12-14 18:07:04
 * Description :
 * -----
 * Last Modified:
 * Modified By  :
 * -----
 * Copyright (c) 2018 Huazhi Corporation. All rights reserved.
 */
const config = require('./config/config.json')
module.exports = {
  // 基本路径
  baseUrl: '/',
  // 输出文件目录
  outputDir: 'dist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  runtimeCompiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => { },
  configureWebpack: () => { },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === 'darwin',
    host: config.host,
    port: config.port,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: `${config.api.protocol}://${config.api.host}:${config.api.port}`,
        ws: false,
        changeOrigin: false
      }
    }, // 设置代理
    before: app => { }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
