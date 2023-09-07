const knex = require('../database')
const jwt = require('jsonwebtoken')

const { compareSync } = require('bcrypt')

module.exports = {
  // REGISTER
  async register(req, res) {
    try {
      const { username, password } = req.body

      const usuario = await knex('usuarios').where('username', username).first()

      if (!usuario || !usuario.estado) {
        return res.status(400).json({
          success: false,
          message: 'user.registration.inactive'
        })
      }

      if (compareSync(password, usuario.password)) {
        const payload = {
          id: usuario.id,
          nome: usuario.nome,
          papel: usuario.papel,
          estado: usuario.estado
        }

        // TOKEN
        const token = jwt.sign({ ...payload }, process.env.TOKEN_SECRET, {
          expiresIn: process.env.TOKEN_LIFE
        })

        return res.json({
          success: true,
          token,
          message: 'user.registration.ok'
        })
      } else {
        return res.status(400).json({
          success: false,
          message: 'user.registration.nok'
        })
      }
    } catch (err) {
      console.log(err)

      return res.status(400).json({
        success: false,
        message: 'user.registration.error',
        detail: {
          code: err.code,
          message: err.detail,
          constraint: err.constraint,
          type: typeof err
        }
      })
    }
  }
}
