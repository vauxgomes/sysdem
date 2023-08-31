// Criação da tabela
exports.up = function (knex) {
  console.log('Migration: Tipo Ativos')

  return knex.schema.createTable('tipoativos', function (table) {
    table.increments('id').primary()

    table.string('nome', 50).notNullable()
    table.string('descricao', 255)

    table.boolean('estado').notNullable().defaultTo(true)

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  })
}

// Remover a tabela
exports.down = function (knex) {
  return knex.schema.dropTable('tipoativos')
}
