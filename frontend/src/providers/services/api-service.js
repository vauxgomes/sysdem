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

  // TIPO ATIVOS

  async getAtivos() {
    const response = await this.api.get('/ativos', this.config)
    return response.data
  }

  async getAtivo(id) {
    const response = await this.api.get(`/ativos/${id}`, this.config)
    return response.data
  }

  async postAtivo({ nome, descricao, tipo_id }) {
    const response = await this.api.post(
      '/ativos',
      { nome, descricao, tipo_id },
      this.config
    )
    return response.data
  }

  async putAtivo(id, { nome, descricao, tipo_id }) {
    const response = await this.api.put(
      `/ativos/${id}`,
      { nome, descricao, tipo_id },
      this.config
    )
    return response.data
  }

  async deleteAtivo(id) {
    const response = await this.api.delete(`/ativos/${id}`, this.config)
    return response.data
  }

  // STAFF

  async getStaffs() {
    const response = await this.api.get('/staff', this.config)
    return response.data
  }

  async getStaff(id) {
    const response = await this.api.get(`/staff/${id}`, this.config)
    return response.data
  }

  async postStaff({ nome }) {
    const response = await this.api.post('/staff', { nome }, this.config)
    return response.data
  }

  async putStaff(id, { nome, descricao }) {
    const response = await this.api.put(`/staff/${id}`, { nome }, this.config)
    return response.data
  }

  async deleteStaff(id) {
    const response = await this.api.delete(`/staff/${id}`, this.config)
    return response.data
  }
}

export default new APIService()
