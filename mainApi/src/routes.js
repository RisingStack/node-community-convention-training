'use strict'

const Router = require('koa-router')
const jwt = require('koa-jwt')
const config = require('./config')

const jwtMiddleware = jwt({
  secret: config.jwtSecret,
  key: 'admin'
})

const router = new Router()

/* secured */
router.get('/users', jwtMiddleware, function * () {
})
router.get('/users/:userId', jwtMiddleware, function * () {
})
router.get('/users/:userId/products', jwtMiddleware, function * () {
})
router.post('/users/:userId/products', jwtMiddleware, function * () {
})

module.exports = router
