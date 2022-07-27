const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '/Vue-project-planner' // production
      : '/', // development
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      require('unplugin-element-plus/webpack')({
        // options
      })
    ]
  }
})
