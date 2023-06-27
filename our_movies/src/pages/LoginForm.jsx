import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import UserContext from '../components/UserContext'
import EmailSenha from '../components/emailSenha'

import "./EstiloLogin.css"

export default function LoginForm(props) {
  const navigate = useNavigate()
  const [errorLogin, setErrorLogin] = useState("")
  const { handleLogin } = useContext(UserContext)
  const {register, handleSubmit, formState: {errors}} =useForm();

  async function onSubmit(data) {
    const { email, senha } = data;
    setErrorLogin("")
    try{
    await handleLogin(email, senha)
    // navigate("/")
    }catch(error) {
      setErrorLogin(error.message)
    }
  }
  
  function irTelaCadastro(){
    navigate("/cadastrar")
  }
   function PodeAvancar() {
    navigate("/")
   }
  return (
    <form className="formulario" onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      {errorLogin && <p>{errorLogin}</p>}
      <EmailSenha register = {register} errors= {errors}/> 
      <button className="btnEntrar">Entrar</button>
      <br></br>
      <br></br>
      <button className="btnCadastrar" onClick={irTelaCadastro}>Cadastre-se</button>
      
    </form>
  )
};