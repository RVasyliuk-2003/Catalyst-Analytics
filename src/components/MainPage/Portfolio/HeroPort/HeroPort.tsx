import style from "./heroPort.module.scss";
import heroImg from "./images/ourWorkImg.webp";

import frame from "./../../../../assets/images/frame.svg";

const HeroPort = () => {
  return (
    <section className={style.heroPort}>
      <div className={style.heroPort__heroBox}>
        <div className={style.heroPort__text}>
          <h1 className={style.heroPort__title}>Our Work, Your Future</h1>
          <p className={style.heroPort__p}>
            From machine learning platforms to blockchain protocols and
            predictive analytics tools, here’s a selection of real-world
            solutions we’ve delivered for forward-thinking companies.
          </p>
        </div>
        <img src={heroImg} alt="heroImg" />

        <img
          className={style.heroPort__absoluteFrame_bg1}
          src={frame}
          alt="frame"
        />
        <img
          className={style.heroPort__absoluteFrame_bg2}
          src={frame}
          alt="frame"
        />
      </div>
    </section>
  );
};

export default HeroPort;
