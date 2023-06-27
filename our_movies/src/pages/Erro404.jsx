import { FaAccessibleIcon, FaAdversal, FaPage4, FaRegEye } from "react-icons/fa";
import { TbError404 } from "react-icons/Tb";
import './Erro.css'

export default function Erro404() {
    return (
        <section className="mensagemErro">
            <TbError404 color="yellow" size={100} />
            <h2 className="mensagem">Por favor, volte para a pagina inicial e efetue seu login para continuar.</h2>
        </section>
    )
}