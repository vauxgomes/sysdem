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
const auth = require('./middlewares/auth')
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
routes.get('/usuarios/', auth, UsuariosController.index)
routes.get('/usuarios/:id', auth, UsuariosController.show)
routes.post('/usuarios/', auth, encryptPassword, UsuariosController.create)
routes.put('/usuarios/:id', auth, encryptPassword, UsuariosController.update)
routes.delete('/usuarios/:id', auth, UsuariosController.delete)

// TipoAtivos
routes.get('/tipoativos/', TipoAtivosController.index)
routes.get('/tipoativos/:id', auth, TipoAtivosController.show)
routes.post('/tipoativos/', auth, TipoAtivosController.create)
routes.put('/tipoativos/:id', auth, TipoAtivosController.update)
routes.delete('/tipoativos/:id', auth, TipoAtivosController.delete)

// Ativos
routes.get('/ativos/', AtivosController.index)
routes.get('/ativos/:id', auth, AtivosController.show)
routes.post('/ativos/', auth, AtivosController.create)
routes.put('/ativos/:id', auth, AtivosController.update)
routes.delete('/ativos/:id', auth, AtivosController.delete)

// Staff
routes.get('/staff/', auth, StaffController.index)
routes.get('/staff/:id', auth, StaffController.show)
routes.post('/staff/', auth, StaffController.create)
routes.put('/staff/:id', auth, StaffController.update)
routes.delete('/staff/:id', auth, StaffController.delete)

// Demandas
routes.get('/demandas/', auth, DemandasController.index)
routes.get('/demandas/:id', auth, DemandasController.show)
routes.post('/demandas/', auth, DemandasController.create)
routes.put('/demandas/:id', auth, DemandasController.update)
routes.delete('/demandas/:id', auth, DemandasController.delete)

// Export
module.exports = routes
