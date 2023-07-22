const LoadingRec = () => {
  return new Array(4).fill(0).map((_, index) => {
    return (
      <>
        <div className="movie__wrapper" key={index}>
          <div className="movie__poster--skeleton">
            <figure className="movie__img--wrapper">
              <img className="movie__img" />
            </figure>
          </div>
        </div>
      </>
    );
  });
};

export default LoadingRec;
