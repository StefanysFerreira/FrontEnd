import "../pages/EstiloLogin.css"

export default function EmailSenha(props) {
    const validaEmail = {
        required: {
            value: true,
            message: 'Email obrigatório!'
        },
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Email inválido',
          }
    }

    const validaSenha = {
        required: {
            value: true,
            message: 'senha obrigatória!',
        },
        minLength: {
            value: 8,
            message: 'Mínimo 8 caracteres!',
          }
    }
    return (
        <>
            <div className="Email">
                <input className="campo_Email_Usuario"
                    type="email"
                    id="email"
                    placeholder='Insira seu email'
                    {...props.register('email', validaEmail)}
                />
                {props.errors.email && <p className="erroEmail">{props.errors.email.message}</p>}
            </div>
            <br></br>
            <div className="Senha">
                <input className="campo_Senha_Usuario"
                    type="password"
                    id="senha"
                    placeholder='Insira sua senha!'
                    {...props.register('senha', validaSenha)}
                />
                {props.errors.senha && <p className="erroSenha">{props.errors.senha.message}</p>}
            </div>
        </>
    )
}