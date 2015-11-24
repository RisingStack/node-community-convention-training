'use strict'

const Koa = require('koa')
const request = require('superagent')
const bodyParser = require('koa-bodyparser')
const logger = require('winston')
const mongoose = require('mongoose')
const cors = require('koa-cors')

const config = require('./config')
const router = require('./routes')

const app = new Koa()
app.use(bodyParser())
app.use(cors())

app.use(router.middleware())
app.listen(config.port, function () {
  logger.info('app is listening on', config.port)
})
