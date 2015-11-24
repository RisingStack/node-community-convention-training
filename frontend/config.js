module.exports = {
  mainApiUrl: process.env.MAIN_API_URL || 'http://localhost:3200',
  port: process.env.PORT || 31337,
  jwtSecret: process.env.JWT_SECRET || 'jwtSecret'
}
