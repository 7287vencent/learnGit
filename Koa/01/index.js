const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
  ctx.body = 'Hello hehai'
})

app.listen(3000)
console.log('app start at port 3000')