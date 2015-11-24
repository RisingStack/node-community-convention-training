var config = {}

config.dbConnectionString = process.env.DB_CONNECTION_STRING || 'mysql://root@localhost:3306/test'
config.port = process.env.PORT || 19386

module.exports = config
