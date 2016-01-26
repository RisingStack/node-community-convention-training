'use strict'

const Koa = require('koa')
const Router = require('koa-router')
const config = require('../config')
const handlebars = require('koa-handlebars')
const jwt = require('jsonwebtoken')
const logger = require('winston')

function encode (payload) {
  return 'not implemented'
}

const app = new Koa()
app.use(handlebars({
  defaultLayout: 'main.hbs',
  layoutsDir: 'src/layouts',
  viewsDir: 'src/views'
}))

app.use(function * verifySignature (next) {
  logger.silly('signature is not yet implemented')
  yield next
})

const router = new Router()
router.get('/', function * () {
  yield this.render('user', {
    mainApiUrl: config.mainApiUrl
  })
})

app.use(router.routes())

app.listen(config.port, () => {
  logger.info('app is listening on port:', config.port)
})
