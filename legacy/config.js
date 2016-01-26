module.exports = {
  frontendApiUrl: process.env.FRONTEND_API_URL || 'http://localhost:31337',
  port: process.env.PORT || 4000,
  logLevel: process.env.LOG_LEVEL || 'silly'
}
