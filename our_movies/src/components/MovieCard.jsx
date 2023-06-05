import { Link } from "react-router-dom";

import {FaThumbsDown, FaThumbsUp } from "react-icons/fa";
// import { BsHandThumbsDown } from "react-icons/bs";

import { useState } from "react";
import "./avaliar.css"

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const[count, setCount] = useState(0);
  const handlebotaoPositivo = () => setCount((prevCount) => prevCount + 1);
  const handlebotaoNegativo = () => setCount((prevCount) =>  prevCount - 1);

  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <div className="avaliacao">
        <button className="positivo" onClick={handlebotaoPositivo}><FaThumbsUp /></button>
        <p className="contador">{count}</p>
        <button className="negativo" onClick={handlebotaoNegativo}><FaThumbsDown /></button>
      </div>

      
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );

};



export default MovieCard;
