import { useRef, useState } from 'react'

import "./EstiloLogin.css"
import { useNavigate } from 'react-router-dom'

export default function LoginForm(props) {
  const navigate = useNavigate()
  const refEmail = useRef()
  const refSenha = useRef()
  const [erroEmail, setErroEmail] = useState()
  const [erroSenha, setErroSenha] = useState()

  function handleSubmit(event) {
    event.preventDefault()
    if (!refEmail.current.value) {
      setErroEmail("Email Obrigatório!")
      refEmail.current.focus()
    } else {
      setErroEmail("")
    }

    if (!refSenha.current.value) {
      setErroSenha("Senha Obrigatória!")
      refSenha.current.focus()
    } else {
      setErroSenha("")
    }

    if (erroEmail != "" || erroSenha != "") {
      return
    }
    
    navigate("/")
    props.onSubmit(event)

  }
  function irTelaCadastro(){
    navigate("/cadastrar")
  }
   function PodeAvancar() {
    navigate("/")
   }
  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <div className="Email">
        <h1>Login</h1>
        {/* <label htmlFor="email">Email</label> */}
        <input type="email" id="email" name="email" ref={refEmail} placeholder="Email" />
        {erroEmail && <p class="erroEmail">{erroEmail}</p>}
      </div>
      <br></br>
      <div className="Senha">
        {/* <label htmlFor="senha">Senha</label> */}
        <input type="password" id="senha" name="senha" ref={refSenha} placeholder="Senha" />
        {erroSenha && <p class="erroSenha">{erroSenha}</p>}
      </div>
      <br></br>
      <button className="btnEntrar" type="submit">Entrar</button>
      <br></br>
      <br></br>
      <button className="btnCadastrar" onClick={irTelaCadastro}>Cadastre-se</button>
      
    </form>
  )
};