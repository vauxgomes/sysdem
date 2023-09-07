import { NavLink } from 'react-router-dom'

import BreadCrumbs from '../../../components/BreadCrumbs'
import HeaderTitle from '../../../components/HeaderTitle'

import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../providers/contexts/context'
import apiService from '../../../providers/services/api-service'

export default function AtivosListPage() {
  const { token } = useContext(Context)
  const [ativos, setAtivos] = useState([])

  useEffect(() => {
    apiService.getAtivos().then(setAtivos)
  }, [token])

  const handleDelete = (id) => {
    if (!confirm('Você realmente quer excluir este registro?')) {
      return
    }

    apiService
      .setToken(token)
      .deleteAtivo(id)
      .then((res) => {
        if (!res.success) {
          return
        }

        setAtivos((tipos) => tipos.filter((t) => t.id != id))
      })
  }

  return (
    <div className="container p-3">
      <BreadCrumbs path="Ativos/" />

      <HeaderTitle title="Ativos" subtitle="Todos os ativos da instituição">
        <NavLink className="btn btn-sm btn-dark" to="form">
          <i className="bx bxs-plus-circle me-2"></i>Adicionar
        </NavLink>
      </HeaderTitle>

      <div className="card p-2">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Descrição</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ativos.map((a) => (
              <tr className="align-middle" key={a.id}>
                <td>{a.nome}</td>
                <td>{a.tipo_nome}</td>
                <td>{a.descricao}</td>
                <td className="text-end">
                  <NavLink
                    className="btn btn-sm text-secondary"
                    to={`form/${a.id}`}
                  >
                    <i className="bx bx-pencil"></i>
                  </NavLink>

                  <button
                    className="btn btn-sm text-secondary"
                    onClick={() => handleDelete(a.id)}
                  >
                    <i className="bx bx-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
