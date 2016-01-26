const Koa = require('koa')
const handlebars = require('koa-handlebars')
const Router = require('koa-router')
const logger = require('winston')
const config = require('../config')

logger.level = config.logLevel

const app = new Koa()
app.use(handlebars({
  defaultLayout: 'main.hbs',
  layoutsDir: 'src/layouts',
  viewsDir: 'src/views'
}))

const router = new Router()
router.get('/', function * () {
  logger.silly('signature is not implemented')
  const url = '/?user=123'

  yield this.render('newFeature', {
    frontendApiUrl: config.frontendApiUrl + url,
    token: 'token'
  })
})

app.use(router.routes())

app.listen(config.port, () => {
  logger.info('app is listening on port:', config.port)
})
