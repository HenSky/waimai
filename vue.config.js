const data = require('./src/mock/data.json')

module.exports = {
  runtimeCompiler: true,
  publicPath: '/', // 设置打包文件相对路径
  devServer: {
    before(app) {
      app.get('/api/info', (req, res) => {
        res.json({ code: 0, data: data.info })
      }),
      app.get('/api/goods', (req, res) => {
        res.json({ code: 0, data: data.goods })
      }),
      app.get('/api/ratings', (req, res) => {
        res.json({ code: 0, data: data.ratings })
      })
    },
    // open: process.platform === 'darwin',
    // host: 'localhost',
    port: 8071,
    // open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:4000/', // 对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    }

  }
}
