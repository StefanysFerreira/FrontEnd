import { Link } from "react-router-dom";

import {FaThumbsDown, FaThumbsUp } from "react-icons/fa";

import { useState } from "react";
import "./avaliar.css"
import Star from "./star";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {

  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2> 
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );

};



export default MovieCard;
