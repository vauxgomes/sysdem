const express = require('express')
const routes = express.Router()

// Controllers
const UsuariosController = require('./controllers/UsuariosController')
const TipoAtivosController = require('./controllers/TipoAtivosController')
const AtivosController = require('./controllers/AtivosController')
const StaffController = require('./controllers/StaffController')
const DemandasController = require('./controllers/DemandasController')
const SessionController = require('./controllers/SessionController')
const LovsController = require('./controllers/LovsController')

// Middlewares
const auth = require('./middlewares/auth')
const encryptPassword = require('./middlewares/encryptpassword')
const { papeis, permissoes } = require('./middlewares/roles')

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
routes.get(
  '/usuarios/',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  UsuariosController.index
)
routes.get(
  '/usuarios/:id',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  UsuariosController.show
)
routes.post(
  '/usuarios/',
  auth,
  encryptPassword,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  UsuariosController.create
)
routes.put(
  '/usuarios/:id',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  encryptPassword,
  UsuariosController.update
)
routes.delete(
  '/usuarios/:id',
  auth,
  permissoes([papeis.ROOT]),
  UsuariosController.delete
)

// TipoAtivos
routes.get('/tipoativos/', TipoAtivosController.index)
routes.get('/tipoativos/:id', auth, TipoAtivosController.show)
routes.post(
  '/tipoativos/',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  TipoAtivosController.create
)
routes.put(
  '/tipoativos/:id',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  TipoAtivosController.update
)
routes.delete(
  '/tipoativos/:id',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  TipoAtivosController.delete
)

// Ativos
routes.get('/ativos/', AtivosController.index)
routes.get('/ativos/:id', auth, AtivosController.show)
routes.post(
  '/ativos/',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  AtivosController.create
)
routes.put(
  '/ativos/:id',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  AtivosController.update
)
routes.delete(
  '/ativos/:id',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  AtivosController.delete
)

// Staff
routes.get('/staff/', auth, StaffController.index)
routes.get('/staff/:id', auth, StaffController.show)
routes.post(
  '/staff/',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  StaffController.create
)
routes.put(
  '/staff/:id',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  StaffController.update
)
routes.delete(
  '/staff/:id',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  StaffController.delete
)

// Demandas
routes.get('/demandas/', auth, DemandasController.index)
routes.get('/demandas/:id', auth, DemandasController.show)
routes.post(
  '/demandas/',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  DemandasController.create
)
routes.put(
  '/demandas/:id',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  DemandasController.update
)
routes.delete(
  '/demandas/:id',
  auth,
  permissoes([papeis.ROOT, papeis.ADMIN]),
  DemandasController.delete
)

// Lovs
routes.get('/lovs/papeis', auth, LovsController.papeis)

// Export
module.exports = routes
