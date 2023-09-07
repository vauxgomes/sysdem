import jwtDecode from 'jwt-decode'

class TokenService {
  getNome() {
    return localStorage.getItem('nome')
  }

  getPapel() {
    return localStorage.getItem('papel')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  setToken(token) {
    try {
      const decoded = jwtDecode(token)

      localStorage.setItem('token', token)
      localStorage.setItem('nome', decoded.nome)
      localStorage.setItem('papel', decoded.papel)
    } catch (err) {
      this.clear()
    }
  }

  clear() {
    localStorage.removeItem('token')
    localStorage.removeItem('nome')
    localStorage.removeItem('papel')
  }

  isAuthorized() {
    try {
      const token = this.getToken()
      const decoded = jwtDecode(token)

      return decoded.exp * 1000 >= new Date().getTime()
    } catch (err) {
      return false
    }
  }
}

export default new TokenService()
