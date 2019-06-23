const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router
  .get('/', async (ctx, next) => {
    ctx.body = ctx.query
  })

// allowedMethods 只允许 GET 请求s
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server running port 3000')
})
