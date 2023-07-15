import { Link } from "react-router-dom";
import Footer_Logo from "../assets/footer logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer__row">
            <Link to="/">
              <figure className="footer__logo--wrapper">
                <img src={Footer_Logo} alt="" className="footer__logo" />
              </figure>
            </Link>
            <ul className="footer__link--list">
              <li className="footer__link--wrapper">
                <Link
                  to="/"
                  className="footer__link link__hover-effect link__hover-effect--black"
                >
                  Android App
                </Link>
              </li>
              <li className="footer__link--wrapper">
                <Link
                  to="/"
                  className="footer__link link__hover-effect link__hover-effect--black"
                >
                  Terms of service
                </Link>
              </li>
              <li className="footer__link--wrapper">
                <Link
                  to="/"
                  className="footer__link link__hover-effect link__hover-effect--black"
                >
                  Contact
                </Link>
              </li>
              <li className="footer__link--wrapper">
                <Link
                  to="/"
                  className="footer__link link__hover-effect link__hover-effect--black"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
            <span className="footer__description">
              Cinepop is a free movies site with zero ads. We let you search
              movies online without having to register or pay. We have over 1000
              movies for you to look up!
            </span>
            <div className="footer__copyright">Copyright © Cinepop 2023</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
