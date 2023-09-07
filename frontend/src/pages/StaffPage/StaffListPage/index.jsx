import { NavLink } from 'react-router-dom'
import HeaderTitle from '../../../components/HeaderTitle'
import BreadCrumbs from '../../../components/BreadCrumbs'
import TokenService from '../../../providers/services/token-service'

export default function StaffListPage() {
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
            <tr className="align-middle">
              <td>Exemplo Staff 1</td>
              <td className="text-end">
                <button className="btn btn-sm text-secondary">
                  <i className="bx bx-pencil"></i>
                </button>

                <button className="btn btn-sm text-secondary">
                  <i className="bx bx-trash-alt"></i>
                </button>
              </td>
            </tr>

            <tr className="align-middle">
              <td>Exemplo Staff 2</td>
              <td className="text-end">
                <button className="btn btn-sm text-secondary">
                  <i className="bx bx-pencil"></i>
                </button>

                <button className="btn btn-sm text-secondary">
                  <i className="bx bx-trash-alt"></i>
                </button>
              </td>
            </tr>

            <tr className="align-middle">
              <td>Exemplo Staff 2</td>
              <td className="text-end">
                <button className="btn btn-sm text-secondary">
                  <i className="bx bx-pencil"></i>
                </button>

                <button className="btn btn-sm text-secondary">
                  <i className="bx bx-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
