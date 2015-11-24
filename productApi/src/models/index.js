var Sequelize = require('sequelize')

var config = require('../../config')

/* Create and keep alive the connection */
var connection = new Sequelize(config.dbConnectionString)

/* Model definitions */
var Product = require('./product')(connection)

module.exports = {
  Product
}
