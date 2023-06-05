import React, { useState } from 'react';
import "./cadastro.css"

import { useNavigate } from 'react-router-dom';
const CadastroForm = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);

    setNome('');
    setEmail('');
    setSenha('');

    navigate("/")

  }

  function voltarTelaLogin(){
    navigate("/login")
  }

  return (
    <form className='formCadastro' onSubmit={handleSubmit}>
      <div>
      <h1>Cadastar-se</h1>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder='Insira seu nome'
        />
      </div>
      <br></br>
      <div>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder='Insira seu email'
        />
      </div>
      <br></br>
      <div>
        <input
          type="password"
          id="senha"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          placeholder='Insira sua senha'
        />
      </div>
      <br></br>
      <button className='btnCadastro'>Cadastrar</button>
      <br></br>
      <br></br>
      <button className='btnCadastro' onClick={voltarTelaLogin}>Voltar</button>
    </form>
  );
};

export default CadastroForm;
