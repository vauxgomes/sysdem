import { NavLink } from 'react-router-dom'

import HeaderTitle from '../../../components/HeaderTitle'
import BreadCrumbs from '../../../components/BreadCrumbs'

export default function StaffFormPage() {
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

      <form className="row g-2 mb-4">
        <div className="col-12 mt-0">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            id="nome"
            className="form-control"
            placeholder="Nome da Categoria"
            required
          />
        </div>

        <div className="col-12">
          <button className="btn btn-primary s-btn-flex">Salvar</button>
        </div>
      </form>
    </div>
  )
}
