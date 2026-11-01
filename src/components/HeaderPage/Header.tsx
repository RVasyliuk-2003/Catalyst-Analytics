import style from "./header.module.scss";
import logo from "./../../assets/images/Logo.webp";

import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className={style.nav}>
        <div className={style.nav__logo}>
          <img src={logo} alt="Logo" />
          <p className={style.nav__logo_text}>
            Catalyst <br /> Analytics
          </p>
        </div>

        <div className={style.nav__links}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>

        <Link to="/contact-us" className={style.nav__contactButton}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
