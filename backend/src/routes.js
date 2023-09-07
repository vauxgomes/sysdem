const express = require('express')
const routes = express.Router()

// Controllers
const UsuariosController = require('./controllers/UsuariosController')
const TipoAtivosController = require('./controllers/TipoAtivosController')
const AtivosController = require('./controllers/AtivosController')
const StaffController = require('./controllers/StaffController')

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

// TipoAtivos
routes.get('/tipoativos/', TipoAtivosController.index)
routes.get('/tipoativos/:id', TipoAtivosController.show)
routes.post('/tipoativos/', TipoAtivosController.create)
routes.put('/tipoativos/:id', TipoAtivosController.update)
routes.delete('/tipoativos/:id', TipoAtivosController.delete)

// Ativos
routes.get('/ativos/', AtivosController.index)
routes.get('/ativos/:id', AtivosController.show)
routes.post('/ativos/', AtivosController.create)
routes.put('/ativos/:id', AtivosController.update)
routes.delete('/ativos/:id', AtivosController.delete)

// Staff
routes.get('/staff/', StaffController.index)
routes.get('/staff/:id', StaffController.show)
routes.post('/staff/', StaffController.create)
routes.put('/staff/:id', StaffController.update)
routes.delete('/staff/:id', StaffController.delete)

// Export
module.exports = routes
