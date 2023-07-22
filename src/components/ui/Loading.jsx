const Loading = () => {
  return (
    <>
      <div className="movie__selected">
        <figure className="movie__selected--figure">
          <div className="movie__img--skeleton">
            <img className="movie__selected--img" />
          </div>
        </figure>
        <div className="movie__selected--description">
          <div className="movie__selected--description-top">
            <div className="movie__top--skeleton">
              <h2 className="movie__selected--title"></h2>
              <h2 className="movie__selected--year"></h2>
            </div>
          </div>
          <div className="movie__selected--description-details">
            <div className="info--wrapper">
              <div className="movie__info--skeleton">
                <h2 className="movie__details-title"></h2>
                <h3 className="movie__details"></h3>
              </div>
            </div>
            <div className="info--wrapper">
              <div className="movie__info--skeleton">
                <h2 className="movie__details-title"></h2>
                <h3 className="movie__details"></h3>
              </div>
            </div>
            <div className="info--wrapper">
              <div className="movie__info--skeleton">
                <h2 className="movie__details-title"></h2>
                <h3 className="movie__details"></h3>
              </div>
            </div>
            <div className="info--wrapper">
              <div className="movie__info--skeleton-para">
                <h2 className="movie__details-title"></h2>
                <p className="movie__details para"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
