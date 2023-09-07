// Conexão com o banco
const knex = require('../database')

// Controller
module.exports = {
  // Index
  async index(req, res) {
    const { estado } = req.query

    // Consulta base
    const query = knex.select('id', 'nome', 'estado').from('staff')

    // Filtro
    if (estado != undefined) {
      query.andWhere({ estado })
    }

    query.then((staff) => res.send(staff))
  },

  // Show
  async show(req, res) {
    const { id } = req.params
    const staff = await knex
      .select('id', 'nome', 'estado')
      .from('staff')
      .where({ id })
      .first()

    return res.json(staff)
  },

  // Create
  async create(req, res) {
    const { nome } = req.body

    try {
      const [staff] = await knex('staff').insert({ nome }).returning('id')

      return res.json({
        ...staff,
        success: true,
        message: 'staff.create.ok'
      })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'staff.create.nok'
      })
    }
  },

  // Update
  async update(req, res) {
    const { id } = req.params
    const { nome, estado } = req.body

    try {
      await knex('staff').update({ nome, estado }).where({ id })

      return res.status(200).send({
        success: true,
        msg: 'staff.update.ok'
      })
    } catch (err) {
      return res.status(400).send({
        success: false,
        msg: 'staff.update.nok'
      })
    }
  },

  // Delete
  async delete(req, res) {
    const { id } = req.params

    try {
      await knex('staff').where({ id }).del()

      return res.status(200).send({
        success: true,
        msg: 'staff.delete.ok'
      })
    } catch (err) {
      return res.status(404).send({
        success: false,
        msg: 'staff.delete.nok'
      })
    }
  }
}
