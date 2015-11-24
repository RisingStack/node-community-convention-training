'use strict'

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('winston')

const config = require('../config')
const router = require('./routes')

const app = new Koa()
app.use(bodyParser())
app.use(router.middleware())

app.listen(config.port, () => {
  logger.info('app is listening:', config.port)
})
