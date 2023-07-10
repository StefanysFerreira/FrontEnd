import { createContext, useState } from 'react'
import{ login, logout, registrar } from '../services/AuthService'

const UserContext = createContext({
  userId: null,
  logado: false,
  handleLogin: () => { },
  handleLogout: () => { },
  handleRegistrar: () => { },
})

export function UserContextProvider(props) {

  const [currentUser, setCurrentUser] = useState({ user: null, logado: false })
  const [filmesFavoritos, setFavoritos] = useState([])

  async function handleRegistrar(nome, email, senha) {
    try {
      const user = await registrar(nome, email, senha)
    } catch(error){
      throw Error(error.message)
    }
    
  }

  async function handleLogin(email, senha) {
    try {
      const user = await login(email, senha)
    setCurrentUser({ user: user, logado: true })
    } catch(error){
      throw Error(error.message)
    }
    
  }

  async function handleLogout() {
    await logout()
    setCurrentUser({ userId: null, logado: false })
  }

  const contexto = {
    user: currentUser.user,
    logado: currentUser.logado,
    filmesFavoritos, setFavoritos,
    handleLogin,
    handleLogout,
    handleRegistrar,
  }

  return (
    <UserContext.Provider value={contexto}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContext;