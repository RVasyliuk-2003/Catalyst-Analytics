import style from "./heroSec.module.scss";

import HeroImg from "./images/Hero.webp";
import bgGradient from "./images/bg-gradient.svg";

import image1 from "./images/image1.svg";
import image2 from "./images/image2.svg";
import image3 from "./images/image3.svg";

const HeroSec = () => {
  return (
    <section className={style.heroSec}>
      <div className={style.heroSec__text}>
        <h1>
          Transforming Data <br /> into <b>Decisions</b>
        </h1>
        <p className={style.heroSec__text_desc}>
          Leverage the power of machine learning and AI to unlock <br />
          insights and drive business growth
        </p>
        <button className={style.heroSec__text_btn}>Book a Meeting</button>

        <div className={style.heroSec__text_clients}>
          <div className={style.heroSec__text_clients_img}>
            <img src={image1} alt="Image 1" />
            <img src={image2} alt="Image 2" />
            <img src={image3} alt="Image 3" />
          </div>
          <p className={style.heroSec__text_clients_desc}>
            Over <b>100+</b> clients have worked with us
          </p>
        </div>
      </div>
      <img className={style.heroSec__img} src={HeroImg} alt="Hero" />
      <img
        className={style.heroSec__bgGradient}
        src={bgGradient}
        alt="Background Gradient"
      />
    </section>
  );
};

export default HeroSec;
