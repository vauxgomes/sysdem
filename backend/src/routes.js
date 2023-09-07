const express = require('express')
const routes = express.Router()

// Controllers
const UsuariosController = require('./controllers/UsuariosController')
const TipoAtivosController = require('./controllers/TipoAtivosController')
const AtivosController = require('./controllers/AtivosController')
const StaffController = require('./controllers/StaffController')
const DemandasController = require('./controllers/DemandasController')
const SessionController = require('./controllers/SessionController')

// Middlewares
const encryptPassword = require('./middlewares/encryptpassword')

// System
routes.get('/sys', (req, res) => {
  res.send({
    name: process.env.APP_NAME,
    version: process.env.APP_VERSION
  })
})

// Login
routes.post('/login', SessionController.register)

// Usuarios
routes.get('/usuarios/', UsuariosController.index)
routes.get('/usuarios/:id', UsuariosController.show)
routes.post('/usuarios/', encryptPassword, UsuariosController.create)
routes.put('/usuarios/:id', encryptPassword, UsuariosController.update)
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

// Demandas
routes.get('/demandas/', DemandasController.index)
routes.get('/demandas/:id', DemandasController.show)
routes.post('/demandas/', DemandasController.create)
routes.put('/demandas/:id', DemandasController.update)
routes.delete('/demandas/:id', DemandasController.delete)

// Export
module.exports = routes
