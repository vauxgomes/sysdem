// Conexão com o banco
const knex = require('../database')

// Controller
module.exports = {
  // Index
  async index(req, res) {
    const usuarios = await knex
      .select('id', 'nome', 'email', 'username', 'papel', 'estado')
      .from('usuarios')

    return res.json(usuarios)
  },

  // Show
  async show(req, res) {
    const { id } = req.params
    const usuario = await knex
      .select('id', 'nome', 'email', 'username', 'papel', 'estado')
      .from('usuarios')
      .where('id', id)
      .first()

    return res.json(usuario)
  },

  // Create
  async create(req, res) {
    const { nome, email, username, password } = req.body

    try {
      const [usuario] = await knex('usuarios')
        .insert({
          nome,
          email,
          username,
          password
        })
        .returning('id')

      return res.status(200).json({
        ...usuario,
        success: true,
        msg: 'usuario.update.ok'
      })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'usuario.create.nok'
      })
    }
  },

  // Update
  async update(req, res) {
    const { id } = req.params
    const { nome, email, username, password, papel, estado } = req.body

    try {
      await knex('usuarios')
        .update({
          nome,
          email,
          username,
          password,
          papel,
          estado
        })
        .where('id', id)

      return res.status(200).json({
        success: true,
        msg: 'usuario.update.ok'
      })
    } catch (err) {
      return res.status(400).json({
        success: false,
        msg: 'usuario.update.nok'
      })
    }
  },

  // Delete
  async delete(req, res) {
    const { id } = req.params
    try {
      await knex('usuarios').where('id', id).del()

      return res.status(200).json({
        success: true,
        msg: 'usuario.delete.ok'
      })
    } catch (err) {
      return res.status(404).json({
        success: false,
        msg: 'usuario.delete.nok'
      })
    }
  }
}
