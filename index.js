const Koa = require('koa')
const fs = require('fs')
const app=new Koa()

app.use(async ctx=>{
  let list= fs.readFileSync('./public/data.json','utf8')

  ctx.body=JSON.parse(list).list

  let url=ctx.url.split('/').slice(1)

  let listNew=JSON.parse(list).list
  if(url[0]!=='favicon.ico'){
    url.forEach(value=>{
      listNew.push(value)
    })
  let log= fs.writeFileSync('./public/data.json',JSON.stringify({list:listNew}),'utf8')
  } 
})

app.listen(3001)