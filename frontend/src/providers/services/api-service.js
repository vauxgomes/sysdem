import axios from 'axios'

class APIService {
  constructor() {
    this.api = axios.create({
      baseURL: import.meta.env.VITE_API_URL
    })
  }

  async login(username, password) {
    const response = await this.api.post('/login', { username, password })
    return response.data
  }
}

export default new APIService()
