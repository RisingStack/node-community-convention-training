#!/usr/bin/env node

'use strict'

const connection = require('./src/models').connection

connection.sync()
  .then(() => {
    console.log('sync successful!')
    process.exit(0)
  })
  .catch(() => {
    console.error('sync failed!')
    process.exit(1)
  })
