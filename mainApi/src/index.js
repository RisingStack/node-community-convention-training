const koa = require('koa')
const request = require('superagent')

const app = koa()

const router = require('koa-router')()
router.get('/', function * (next) {
}

app.use(router.routes())
app.listen(3000)
