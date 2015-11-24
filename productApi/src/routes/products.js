const Product = require('../models').Product

function * post (next) {
  this.body = yield Product.create({
    user_id: this.request.body.user_id,
    name: this.request.body.name,
    color: this.request.body.color,
    price: this.request.body.price
  })
}

function * get (next) {
  this.body = yield Product.findAll()
}

module.exports = {
  get: get,
  post: post
}
