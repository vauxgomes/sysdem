// Conexão com o banco
const knex = require('../database')

// Controller
module.exports = {
  // Index
  async index(req, res) {
    const { estado } = req.query

    // Consulta base
    const query = knex
      .select('id', 'nome', 'descricao', 'estado')
      .from('tipoativos')

    // Filtro
    if (estado != undefined) {
      query.andWhere({ estado })
    }

    query.then((tipos) => res.send(tipos))
  },

  // Show
  async show(req, res) {
    const { id } = req.params
    const tipo = await knex
      .select('id', 'nome', 'descricao', 'estado')
      .from('tipoativos')
      .where({ id })
      .first()

    return res.json(tipo)
  },

  // Create
  async create(req, res) {
    const { nome, descricao } = req.body

    try {
      const [tipo] = await knex('tipoativos')
        .insert({ nome, descricao })
        .returning('id')

      return res.json({
        ...tipo,
        success: true,
        message: 'tipo.create.ok'
      })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'tipo.create.nok'
      })
    }
  },

  // Update
  async update(req, res) {
    const { id } = req.params
    const { nome, descricao, estado } = req.body

    try {
      await knex('tipoativos').update({ nome, descricao, estado }).where({ id })

      return res.status(200).send({
        success: true,
        msg: 'tipo.update.ok'
      })
    } catch (err) {
      return res.status(400).send({
        success: false,
        msg: 'tipo.update.nok'
      })
    }
  },

  // Delete
  async delete(req, res) {
    const { id } = req.params

    try {
      await knex('tipoativos').where({ id }).del()

      return res.status(200).send({
        success: true,
        msg: 'tipo.delete.ok'
      })
    } catch (err) {
      return res.status(404).send({
        success: false,
        msg: 'tipo.delete.nok'
      })
    }
  }
}
