import style from "./chooseUs.module.scss";

import doneImg from "./../../../../assets/images/doneImg.webp";

const ChooseUs = () => {
  return (
    <section className={style.chooseUs}>
      <h2 className={style.title}>Why Choose Us</h2>

      <div className={style.chooseUs__cards}>
        <div className={style.chooseUs__cards__card}>
          <img src={doneImg} alt="Data Analytics" />

          <h3>Innovation</h3>
          <p>
            Pushing boundaries in AI, blockchain, and quantitative trading to
            deliver cutting-edge solutions.
          </p>
        </div>

        <div className={style.chooseUs__cards__card}>
          <img src={doneImg} alt="Data Analytics" />

          <h3>Innovation</h3>
          <p>
            Pushing boundaries in AI, blockchain, and quantitative trading to
            deliver cutting-edge solutions.
          </p>
        </div>

        <div className={style.chooseUs__cards__card}>
          <img src={doneImg} alt="Data Analytics" />

          <h3>Innovation</h3>
          <p>
            Pushing boundaries in AI, blockchain, and quantitative trading to
            deliver cutting-edge solutions.
          </p>
        </div>

        <div className={style.chooseUs__cards__card}>
          <img src={doneImg} alt="Data Analytics" />

          <h3>Innovation</h3>
          <p>
            Pushing boundaries in AI, blockchain, and quantitative trading to
            deliver cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
