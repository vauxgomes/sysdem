// Conexão com o banco
const knex = require('../database')

// Controller
module.exports = {
  // Index
  async index(req, res) {
    const { tipo_id, estado } = req.query

    // Consulta base
    const query = knex
      .select(
        'ativos.id',
        'ativos.nome',
        'ativos.descricao',
        'ativos.estado',
        'ativos.tipo_id',
        'tipoativos.nome as tipo_nome'
      )
      .from('ativos')
      .innerJoin('tipoativos', 'tipoativos.id', 'ativos.tipo_id')

    // Filtro
    if (tipo_id != undefined) {
      query.andWhere({ 'ativos.tipo_id': tipo_id })
    }

    // Filtro
    if (estado != undefined) {
      query.andWhere({ 'ativos.estado': estado })
    }

    query.then((ativos) => res.send(ativos))
  },

  // Show
  async show(req, res) {
    const { id } = req.params
    const ativo = await knex
      .select(
        'ativos.id',
        'ativos.nome',
        'ativos.descricao',
        'ativos.estado',
        'ativos.tipo_id',
        'tipoativos.nome as tipo_nome'
      )
      .from('ativos')
      .innerJoin('tipoativos', 'tipoativos.id', 'ativos.tipo_id')
      .where({
        'ativos.id': id
      })
      .first()

    return res.json(ativo)
  },

  // Create
  async create(req, res) {
    const { nome, descricao, tipo_id } = req.body

    try {
      const [ativo] = await knex('ativos')
        .insert({ nome, descricao, tipo_id })
        .returning('id')

      return res.json({
        ...ativo,
        success: true,
        message: 'ativo.create.ok'
      })
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: 'ativo.create.nok'
      })
    }
  },

  // Update
  async update(req, res) {
    const { id } = req.params
    const { nome, descricao, tipo_id, estado } = req.body

    try {
      await knex('ativos')
        .update({ nome, descricao, tipo_id, estado })
        .where({ id })

      return res.status(200).send({
        success: true,
        msg: 'ativo.update.ok'
      })
    } catch (err) {
      return res.status(400).send({
        success: false,
        msg: 'ativo.update.nok'
      })
    }
  },

  // Delete
  async delete(req, res) {
    const { id } = req.params

    try {
      await knex('ativos').where({ id }).del()

      return res.status(200).send({
        success: true,
        msg: 'ativo.delete.ok'
      })
    } catch (err) {
      return res.status(404).send({
        success: false,
        msg: 'ativo.delete.nok'
      })
    }
  }
}
