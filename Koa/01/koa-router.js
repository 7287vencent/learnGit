const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World'
  })
  .get('/todo', (ctx, next) => {
    ctx.body = 'Todo page'
  })
// 就是 判断 router 的 获取类型 到底是 get 还是 post 
// get 就返回正确 post 就返回 错误
app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server starting is running port 3000')
})