'use strict'

const Router = require('koa-router')
const jwtMiddleware = require('koa-jwt')
const token = require('jsonwebtoken')

function encode (payload) {
  return token.sign(payload, config.jwtSecret, {
    expiresIn: jwtConfig.ttl
  });
}

const jwtMiddleware = jwt({
  secret: config.jwt.secret,
  key: 'customer'
});

const router = new Router()

/* secured */
router.get('/login', jwtMiddleware, function * () {
})
router.get('/users', jwtMiddleware, function * () {
})
router.get('/users/:userId/products', jwtMiddleware, function * () {
})
router.post('/users/:userId/products', jwtMiddleware, function * () {
})


module.exports = router
