import "../pages/cadastro.css"

export default function NomeUsuario(props) {
  const validaNomeUsuario = {
    required: {
      value: true,
      message: 'Nome de usuário Obrigatório!'
    }
  }
  return (
    <>
      <div className="NomeUsuario">
        <input className="campo_Nome_Usuario"
          type="nome"
          id="nome"
          placeholder='Insira seu nome'
          {...props.register('nome', validaNomeUsuario)}
        />
        {props.errors.nome && <p className="erroNomeUsuario">{props.errors.nome.message}</p>}
      </div>
    </>
  )
}