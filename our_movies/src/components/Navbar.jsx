import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiLogIn, BiSearchAlt2 } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import UserContext from "./UserContext";
import { useContext } from "react";
import "./Navbar.css";


export default function Navbar () {
  const [search, setSearch] = useState("");
  const { userId, handleLogout } = useContext(UserContext)
  const navigate = useNavigate();

  async function handleSair (){
    await handleLogout()
    navigate("/")
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");

    
  }

  return (
    <nav id="navbar">
      <h2>
        <Link className="btnGoHome" to="/">
          <BiCameraMovie /> OurMovies
        </Link>
      </h2>

      <form id="formBtn" onSubmit={handleSubmit}>
        <Link className="btnPerfil" to='/perfil'>
          <BsPerson />
          </Link>       
        <input
          type="text"
          placeholder="Qual filme procura?"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
        {/* <Link to={}>
        <BiSearchAlt2  type="submit"/>
        </Link> */}
       
       <button onClick={handleSair}><BiLogIn/></button>

      </form>
    </nav>
  );
};
