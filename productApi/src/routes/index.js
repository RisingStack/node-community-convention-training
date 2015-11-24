/* Define the ROUTING */
var Router = require('koa-router')

var basicAuth = require('./auth').basicAuth
var products = require('./products')

var router = {
  public: new Router(),
  secured: new Router()
}

/* Public routes */
router.public.get('/', products.get)

/* Secured routes */
router.secured.post('/', basicAuth, products.post)

module.exports = router

