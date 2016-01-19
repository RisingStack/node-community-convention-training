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

app.use(function * verifySignature (next) {
  const substring = this.url.substring(0, this.url.indexOf('signature') - 1)
  const result = new Buffer(substring).toString('base64')

  if (this.query.signature !== result) {
    this.body = {
      message: 'Unauthorized!'
    }
    this.status = 401
    return
  }
  yield next
})

const router = new Router()
router.get('/', function * () {
  yield this.render('user', {
    mainApiUrl: config.mainApiUrl,
    token: encode({
      id: this.query.user
    })
  })
})

app.use(router.routes())

app.listen(config.port, () => {
  logger.info('app is listening on port:', config.port)
})
