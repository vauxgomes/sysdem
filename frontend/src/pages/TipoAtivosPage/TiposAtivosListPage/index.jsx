import { NavLink } from 'react-router-dom'

import BreadCrumbs from '../../../components/BreadCrumbs'
import HeaderTitle from '../../../components/HeaderTitle'

export default function TipoAtivosListPage() {
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="align-middle">
              <td>Exemplo Tipo 1</td>
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
              <td>Exemplo Tipo 2</td>
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
              <td>Exemplo Tipo 2</td>
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
