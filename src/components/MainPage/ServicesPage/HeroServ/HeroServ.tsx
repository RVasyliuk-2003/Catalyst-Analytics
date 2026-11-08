import style from "./heroServ.module.scss";

import frame from "./../../../../assets/images/frame.svg";
import img from "./images/screenshot.webp";

const HeroServ = () => {
  return (
    <section className={style.heroServ}>
      <div className={style.heroServ__textBox}>
        <h1 className={style.heroServ__title}>
          Our Comprehensive <span>Digital Solutions</span>
        </h1>

        <p className={style.heroServ__text}>
          At Catalyst Analytics, we offer a comprehensive suite of digital
          solutions designed to propel your business to new heights in the
          digital realm. With a team of skilled professionals, cutting-edge
          technologies, and a passion for innovation, we are committed to
          delivering exceptional results for every project we undertake. From
          captivating web design that leaves a lasting impression to seamless
          web development that ensures optimal functionality, we cover every
          aspect of your online presence.
        </p>
      </div>

      <img className={style.heroServ__img} src={frame} alt="frame" />
      <img className={style.heroServ__img2} src={frame} alt="frame" />

      <img className={style.heroServ__main_img} src={img} alt="screenshot" />
    </section>
  );
};

export default HeroServ;
