// Imports
const express = require('express')
const routes = express.Router()

// System
routes.get('/sys', (req, res) => {
  res.send({
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION
  })
})

// Export
module.exports = routes
