import style from "./ourValue.module.scss";
import iconDone from "./../../../../assets/images/doneImg.webp";

const OurValue = () => {
  return (
    <section className={style.ourValue}>
      <h2 className={style.ourValue__title}>Our Value</h2>

      <div className={style.ourValue__container}>
        <div className={style.ourValue__container__box}>
          <img src={iconDone} alt="iconDone" />
          <b className={style.ourValue__container__box_b}>iconDone</b>
          <p className={style.ourValue__container__box_p}>
            Pushing boundaries in AI, blockchain, and quantitative trading to
            deliver cutting-edge solutions.
          </p>
        </div>

        <div className={style.ourValue__container__box}>
          <img src={iconDone} alt="iconDone" />
          <b className={style.ourValue__container__box_b}>Collaboration</b>
          <p className={style.ourValue__container__box_p}>
            Working closely with clients to develop tailored solutions that
            drive measurable success.
          </p>
        </div>

        <div className={style.ourValue__container__box}>
          <img src={iconDone} alt="iconDone" />
          <b className={style.ourValue__container__box_b}>Excellence</b>
          <p className={style.ourValue__container__box_p}>
            Maintaining the highest standards in code quality, system
            performance, and client outcomes.
          </p>
        </div>

        <div className={style.ourValue__container__box}>
          <img src={iconDone} alt="iconDone" />
          <b className={style.ourValue__container__box_b}>Integrity</b>
          <p className={style.ourValue__container__box_p}>
            Operating with transparency and ethical considerations at the
            forefront of all decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurValue;
