const { papeis } = require('../middlewares/roles')

// Controller
module.exports = {
  // Index
  async papeis(req, res) {
    return res.json(Object.values(papeis))
  }
}
