const papeis = {
  ROOT: 'ROOT',
  ADMIN: 'ADMIN',
  USER: 'USER'
}

const permissoes = (permissoes) => {
  return (req, res, next) => {
    if (!permissoes.includes(req.user.papel)) {
      return res.status(401).json({
        success: false,
        message: 'user.permission.denied'
      })
    }

    next()
  }
}

module.exports = { papeis, permissoes }
