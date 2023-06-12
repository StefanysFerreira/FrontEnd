export default function NomeUsuario(props) {
  const validaNomeUsuario = {
    required: {
      value: true,
      message: 'Nome para usuário Obrigatório!'
    }
  }
  return (
    <>
      <div className="NomeUsuario">
        <input
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