import { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import BreadCrumbs from '../../../components/BreadCrumbs'
import HeaderTitle from '../../../components/HeaderTitle'
import { Context } from '../../../providers/contexts/context'
import apiService from '../../../providers/services/api-service'

export default function TipoAtivosFormPage() {
  let { id } = useParams()
  const { token } = useContext(Context)

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    apiService.setToken(token)

    if (!id) {
      return
    }

    apiService.getTipoAtivo(id).then((res) => {
      setNome(res.nome)
      setDescricao(res.descricao)
    })
  }, [token, id])

  const handleSubmit = (e) => {
    e.preventDefault()

    const tipoAtivo = { nome, descricao }

    if (id) {
      // Update PUT
      apiService.putTipoAtivo(id, tipoAtivo).then((res) => {
        alert('Atualizado com sucesso')
      })
    } else {
      // Create POST
      apiService.postTipoAtivo(tipoAtivo).then((res) => {
        alert('Criado com sucesso')
      })
    }
  }

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

      <form className="row g-2" onSubmit={handleSubmit}>
        <div className="col-12 mt-0">
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
