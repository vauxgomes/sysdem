// Criação da tabela
exports.up = function (knex) {
  console.log('Migration: Demandas')

  return knex.schema.createTable('demandas', function (table) {
    table.increments('id').primary()

    table.string('descricao', 255)

    table.integer('ativo_id').notNullable()
    table.foreign('ativo_id').references('ativos.id').onDelete('CASCADE')

    table.integer('staff_id')
    table.foreign('staff_id').references('staff.id').onDelete('CASCADE')

    table
      .enu('estado', ['NEW', 'CANCELED', 'TODO', 'DOING', 'FINISHED'])
      .notNullable()
      .defaultTo('NEW')

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  })
}

// Remover a tabela
exports.down = function (knex) {
  return knex.schema.dropTable('demandas')
}
