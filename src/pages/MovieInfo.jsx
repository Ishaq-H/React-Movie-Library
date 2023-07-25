import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/ui/Loading";
import LoadingRec from "../components/ui/LoadingRec";

const MovieInfo = () => {
  const { imdbID } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const navigate = useNavigate();

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

      const filteredRecommended = data.Search.filter(
        (movie) => movie.imdbID !== imdbID
      );

      setRecommended(filteredRecommended || []);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handleBackToMoviesClick = () => {
    const searchTerm = localStorage.getItem("movies");
    if (searchTerm) {
      // If the searchTerm is available in local storage, navigate back to the search results page
      navigate("/", { state: { hasSearchTerm: true } });
    } else {
      // If the searchTerm is not available, navigate to the home page
      navigate("/");
    }
  };

  // useEffect(() => {
  //   fetchMovie();
  //   fetchRecommended();
  //   window.scrollTo(0, 0);
  // }, [imdbID]);

  useEffect(() => {
    // Fetch movie and recommended movies
    async function fetchData() {
      try {
        // Fetch the movie first
        await fetchMovie();

        // Then fetch the recommended movies after the movie information is available
        await fetchRecommended();

        setLoading(false); // Set loading to false when both data fetches are complete
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
    window.scrollTo(0, 0);
  }, [imdbID]);

  return (
    <>
      <main id="movie-info">
        <div className="movieInfo__container">
          <div className="movieInfo__row">
            <div className="movieInfo__selected--top">
              <Link
                className="movie__link-arrow"
                onClick={handleBackToMoviesClick}
              >
                <FontAwesomeIcon icon="arrow-left" />
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
