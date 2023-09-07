import axios from 'axios'

class APIService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL
    })
  }

  setToken(token) {
    this.config = {
      headers: {
        Authorization: token
      }
    }

    return this
  }

  // LOGIN

  async login(username, password) {
    const response = await this.api.post('/login', { username, password })
    return response.data
  }

  // TIPO ATIVOS

  async getTipoAtivos() {
    const response = await this.api.get('/tipoativos', this.config)
    return response.data
  }

  async getTipoAtivo(id) {
    const response = await this.api.get(`/tipoativos/${id}`, this.config)
    return response.data
  }

  async postTipoAtivo({ nome, descricao }) {
    const response = await this.api.post(
      '/tipoativos',
      { nome, descricao },
      this.config
    )
    return response.data
  }

  async putTipoAtivo(id, { nome, descricao }) {
    const response = await this.api.put(
      `/tipoativos/${id}`,
      { nome, descricao },
      this.config
    )
    return response.data
  }

  async deleteTipoAtivo(id) {
    const response = await this.api.delete(`/tipoativos/${id}`, this.config)
    return response.data
  }
}

export default new APIService()
