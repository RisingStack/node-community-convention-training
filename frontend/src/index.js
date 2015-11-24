const Koa = require('koa')
const handlebars = require('koa-handlebars')
const Router = require('koa-router')
const logger = require('winston')

const config = require('../config')

const app = new Koa()
app.use(handlebars({
  defaultLayout: 'main.hbs',
  layoutsDir: 'src/layouts',
  viewsDir: 'src/views'
}))

const router = new Router()
router.get('/', function * () {
  yield this.render('user', {
    mainApiUrl: config.mainApiUrl,
    token: 'aaaba2b2ba2b4b4b2b2b12b3b512b'
  })
})

app.use(router.routes())

app.listen(config.port, function () {
  logger.info('app is listening on port:', config.port)
})
