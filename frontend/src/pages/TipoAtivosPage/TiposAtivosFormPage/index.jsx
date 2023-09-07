import { NavLink } from 'react-router-dom'

import HeaderTitle from '../../../components/HeaderTitle'
import BreadCrumbs from '../../../components/BreadCrumbs'

export default function TipoAtivosFormPage() {
  return (
    <div className="container p-3">
      <BreadCrumbs path="Tipos Ativos/Formulário" />

      <HeaderTitle
        title="Tipos de Ativos"
        subtitle="Os tipos são categorias de ativos da instituição"
      >
        <NavLink className="btn btn-sm btn-dark" to="/tipoativos">
          <i className="bx bx-list-ul me-2"></i> Listar
        </NavLink>
      </HeaderTitle>

      <form className="row g-2">
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
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <textarea
            id="descricao"
            className="form-control"
            placeholder="Descreva sua demanda"
            rows={4}
            required
          ></textarea>
        </div>

        <div className="col-12">
          <button className="btn btn-primary s-btn-flex">Salvar</button>
        </div>
      </form>
    </div>
  )
}
