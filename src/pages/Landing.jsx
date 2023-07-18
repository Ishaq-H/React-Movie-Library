import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popcorn from "../assets/popcorn.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Header = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=bdab0567&s=${searchTerm}`
    );
    setMovies(data.Search || []);
    setLoading(false);
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchMovies();
    }
  };

  // const handleLogoClick = () => {
  //   window.location.reload(); // Reload the page
  // };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <header className="header__padding" id="header">
        <div className="container">
          <div className="header__row">
            <Link to="/">
              <figure
                className="header__logo--wrapper"
                //onClick={handleLogoClick}
              >
                <img className="header__logo" src={Popcorn} alt="" />
              </figure>
            </Link>
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
                  {!loading ? (
                    <FontAwesomeIcon icon="magnifying-glass" />
                  ) : (
                    <FontAwesomeIcon icon="spinner" spin />
                  )}
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
