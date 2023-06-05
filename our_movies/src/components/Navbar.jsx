import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiLogIn, BiLogInCircle, BiSearchAlt2 } from "react-icons/bi";

import "./Navbar.css";
import { BsPerson } from "react-icons/bs";


const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> OurMovies
        </Link>
      </h2>
      <form id="formBtn" onSubmit={handleSubmit}>
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
       
          <Link className="btnLogin" to="/login">
          <BsPerson />
          </Link>


      </form>
    </nav>
  );
};

export default Navbar;