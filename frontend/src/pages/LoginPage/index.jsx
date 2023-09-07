import { useContext, useState } from 'react'

import { Context } from '../../providers/contexts/context'
import apiService from '../../providers/services/api-service'

function LoginPage() {
  const { handleLogin } = useContext(Context)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    apiService.login(username, password).then(handleLogin)
  }

  return (
    <div className="s-page s-page-dark d-flex align-items-center justify-content-center">
      <div className="s-bg-dark rounded px-3 py-3" style={{ width: 325 }}>
        <h1 className="s-logo mb-0">Sysdem</h1>
        <p className="text-secondary">Bem vindo de volta</p>

        <form className="row gap-3" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="username" className="form-label">
              Login
            </label>
            <input
              id="username"
              className="form-control"
              placeholder="Nome de Usuário"
              required
              value={username || ''}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
              required
              value={password || ''}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="col-12 d-grid">
            <button className="btn btn-primary s-btn-flex">Entrar</button>
          </div>

          <div className="col-12 d-grid">
            <button type="button" className="btn btn-dark s-btn-flex">
              Voltar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
