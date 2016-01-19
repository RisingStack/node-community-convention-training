const koa = require('koa')
const router = require('./routes')
const logger = require('winston')
const config = require('../config')
const cors = require('koa-cors')

const app = koa()

app.use(cors())
app.use(router.routes())
app.listen(config.port, () => {
  logger.info('app is listening on port:', config.port)
})
