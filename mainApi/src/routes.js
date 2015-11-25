'use strict'

const Router = require('koa-router')

const router = new Router()

/* secured */
router.get('/users', function * () {
})
router.get('/users/:userId', function * () {
})
router.get('/users/:userId/products', function * () {
})
router.post('/users/:userId/products', function * () {
})

module.exports = router
