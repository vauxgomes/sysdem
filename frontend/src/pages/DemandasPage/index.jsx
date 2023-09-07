import { NavLink } from 'react-router-dom'

export default function DemandasPage() {
  return (
    <div className="s-page s-page-dark p-5">
      <div className="container d-flex flex-column justify-content-between h-100">
        <main>
          <header className="d-flex align-items-center justify-content-between mb-5">
            <h1 className="s-logo mb-0">Sysdem</h1>
            <NavLink className="btn btn-sm btn-secondary" to="/dashboard">
              Login
            </NavLink>
          </header>

          <div className="row gap-2">
            <div className="col-12">
              <h3>Demandas</h3>
            </div>

            <div className=" col-md-12 col-lg-6">
              <form className="s-bg-dark rounded px-2 py-3 row gap-3">
                <div className="col-12">
                  <label htmlFor="tipoDemanda" className="form-label">
                    Tipo de demanda
                  </label>
                  <select
                    id="tipoDemanda"
                    className="form-select"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Escolha...
                    </option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="local" className="form-label">
                    Local
                  </label>
                  <select
                    id="local"
                    className="form-select"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Escolha...
                    </option>
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="descricao" className="form-label">
                    Descrição
                  </label>
                  <textarea
                    id="descricao"
                    className="form-control"
                    placeholder="Descreva sua demanda"
                    rows={6}
                    required
                  ></textarea>
                </div>

                <div className="col">
                  <div className="row g-2">
                    <div className="col-2 d-grid">
                      <button className="btn btn-primary s-btn-flex">
                        <i className="bx bxs-camera"></i>
                      </button>
                    </div>

                    <div className="col-10 d-grid">
                      <button className="btn btn-secondary">Enviar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>

        <footer className="sticky-bottom text-secondary text-end">
          Sistema de Demandas
        </footer>
      </div>
    </div>
  )
}
