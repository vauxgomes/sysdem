import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Context } from '../../providers/contexts/context'

export default function TopBar() {
  const { handleLogout } = useContext(Context)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
      <div className="container">
        <NavLink className="nav-link text-white" to="/dashboard">
          <span className="s-logo s-logo-sm me-2">Sysdem</span>
        </NavLink>

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-link text-white"
            data-bs-toggle="dropdown"
          >
            <i className="bx bx-menu"></i>
          </button>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
            <li>
              <NavLink
                className="dropdown-item d-flex align-items-center gap-2"
                to="/usuarios"
              >
                <i className="bx bx-user"></i> Usuários
              </NavLink>
            </li>
            <li>
              <NavLink
                className="dropdown-item d-flex align-items-center gap-2"
                to="/staff"
              >
                <i className="bx bx-hard-hat"></i> Staff
              </NavLink>
            </li>
            <li>
              <NavLink
                className="dropdown-item d-flex align-items-center gap-2"
                to="/tipoativos"
              >
                <i className="bx bx-select-multiple"></i> Tipo de Ativos
              </NavLink>
            </li>
            <li>
              <NavLink
                className="dropdown-item d-flex align-items-center gap-2"
                to="/ativos"
              >
                <i className="bx bx-buildings"></i> Ativos
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <NavLink
                className="dropdown-item d-flex align-items-center gap-2"
                to="/perfil"
              >
                <i className="bx bxs-user-circle"></i> Pefil
              </NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <button
                className="dropdown-item d-flex align-items-center gap-2"
                onClick={handleLogout}
              >
                <i className="bx bx-log-out"></i>Sair
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
