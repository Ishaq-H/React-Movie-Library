import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popcorn from "../assets/popcorn.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header__padding" id="header">
        <div className="container">
          <div className="header__row">
            <figure className="header__logo--wrapper">
              <Link to="/">
                <img className="header__logo" src={Popcorn} alt="" />
              </Link>
            </figure>
            <div className="header__search">
              <form
                action=""
                className="header__search--submit"
                // onsubmit="onSubmitMovie(event)"
              >
                <input
                  type="text"
                  className="search__input"
                  placeholder="Search movies here"
                  // onchange="onSearchChange(event)"
                />
                <div className="header__search--button">
                  <FontAwesomeIcon icon="magnifying-glass" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
