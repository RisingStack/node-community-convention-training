module.exports = {
  dbConnectionString: `postgres://${process.env.PG_USER || process.env.USER}:${process.env.PG_PASSWORD}@localhost:5432/${process.env.PG_DATABASE || 'training'}`,
  port: process.env.PORT || 19386
}
