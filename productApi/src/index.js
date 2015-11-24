'use strict'

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('winston')

const config = require('./config')
const router = require('./routes')

const app = new Koa()

app.use(bodyParser())

app.use(router.public.middleware())
app.use(router.secured.middleware())

app.listen(config.port, function () {
  logger.info('app is listening:', config.port)
})
