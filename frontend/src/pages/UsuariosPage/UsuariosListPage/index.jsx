import { NavLink } from 'react-router-dom'

import BreadCrumbs from '../../../components/BreadCrumbs'
import HeaderTitle from '../../../components/HeaderTitle'

import { useContext, useEffect, useState } from 'react'
import { Context } from '../../../providers/contexts/context'
import apiService from '../../../providers/services/api-service'

export default function UsuariosListPage() {
  const { token } = useContext(Context)
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    apiService.setToken(token).getUsuarios().then(setUsuarios)
  }, [token])

  const handleDelete = (id) => {
    if (!confirm('Você realmente quer excluir este registro?')) {
      return
    }

    apiService
      .setToken(token)
      .deleteUsuario(id)
      .then((res) => {
        if (!res.success) {
          return
        }

        setUsuarios((usuarios) => usuarios.filter((u) => u.id != id))
      })
  }

  return (
    <div className="container p-3">
      <BreadCrumbs path="Usuários/" />

      <HeaderTitle title="Usuários" subtitle="Usuários do Sistema">
        <NavLink className="btn btn-sm btn-dark" to="form">
          <i className="bx bxs-plus-circle me-2"></i>Adicionar
        </NavLink>
      </HeaderTitle>

      <div className="card p-2">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Login</th>
              <th>Papel</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr className="align-middle" key={u.id}>
                <td>{u.nome}</td>
                <td className='text-secondary'>{u.email}</td>
                <td>{u.username}</td>
                <td>{u.papel}</td>
                <td className="text-end">
                  <NavLink
                    className="btn btn-sm text-secondary"
                    to={`form/${u.id}`}
                  >
                    <i className="bx bx-pencil"></i>
                  </NavLink>

                  <button
                    className="btn btn-sm text-secondary"
                    onClick={() => handleDelete(u.id)}
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
