import style from "./header.module.scss";
import logo from "./../../assets/images/Logo.webp";

const Header = () => {
  return (
    <header className="container">
      <nav className={style.nav}>
        <div className={style.nav__logo}>
          <img src={logo} alt="Logo" />
          <p className={style.nav__logo_text}>
            Catalyst <br /> Analytics
          </p>
        </div>

        <div className={style.nav__links}>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">About Us</a>
          <a href="#">Career</a>
        </div>

        <a className={style.nav__contactButton} href="#">
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;
