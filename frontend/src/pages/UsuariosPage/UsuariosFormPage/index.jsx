import { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import BreadCrumbs from '../../../components/BreadCrumbs'
import HeaderTitle from '../../../components/HeaderTitle'

import { Context } from '../../../providers/contexts/context'
import apiService from '../../../providers/services/api-service'

export default function UsuariosFormPage() {
  const { id } = useParams()
  const { token } = useContext(Context)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [papel, setPapel] = useState('')

  const [papeis, setPapeis] = useState([])

  useEffect(() => {
    apiService.setToken(token).getLovsPapeis().then(setPapeis)

    if (!id) {
      return
    }

    apiService.getUsuario(id).then((res) => {
      console.log(res)
      setNome(res.nome)
      setEmail(res.email)
      setUsername(res.username)
      setPapel(res.papel)
    })
  }, [token, id])

  const handleSubmit = (e) => {
    e.preventDefault()

    const usuario = { nome, email, username, papel }

    if (id) {
      // Update PUT
      apiService.putUsuario(id, usuario).then((res) => {
        alert('Atualizado com sucesso')
      })
    } else {
      // Create POST
      apiService.postUsuario({ ...usuario, password: '12345' }).then((res) => {
        alert('Criado com sucesso')
      })
    }
  }

  return (
    <div className="container p-3">
      <BreadCrumbs path="Ativos/Formulário" />

      <HeaderTitle title="Usuários" subtitle="Usuários do sistema">
        <NavLink className="btn btn-sm btn-dark" to="/usuarios">
          <i className="bx bx-list-ul me-2"></i> Listar
        </NavLink>
      </HeaderTitle>

      <form className="row g-2" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            id="nome"
            className="form-control"
            placeholder="Nome do Usuário"
            required
            value={nome || ''}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Nome do Usuário"
            required
            value={email || ''}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label htmlFor="username" className="form-label">
            Login
          </label>
          <input
            id="username"
            className="form-control"
            placeholder="Login"
            required
            value={username || ''}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label htmlFor="papel" className="form-label">
            Papel
          </label>
          <select
            id="papel"
            className="form-select"
            required
            value={papel || ''}
            onChange={(e) => setPapel(e.target.value)}
          >
            <option value="" disabled>
              Escolha...
            </option>

            {papeis.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary s-btn-flex">
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}
