import { NavLink } from 'react-router-dom'

import BreadCrumbs from '../../../components/BreadCrumbs'
import HeaderTitle from '../../../components/HeaderTitle'

import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../providers/contexts/context'
import apiService from '../../../providers/services/api-service'

export default function TipoAtivosListPage() {
  const { token } = useContext(Context)
  const [tipoAtivos, setTipoAtivos] = useState([])

  useEffect(() => {
    apiService.getTipoAtivos().then(setTipoAtivos)
  }, [token])

  const handleDelete = (id) => {
    if (!confirm('Você realmente quer excluir este registro?')) {
      return
    }

    apiService
      .setToken(token)
      .deleteTipoAtivo(id)
      .then((res) => {
        if (!res.success) {
          return
        }

        setTipoAtivos((tipos) => tipos.filter((t) => t.id != id))
      })
  }

  return (
    <div className="container p-3">
      <BreadCrumbs path="Tipos Ativos/" />

      <HeaderTitle
        title="Tipos de Ativos"
        subtitle="Os tipos são categorias de ativos da instituição"
      >
        <NavLink className="btn btn-sm btn-dark" to="form">
          <i className="bx bxs-plus-circle me-2"></i>Adicionar
        </NavLink>
      </HeaderTitle>

      <div className="card p-2">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tipoAtivos.map((t) => (
              <tr className="align-middle" key={t.id}>
                <td>{t.nome}</td>
                <td>{t.descricao}</td>
                <td className="text-end">
                  <NavLink
                    className="btn btn-sm text-secondary"
                    to={`form/${t.id}`}
                  >
                    <i className="bx bx-pencil"></i>
                  </NavLink>

                  <button
                    className="btn btn-sm text-secondary"
                    onClick={() => handleDelete(t.id)}
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
