import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import apiService from '../../providers/services/api-service'

export default function DemandasPage() {
  const [tipoAtivo, setTipoAtivo] = useState('')
  const [ativo, setAtivo] = useState('')
  const [descricao, setDescricao] = useState('')

  const [tipoAtivos, setTipoAtivos] = useState([])
  const [ativos, setAtivos] = useState([])

  useEffect(() => {
    apiService.getTipoAtivos().then(setTipoAtivos)
  }, [null])

  useEffect(() => {
    if (!tipoAtivo) {
      return
    }

    setAtivo('')
    apiService.getAtivosByTipo(tipoAtivo).then(setAtivos)
  }, [tipoAtivo])

  const handleSubmit = (e) => {
    e.preventDefault()

    const demanda = { descricao, ativo_id: ativo }

    apiService.postDemanda(demanda).then((res) => {
      if (res.success) {
        alert('Demanda enviada com sucesso')

        setTipoAtivo('')
        setAtivo('')
        setDescricao('')
      }
    })
  }

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
              <form
                className="s-bg-dark rounded px-2 py-3 row gap-3"
                onSubmit={handleSubmit}
              >
                <div className="col-12">
                  <label htmlFor="tipoDemanda" className="form-label">
                    Tipo de demanda
                  </label>
                  <select
                    id="tipoDemanda"
                    className="form-select"
                    required
                    value={tipoAtivo || ''}
                    onChange={(e) => setTipoAtivo(e.target.value)}
                  >
                    <option value="" disabled>
                      Escolha...
                    </option>

                    {tipoAtivos.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.nome}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-12">
                  <label htmlFor="local" className="form-label">
                    Local
                  </label>
                  <select
                    id="local"
                    className="form-select"
                    required
                    value={ativo || ''}
                    onChange={(e) => setAtivo(e.target.value)}
                  >
                    <option value="" disabled>
                      Escolha...
                    </option>

                    {ativos.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.nome}
                      </option>
                    ))}
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
                    value={descricao || ''}
                    onChange={(e) => setDescricao(e.target.value)}
                  ></textarea>
                </div>

                <div className="col">
                  <div className="row g-2">
                    <div className="col d-grid">
                      <button className="btn btn-success">Enviar</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </main>

        <footer className="my-5 text-secondary text-end">
          Sistema de Demandas
        </footer>
      </div>
    </div>
  )
}
