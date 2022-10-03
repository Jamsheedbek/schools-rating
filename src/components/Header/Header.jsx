import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./header.scss";

const Header = () => {
  const setActiveMenu = (e) => {
    if (e.target.matches(".header__item")) {
      console.log(e.target);
      const links = document.querySelectorAll(".header__item");
      links.forEach((e) => {
        e.classList.remove("header__item-active");
      });
      e.target.classList.add("header__item-active");
    }
  };
  return (
    <>
      <div className="header">
        <Container>
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__link" to={"/"}>
                <img
                  className="header__image"
                  src={Logo}
                  alt="pic"
                  width={160}
                  height={110}
                />
              </Link>
              <div className="header__list" onClick={(e) => setActiveMenu(e)}>
                <Link className="header__item header__item-active" to={"/"}>
                  Reytinglar
                </Link>
                <Link className="header__item" to={"/news"}>
                  Yangiliklar
                </Link>
                <Link className="header__item" to={"/about"}>
                  Loyiha haqida
                </Link>
              </div>
            </div>
            <span className="header__right">
              <span className="header__language">O'zbekcha</span>
              <ul className="header__right-list">
                <li className="header__right-item">Русский</li>
                <li className="header__right-item">Ўзбекча</li>
              </ul>
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
