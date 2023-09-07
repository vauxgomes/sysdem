import { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import BreadCrumbs from '../../../components/BreadCrumbs'
import HeaderTitle from '../../../components/HeaderTitle'

import { Context } from '../../../providers/contexts/context'
import apiService from '../../../providers/services/api-service'

export default function StaffFormPage() {
  const { id } = useParams()
  const { token } = useContext(Context)

  const [nome, setNome] = useState('')

  useEffect(() => {
    apiService.setToken(token)

    if (!id) {
      return
    }

    apiService.getStaff(id).then((res) => {
      setNome(res.nome)
    })
  }, [token, id])

  const handleSubmit = (e) => {
    e.preventDefault()

    const staff = { nome }

    if (id) {
      // Update PUT
      apiService.putStaff(id, staff).then((res) => {
        alert('Atualizado com sucesso')
      })
    } else {
      // Create POST
      apiService.postStaff(staff).then((res) => {
        alert('Criado com sucesso')
      })
    }
  }

  return (
    <div className="container p-3">
      <BreadCrumbs path={'Staff/Formulário'} />

      <HeaderTitle
        title="Staff "
        subtitle="Encarregados das execuções das tarefas"
      >
        <NavLink className="btn btn-sm btn-dark" to="/staff">
          <i className="bx bx-list-ul me-2"></i> Listar
        </NavLink>
      </HeaderTitle>

      <form className="row g-2 mb-4" onSubmit={handleSubmit}>
        <div className="col-12 mt-0">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            id="nome"
            className="form-control"
            placeholder="Nome do encarregado"
            required
            value={nome || ''}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary s-btn-flex">Salvar</button>
        </div>
      </form>
    </div>
  )
}
