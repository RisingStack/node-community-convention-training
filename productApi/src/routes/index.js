const Router = require('koa-router')

const products = require('./products')

const router = new Router()
router.get('/products', products.get)
router.post('/products', products.post)

module.exports = router
