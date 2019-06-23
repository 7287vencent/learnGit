const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()

//  如果指定了 path ,那么 在 page/ 路径下都可以 get 到 cookie
// 没有的话 只要 cookie 存在 就可以 访问
app.use(async (ctx, next) => {
  if(ctx.url === '/index') {
    ctx.cookies.set(
      'MyName','JSPang', {
        // 域名
        domain: '127.0.0.1',
        // 路劲
        path: '/index',
        // 最长有效时间
        maxAge: 1000*60*60*24,
        // 到那一天 就失效  接的是 date 类型
        expires: new Date('2019-6-24'),
        // 只允许 http 其它的模式无效
        httpOnly: false,
        // 允许不允许 重写 Cookie
        overwrite: false
      }
    )
    ctx.body = 'cookie id ok'
  } else {
    if(ctx.cookies.get('MyName')) {
      ctx.body = ctx.cookies.get('MyName')
    } else {
      ctx.body = 'cookies is no'
    }
  } 
})

app.listen(3000, () => {
  console.log('server starting is running port 3000')
})