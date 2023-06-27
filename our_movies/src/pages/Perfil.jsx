import { useContext } from "react"
import UserContext from "../components/UserContext"

import './perfil.css'

export default function Perfil() {
 const {user} = useContext(UserContext)

  return (
    <section>
      <div className="perfil">
        <div className="nomeUsuario">
          <h1>Olá, </h1>
          <h2 className="user">{user.displayName}</h2>
        </div>
        <div className="playlist">
          <h2 className="mensagemPlaylist">Aqui estão seus filmes favoritos:</h2>
          <h3>Não consegui fazer retornar os filmes</h3>
        </div>
      </div>
    </section>
  )
}