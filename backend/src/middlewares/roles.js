const papeis = {
  ROOT: 'ROOT',
  ADMIN: 'ADMIN',
  USER: 'USER'
}

const permicoes = (permicoes) => {
  return (req, res, next) => {
    if (!permicoes.includes(req.user.role)) {
      return res.status(401).json({
        success: false,
        message: 'user.permission.denied'
      })
    }

    next()
  }
}

module.exports = { papeis, permicoes }
