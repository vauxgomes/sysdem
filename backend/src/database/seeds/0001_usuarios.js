exports.seed = async function (knex) {
  console.log('Seeds: Usuários')

  await knex('usuarios').del()
  await knex('usuarios').insert([
    {
      nome: 'Root',
      email: 'root@email.com',
      username: 'root',
      password: 'root',
      papel: 'ROOT'
    },
    {
      nome: 'Admin',
      email: 'admin@email.com',
      username: 'admin',
      password: 'admin',
      papel: 'ADMIN'
    }
  ])
}
