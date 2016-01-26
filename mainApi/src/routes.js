'use strict'

const Router = require('koa-router')

const router = new Router()

router.get('/users', function * () {
  this.body = {
    message: 'not implemented'
  }
})
router.get('/users/:userId', function * () {
  this.body = {
    message: 'not implemented'
  }
})
router.get('/users/:userId/products', function * () {
  this.body = {
    message: 'not implemented'
  }
})
router.post('/users/:userId/products', function * () {
  this.body = {
    message: 'not implemented'
  }
})

module.exports = router
