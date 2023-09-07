const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = (req, res, next) => {
  if (req.body.password) {
    const SALT = Number(process.env.SALT)
    req.body.password = bcrypt.hashSync(req.body.password, SALT)
  }

  next()
}
