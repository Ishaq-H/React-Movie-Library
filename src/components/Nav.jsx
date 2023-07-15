import { Link } from "react-router-dom";
import Logo from "../assets/logo.jpg";

const Nav = () => {
  return (
    <>
      <nav>
        <Link
          className="nav__logo--wrapper"
          // onClick=window.location.reload()
          to="/"
        >
          <img src={Logo} alt="" className="nav__logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__link--wrapper">
            <Link
              to="/"
              className="nav__link link__hover-effect link__hover-effect--black"
            >
              Home
            </Link>
          </li>
          <li className="nav__link--wrapper">
            <Link
              to="/"
              className="nav__link link__hover-effect link__hover-effect--black"
            >
              Movies
            </Link>
          </li>
          <li className="nav__link--wrapper">
            <Link
              to="/"
              className="nav__link link__hover-effect link__hover-effect--black"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
