import Poster from "../assets/poster.jpg";

const Movies = () => {
  return (
    <>
      <div className="container movies__container">
        <div className="movies__row">
          <div className="movies__top">
            <div className="movies__search">
              Search: <span className="search__results"></span>
            </div>
            <div className="movies__filter">
              <select
                name="filter"
                id="filter" /*onchange="sortMovies(event)"*/
              >
                <option
                  className="movies__filter--option"
                  value=""
                  disabled
                  selected
                >
                  Filter
                </option>
                <option className="movies__filter--option" value="new">
                  Newest
                </option>
                <option className="movies__filter--option" value="old">
                  Oldest
                </option>
              </select>
            </div>
          </div>
          <div className="movies__bottom">
            <div className="movie__wrapper">
              <figure className="movie__img--wrapper">
                <img src={Poster} alt="" className="movie__img" />
              </figure>
              <div className="movie__information">
                <h2 className="movie__title">No movie found</h2>
                <h2 className="movie__year">0000</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
