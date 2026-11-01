import style from "./footer.module.scss";
import logo from "./../../assets/images/Logo.webp";

import facebok from "./images/facebok.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/lin.svg";

import email from "./images/email.svg";
import phone from "./images/phone.svg";
import location from "./images/location.svg";

const Footer = () => {
  return (
    <footer className={`container ${style.footer}`}>
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

        <div className={style.nav__contactButton}>
          <div className={style.nav__media_link}>
            <img src={facebok} alt="facebook" />
          </div>
          <div className={style.nav__media_link}>
            <img src={twitter} alt="twitter" />
          </div>
          <div className={style.nav__media_link}>
            <img src={linkedin} alt="linkedin" />
          </div>
        </div>
      </nav>

      <div className={style.footer__contact}>
        <div className={style.footer__contact_info}>
          <a
            className={style.footer__contact_link}
            href="mailto:info@catalystanalytics.com"
          >
            <img src={email} alt="email" />
            <span>contact@catalystanalytics.io</span>
          </a>
          <a className={style.footer__contact_link} href="tel:+1-123-456-7890">
            <img src={phone} alt="phone" />
            <span>+1 (123) 456-7890</span>
          </a>
          <a
            className={style.footer__contact_link}
            href="location:123 Main St, City, Country"
          >
            <img src={location} alt="location" />
            <span>123 Main St, City, Country</span>
          </a>
        </div>

        <div className={style.footer__policy_links}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>

      <div className={style.footer__copyright}>
        <p>© 2025 Catalyst Analytics. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
