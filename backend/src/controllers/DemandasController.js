// Conexão com o banco
const knex = require('../database')

// Controller
module.exports = {
  // Index
  async index(req, res) {
    const { estado } = req.query

    // Consulta base
    const query = knex
      .select(
        'demandas.id',
        'demandas.descricao',
        'ativo_id',
        'ativos.nome as ativo_nome',
        'staff.id as staff_id',
        'staff.nome as staff_nome'
      )
      .from('demandas')
      .innerJoin('ativos', 'ativos.id', 'demandas.ativo_id')
      .leftJoin('staff', 'staff.id', 'demandas.staff_id')

    // Filtro
    if (estado != undefined) {
      query.andWhere({ 'ativos.estado': estado })
    }

    query.then((demandas) => res.send(demandas))
  },

  // Show
  async show(req, res) {
    const { id } = req.params
    const demanda = await knex
      .select(
        'demandas.id',
        'demandas.descricao',
        'ativo_id',
        'ativos.nome as ativo_nome',
        'staff.id as staff_id',
        'staff.nome as staff_nome'
      )
      .from('demandas')
      .innerJoin('ativos', 'ativos.id', 'demandas.ativo_id')
      .leftJoin('staff', 'staff.id', 'demandas.staff_id')
      .where({
        'ativos.id': id
      })
      .first()

    return res.json(demanda)
  },

  // Create
  async create(req, res) {
    const { descricao, ativo_id } = req.body

    try {
      const [demanda] = await knex('demandas')
        .insert({ descricao, ativo_id })
        .returning('id')

      return res.json({
        ...demanda,
        success: true,
        message: 'demanda.create.ok'
      })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'demanda.create.nok'
      })
    }
  },

  // Update
  async update(req, res) {
    const { id } = req.params
    const { descricao, ativo_id, staff_id, estado } = req.body

    try {
      await knex('demandas')
        .update({ descricao, ativo_id, staff_id, estado })
        .where({ id })

      return res.status(200).send({
        success: true,
        msg: 'demanda.update.ok'
      })
    } catch (err) {
      return res.status(400).send({
        success: false,
        msg: 'demanda.update.nok'
      })
    }
  },

  // Delete
  async delete(req, res) {
    const { id } = req.params

    try {
      await knex('demandas').where({ id }).del()

      return res.status(200).send({
        success: true,
        msg: 'demanda.delete.ok'
      })
    } catch (err) {
      return res.status(404).send({
        success: false,
        msg: 'demanda.delete.nok'
      })
    }
  }
}
