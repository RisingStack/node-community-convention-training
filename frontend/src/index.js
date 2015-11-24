const Koa = require('koa')
const handlebars = require('koa-handlebars')
const Router = require('koa-router')
const logger = require('winston')
const jwt = require('jsonwebtoken')
const config = require('../config')

function encode (payload) {
  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: 999
  })
}

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
    token: encode({
      id: 123
    })
  })
})

app.use(router.routes())

app.listen(config.port, () => {
  logger.info('app is listening on port:', config.port)
})
