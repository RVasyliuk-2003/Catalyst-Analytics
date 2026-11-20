import style from "./heroUs.module.scss";

import image from "./../../../../assets/images/logo.webp";
import frame from "./../../../../assets/images/frame.svg";

const HeroUs = () => {
  return (
    <section className={style.heroUs}>
      <div className={style.heroUs__heroUsContent}>
        <h1 className={style.heroUs__heroUsContent__title}>
          We’re Engineers of Intelligent Change
        </h1>
        <p className={style.heroUs__heroUsContent__p}>
          Pioneering the intersection of AI, blockchain, and quantitative
          finance to deliver <br /> innovative solutions that drive business
          transformation
        </p>

        <button className={style.heroUs__heroUsContent__btn}>
          Get In Touch
        </button>

        <img
          className={style.heroUs__heroUsContent__frame}
          src={frame}
          alt="frame"
        />

        <img
          className={style.heroUs__heroUsContent__frame2}
          src={frame}
          alt="frame"
        />

        <img
          className={style.heroUs__heroUsContent__img}
          src={image}
          alt="ligo"
        />
      </div>
    </section>
  );
};

export default HeroUs;
