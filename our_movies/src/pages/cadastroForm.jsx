import {useForm} from 'react-hook-form'
import "./cadastro.css"
import UserContext from '../components/UserContext';
import { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import EmailSenha from '../components/emailSenha';
import NomeUsuario from '../components/Nome'
import Login from './Login';

const CadastroForm = () => {
  const {register, handleSubmit, formState: {errors}} =useForm();
  const [erroRegistrar, setErroRegistrar] = useState()
  const navigate = useNavigate()
  const {handleRegistrar} = useContext(UserContext)

  async function onSubmit(data) {
    const {nome, email, senha } = data;
    setErroRegistrar("")
    try{
    await handleRegistrar(nome, email, senha)
    navigate("/")
    }catch(error) {
      setErroRegistrar(error.message)
    }
  }
  

  function voltarTelaLogin(){
    navigate('/')
  }

  return (
    <form className='formCadastro' onSubmit={handleSubmit(onSubmit)}>
      <div className='caixaNome'>
      <h1>Cadastar-se</h1>
        {erroRegistrar && <p>{erroRegistrar}</p>}
      </div>
      <NomeUsuario register = {register} errors= {errors}/>
      <EmailSenha register = {register} errors= {errors}/>
      
      <button className='btnCadastro'>Cadastrar</button>
      <button className='btnVoltarTela' onClick={voltarTelaLogin}>Voltar</button>
    </form>
  );
};

export default CadastroForm;
