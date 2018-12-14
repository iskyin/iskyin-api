import * as Koa from 'koa'
const app=new Koa()

app.use(ctx => {
    ctx.body = `您的网址路径为:${ctx.request.url}`
})
  
app.listen(8088)
