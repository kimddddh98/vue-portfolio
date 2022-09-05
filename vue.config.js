const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = {
//   publicPath: process.env.NODE_ENV === 'production'
//       ? '/docs'
//       : '/'
//   }
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-portfolio'
    : '/',
  outputDir: 'docs'
}
