const User = require('./src/models').User

User.collection.insert([{
  name: 'John',
  email: 'john@joh.nl'
}, {
  name: 'Mark',
  email: 'mark@joh.nl'
}, {
  name: 'Greg',
  email: 'greg@joh.nl'
}], {}, function (err, users) {
  if (err) {
    throw err
  }

  console.log('successfully inserted seed data')
  process.exit(0)
})
