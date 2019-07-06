const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://i.waimai.meituan.com' }))
  console.log(1111)
}