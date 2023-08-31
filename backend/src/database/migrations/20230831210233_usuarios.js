// Criação da tabela
exports.up = function (knex) {
  console.log('Migration: Usuários')

  return knex.schema.createTable('usuarios', function (table) {
    table.increments('id').primary()

    table.string('nome', 255).notNullable()
    table.string('email', 255).notNullable()

    table.string('username', 20).unique().notNullable()
    table.string('password', 100).notNullable()

    table
      .enu('papel', ['ROOT', 'ADMIN', 'USER'])
      .notNullable()
      .defaultTo('USER')

    table.boolean('estado').notNullable().defaultTo(true)

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now())
  })
}

// Remover a tabela
exports.down = function (knex) {
  return knex.schema.dropTable('usuarios')
}
