import { Link } from "react-router-dom";

import {FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <BsHandThumbsUp />{movie.vote_average}<BsHandThumbsDown/></p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
