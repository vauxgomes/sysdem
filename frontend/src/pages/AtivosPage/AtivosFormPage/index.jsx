import { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import BreadCrumbs from '../../../components/BreadCrumbs'
import HeaderTitle from '../../../components/HeaderTitle'

import { Context } from '../../../providers/contexts/context'
import apiService from '../../../providers/services/api-service'

export default function AtivosFormPage() {
  const { id } = useParams()
  const { token } = useContext(Context)

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [tipoAtivoId, setTipoAtivoId] = useState('')

  const [tipoAtivos, setTipoAtivos] = useState([])

  useEffect(() => {
    apiService.setToken(token).getTipoAtivos().then(setTipoAtivos)

    if (!id) {
      return
    }

    apiService.getAtivo(id).then((res) => {
      setNome(res.nome)
      setDescricao(res.descricao)
      setTipoAtivoId(res.tipo_id)
    })
  }, [token, id])

  const handleSubmit = (e) => {
    e.preventDefault()

    const ativo = { nome, descricao, tipo_id: tipoAtivoId }

    if (id) {
      // Update PUT
      apiService.putAtivo(id, ativo).then((res) => {
        alert('Atualizado com sucesso')
      })
    } else {
      // Create POST
      apiService.postAtivo(ativo).then((res) => {
        alert('Criado com sucesso')
      })
    }
  }

  return (
    <div className="container p-3">
      <BreadCrumbs path="Ativos/Formulário" />

      <HeaderTitle title="Ativos" subtitle="Todos os ativos da instituição">
        <NavLink className="btn btn-sm btn-dark" to="/ativos">
          <i className="bx bx-list-ul me-2"></i> Listar
        </NavLink>
      </HeaderTitle>

      <form className="row g-2" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            id="nome"
            className="form-control"
            placeholder="Nome da Categoria"
            required
            value={nome || ''}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="col-12">
          <label htmlFor="tipo" className="form-label">
            Tipo
          </label>
          <select
            id="tipo"
            className="form-select"
            required
            value={tipoAtivoId || ''}
            onChange={(e) => setTipoAtivoId(e.target.value)}
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
          <label htmlFor="descricao" className="form-label">
            Descrição
          </label>
          <textarea
            id="descricao"
            className="form-control"
            placeholder="Descreva sua demanda"
            rows={4}
            required
            value={descricao || ''}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary s-btn-flex">
            Salvar
          </button>
        </div>
      </form>
    </div>
  )
}
