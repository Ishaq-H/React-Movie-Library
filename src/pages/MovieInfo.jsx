import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";
import LoadingRec from "../components/ui/LoadingRec";

const MovieInfo = () => {
  const { imdbID } = useParams();
  const [loading, setLoading] = useState();
  const [movie, setMovie] = useState([]);
  const [recommended, setRecommended] = useState([]);

  async function fetchMovie() {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=bdab0567&i=${imdbID}`
      );
      setMovie(data || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchRecommended() {
    setLoading(true);
    try {
      const searchTerm = localStorage.getItem("movies");
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=bdab0567&s=${searchTerm}`
      );
      setRecommended(data.Search || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMovie();
    fetchRecommended();
  }, [imdbID]);

  return (
    <>
      <main id="movie-info">
        <div className="movieInfo__container">
          <div className="movieInfo__row">
            <div className="movieInfo__selected--top">
              <Link to="/" className="movie__link-arrow">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/" className="movie__link-name">
                <h2 className="movie__selected--title--top">Movies</h2>
              </Link>
            </div>
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className="movie__selected">
                  <figure className="movie__selected--figure">
                    <img
                      src={movie.Poster}
                      alt=""
                      className="movie__selected--img"
                    />
                  </figure>
                  <div className="movie__selected--description">
                    <div className="movie__selected--description-top">
                      <h2 className="movie__selected--title">{movie.Title}</h2>
                      <h2 className="movie__selected--year">({movie.Year})</h2>
                    </div>
                    <div className="movie__selected--description-details">
                      <div className="info--wrapper">
                        <h2 className="movie__details-title">Director:</h2>
                        <h3 className="movie__details">{movie.Director}</h3>
                      </div>
                      <div className="info--wrapper">
                        <h2 className="movie__details-title">Writers:</h2>
                        <h3 className="movie__details">{movie.Writer}</h3>
                      </div>
                      <div className="info--wrapper">
                        <h2 className="movie__details-title">Actors:</h2>
                        <h3 className="movie__details">{movie.Actors}</h3>
                      </div>
                      <div className="info--wrapper">
                        <h2 className="movie__details-title">Plot:</h2>
                        <p className="movie__details para">{movie.Plot}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="movieInfo__container movies-recommended">
          <div className="movieInfo__row">
            <div className="movieInfo__selected--top">
              <h2 className="movie__selected--title--top">Recommended</h2>
            </div>
            <div className="movies">
              {loading ? (
                <LoadingRec />
              ) : (
                recommended
                  .map((recommend) => (
                    <div className="movie" key={recommend.imdbID}>
                      <Link to={`/movies/${recommend.imdbID}`}>
                        <figure className="movie__img--wrapper">
                          <img
                            src={recommend.Poster}
                            alt=""
                            className="movie__img"
                          />
                        </figure>
                      </Link>
                    </div>
                  ))
                  .slice(0, 4)
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MovieInfo;
