import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import BreadCrumbs from '../../../components/BreadCrumbs'
import HeaderTitle from '../../../components/HeaderTitle'
import { Context } from '../../../providers/contexts/context'
import apiService from '../../../providers/services/api-service'

export default function StaffListPage() {
  const { token } = useContext(Context)
  const [staffs, setStaffs] = useState([])

  useEffect(() => {
    apiService.setToken(token).getStaffs().then(setStaffs)
  }, [token])

  const handleDelete = (id) => {
    if (!confirm('Você realmente quer excluir este registro?')) {
      return
    }

    apiService
      .setToken(token)
      .deleteStaff(id)
      .then((res) => {
        if (!res.success) {
          return
        }

        setStaffs((staffs) => staffs.filter((s) => s.id != id))
      })
  }

  return (
    <div className="container p-3">
      <BreadCrumbs path={'Staff/'} />

      <HeaderTitle
        title="Staff"
        subtitle="Encarregados das execuções das tarefas"
      >
        <NavLink className="btn btn-sm btn-dark" to="form">
          <i className="bx bxs-plus-circle meu2"></i> Adicionar
        </NavLink>
      </HeaderTitle>

      <div className="card p-2">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Nome</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {staffs.map((s) => {
              return (
                <tr className="align-middle" key={s.id}>
                  <td>{s.nome}</td>
                  <td className="text-end">
                    <NavLink
                      className="btn btn-sm text-secondary"
                      to={`form/${s.id}`}
                    >
                      <i className="bx bx-pencil"></i>
                    </NavLink>

                    <button
                      className="btn btn-sm text-secondary"
                      onClick={() => handleDelete(s.id)}
                    >
                      <i className="bx bx-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
