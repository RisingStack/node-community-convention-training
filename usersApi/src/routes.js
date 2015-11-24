'use strict'

const User = require('./models').User

const Router = require('koa-router')

const router = new Router()

router.get('/', function * (next) {
  this.body = yield User.find({}, {
    _id: 1,
    name: 1
  })
})

router.get('/:userId', function * (next) {
  this.body = yield User.findById(this.params.userId, {
    _id: 1,
    name: 1,
    email: 1
  })
})

router.post('/', function * (next) {
  const user = new User({
    name: this.request.body.name
  })

  yield user.save()

  this.body = user
})

module.exports = router;
