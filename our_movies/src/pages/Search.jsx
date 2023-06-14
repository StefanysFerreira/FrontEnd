import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const itemsPerPage = 6;

import "./MoviesGrid.css";
import { FaSadCry, FaSadTear } from "react-icons/fa";
import { BiSad } from "react-icons/bi";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
    setTotalPages(Math.ceil(data.results.length / itemsPerPage));
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    smoothScrollToTop(); // Rolagem suave para o topo da página
  };

  const smoothScrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuart",
    });
  };

  const renderMovies = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const moviesToShow = movies.slice(startIndex, endIndex);

    return moviesToShow.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ));
  };

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
        {movies.length === 0 && (
          <h1 className="filme-erro">
            Filme não encontrado em nossa base de dados!{" "}
            <FaSadTear color="#f7d354" />
          </h1>
        )}
      </h2>
      <div className="movies-container">{renderMovies()}</div>
      {totalPages > 1 && (
        <div className="pagination-container">
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
              <button
                key={pageNumber}
                className={pageNumber === currentPage ? "active" : ""}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
