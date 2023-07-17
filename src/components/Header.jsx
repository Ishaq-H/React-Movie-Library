import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popcorn from "../assets/popcorn.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=bdab0567&s=${searchTerm}`
    );
    setMovies(data.Search || []);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchMovies();
    }
  };

  const handleLogoClick = () => {
    window.location.reload(); // Reload the page
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <header className="header__padding" id="header">
        <div className="container">
          <div className="header__row">
            <figure className="header__logo--wrapper" onClick={handleLogoClick}>
              <Link to="/">
                <img className="header__logo" src={Popcorn} alt="" />
              </Link>
            </figure>
            <div className="header__search">
              <form className="header__search--submit">
                <input
                  type="text"
                  className="search__input"
                  placeholder="Search movies here"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
                <div className="header__search--button" onClick={fetchMovies}>
                  <FontAwesomeIcon icon="magnifying-glass" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
      <div className="movies__bottom">
        {movies
          .map((movie) => (
            <div className="movie__wrapper" key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                <figure className="movie__img--wrapper">
                  <img src={movie.Poster} alt="" className="movie__img" />
                </figure>
                <div className="movie__information">
                  <h2 className="movie__title">{movie.Title}</h2>
                  <h2 className="movie__year">{movie.Year}</h2>
                </div>
              </Link>
            </div>
          ))
          .slice(0, 6)}
      </div>
    </>
  );
};

export default Header;
