import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import { FaHeart } from "react-icons/fa";

import MovieCard from "../components/MovieCard";

import "./Movie.css";
import { curtir, descurtir, obterCurtidas } from "../services/curtidasService";
import UserContext from "../components/UserContext";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [movieId, setMovieId] = useState(null);
  const {user} = useContext(UserContext)


  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
    setMovieId(id);
  }, [id]);


  function VoltarHome() {
    navigate("/")
  }

  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    // Aqui você pode adicionar a lógica para adicionar/remover o filme da playlist de favoritos
    if(!isFavorite){
      curtir (movieId, user.email)
    } else {
      descurtir(movieId, user.email)
      console.log("chegou")
    }
  };

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>

          <div className="avaliar">
            <h2>Adicionar o filme aos favoritos:</h2>
            <FaHeart
              className={isFavorite ? 'heart-icon favorite' : 'heart-icon'}
              onClick={handleFavoriteClick}
              style={{ color: isFavorite ? 'red' : 'gray', cursor: "pointer", transition:"0.5s" }}
            />
          </div>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
          
        </>
      )}
      <div className="retornar">
        <button className="btnRetornar" onClick={VoltarHome}>Voltar ao início</button>
      </div>
    </div>
  );
};

export default Movie;
