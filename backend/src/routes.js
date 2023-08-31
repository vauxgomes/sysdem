const express = require('express')
const routes = express.Router()

// Controllers
const UsuariosController = require('./controllers/UsuariosController')

// System
routes.get('/sys', (req, res) => {
  res.send({
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION
  })
})

// Usuarios
routes.get('/usuarios/', UsuariosController.index)
routes.get('/usuarios/:id', UsuariosController.show)
routes.post('/usuarios/', UsuariosController.create)
routes.put('/usuarios/:id', UsuariosController.update)
routes.delete('/usuarios/:id', UsuariosController.delete)

// Export
module.exports = routes
