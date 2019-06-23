const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa()


// 子路由
let home = new Router()
let page = new Router()
home
  .get('/jspang', async(ctx) => {
    ctx.body = 'Home JSPang page'
  })
  .get('/todo', async(ctx) => {
    ctx.body = 'Home Todo page'
  })

page
  .get('/jspang', async(ctx) => {
    ctx.body = 'Page JSPang page'
  })
  .get('/todo', async(ctx) => {
    ctx.body = 'Page Todo page'
  })

// 父级路由
let router = new Router()
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), home.allowedMethods())

app
  .use(router.routes())
  .use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server starting is running port 3000')
})