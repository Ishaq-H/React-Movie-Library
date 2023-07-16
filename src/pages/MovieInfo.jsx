import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Poster from "../assets/poster.jpg";

const MovieInfo = () => {
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
            <div className="movie__selected">
              <figure className="movie__selected--figure">
                <img src={Poster} alt="" className="movie__selected--img" />
              </figure>
              <div className="movie__selected--description">
                <div className="movie__selected--description-top">
                  <h2 className="movie__selected--title">Spider Man</h2>
                  <h2 className="movie__selected--year">(2002)</h2>
                </div>
                <div className="movie__selected--description-details">
                  <h2 className="movie__details-title">Director:</h2>
                  <h3 className="movie__details">Sam Raimi</h3>
                  <h2 className="movie__details-title">Writers:</h2>
                  <h3 className="movie__details">Stan Lee, Steve Ditko</h3>
                  <h2 className="movie__details-title">Actors:</h2>
                  <h3 className="movie__details">Toby Maguire</h3>
                  <h2 className="movie__details-title">Plot:</h2>
                  <p className="movie__details para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas repellendus consectetur veritatis provident odio,
                    dolor molestiae ipsam nulla nemo sapiente eveniet iste ab
                    sed exercitationem corrupti, velit dolorum deserunt iusto!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="movieInfo__container movies-recommended">
          <div className="movieInfo__row">
            <div className="movieInfo__selected--top">
              <h2 className="movie__selected--title--top">Recommended</h2>
            </div>
            <div className="movies">
              <div className="movie">
                <Link to="/">
                  <figure className="movie__img--wrapper">
                    <img src={Poster} alt="" className="movie__img" />
                  </figure>
                </Link>
                <div className="movie__name">
                  <Link to="/">Spider Man</Link>
                </div>
                <div className="movie__ratings">7.1</div>
                <div className="movie__release">03 Apr 2015</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MovieInfo;
