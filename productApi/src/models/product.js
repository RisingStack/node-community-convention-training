const Sequelize = require('sequelize')

function define (connection) {
  const Product = connection.define('Product', {
    name: {
      type: Sequelize.STRING
    },
    color: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.INTEGER
    }
  })
  return Product
}

module.exports = define

