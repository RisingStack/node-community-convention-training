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
  const signatureData = '/?user=123'
  const result = new Buffer(signatureData).toString('base64')
  const url = `${signatureData}&signature=${result}`

  yield this.render('newFeature', {
    frontendApiUrl: config.frontendApiUrl + url
  })
})

app.use(router.routes())

app.listen(config.port, () => {
  logger.info('app is listening on port:', config.port)
})
