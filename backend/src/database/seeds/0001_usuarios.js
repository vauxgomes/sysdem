const bcrypt = require('bcrypt')
require('dotenv').config()

exports.seed = async function (knex) {
  console.log('Seeds: Usuários')

  const SALT = Number(process.env.SALT)

  await knex('usuarios').del()
  await knex('usuarios').insert([
    {
      nome: 'Root',
      email: 'root@email.com',
      username: 'root',
      password: bcrypt.hashSync('root', SALT),
      papel: 'ROOT'
    },
    {
      nome: 'Admin',
      email: 'admin@email.com',
      username: 'admin',
      password: bcrypt.hashSync('admin', SALT),
      papel: 'ADMIN'
    }
  ])
}
