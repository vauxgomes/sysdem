import { NavLink } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <>
      <div className="container p-3 d-flex flex-column align-items-center justify-content-center gap-2 h-100">
        <i className="bx bx-error-alt bx-lg text-danger"></i>
        <h1 className="mb-0">Página não encontrada</h1>
        <p className="text-secondary mb-0">
          Esta página ainda não foi construída!
        </p>
        <NavLink to={'/'} className="btn btn-sm btn-secondary mt-5">
          Clique aqui para voltar!
        </NavLink>
      </div>
    </>
  )
}
