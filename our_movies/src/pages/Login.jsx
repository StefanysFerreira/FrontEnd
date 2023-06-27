import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import "./EstiloLogin.css"

export default function Login(props) {

    function handleClick(event) {
        props.onLogin(event);
        // navigate("/");
    }

    return (
        <>
            {/* <h1>Login</h1> */}
            <LoginForm onSubmit={handleClick} />
        </>
    )
}