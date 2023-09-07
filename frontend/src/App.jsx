import { BrowserRouter, Route, Routes } from 'react-router-dom'

import TopBar from './components/TopBar'
import DemandasPage from './pages/DemandasPage'
import ErrorPage from './pages/ErrorPage'
import LoginPage from './pages/LoginPage'
import StaffFormPage from './pages/StaffPage/StaffFormPage'
import StaffListPage from './pages/StaffPage/StaffListPage'
import TipoAtivosFormPage from './pages/TipoAtivosPage/TiposAtivosFormPage'
import TipoAtivosListPage from './pages/TipoAtivosPage/TiposAtivosListPage'
import ContextProvider, { Context } from './providers/contexts/context'
import { useContext } from 'react'

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DemandasPage />} />
          <Route path="*" element={<Organizer />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

function Organizer() {
  const { isAuthenticated } = useContext(Context)

  if (!isAuthenticated) {
    return <LoginPage />
  }

  return (
    <>
      <TopBar />
      <main>
        <Routes>
          <Route path="tipoativos/">
            <Route index element={<TipoAtivosListPage />} />
            <Route path="form" element={<TipoAtivosFormPage />} />
            <Route path="form/:id" element={<TipoAtivosFormPage />} />
          </Route>

          <Route path="staff/">
            <Route index element={<StaffListPage />} />
            <Route path="form" element={<StaffFormPage />} />
            <Route path="form/:id" element={<StaffFormPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
