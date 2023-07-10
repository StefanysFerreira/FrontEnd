import { useContext, useEffect, useState } from "react"
import UserContext from "../components/UserContext"
import { obterResultado } from "../services/obterResultado";


import './perfil.css'

const imagesURL = import.meta.env.VITE_IMG;


export default function Perfil() {
 const {user} = useContext(UserContext)
 const [filmesFavoritos, setFilmesFavoritos] = useState([])
 useEffect(() => {
  async function carrega(){
    const favoritos = await obterResultado(user.email)
    setFilmesFavoritos(favoritos)
  }
  carrega()
 })

  return (
    <section>
      <div className="perfil">
        <div className="nomeUsuario">
          <h1>Olá, </h1>
          <h2 className="user">{user.displayName}</h2>
        </div>
        <div className="playlist">
          <h2 className="mensagemPlaylist">Aqui estão seus filmes favoritos:</h2>
        </div>
      </div>
      <div className="playlist__filmes">
      {filmesFavoritos.map((item, key) => <div key={key}>{item.titulo}</div>)}
      </div>
    </section>
  )
}