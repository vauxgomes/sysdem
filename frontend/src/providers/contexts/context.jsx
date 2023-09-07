import { createContext, useState } from 'react'
import tokenService from '../services/token-service'

export const Context = createContext()
export default function ContextProvider({ children }) {
  const [token, setToken] = useState(tokenService.getToken())
  const [isAuthenticated, setAuthenticated] = useState(
    tokenService.isAuthorized()
  )

  const handleLogin = ({ token }) => {
    tokenService.setToken(token)
    setToken(token)
    setAuthenticated(tokenService.isAuthorized())
  }

  const handleLogout = () => {
    tokenService.clear()
    setAuthenticated(false)
  }

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        token,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </Context.Provider>
  )
}
