import style from "./ourUltimate.module.scss";

import img1 from "./images/im1.webp";
import img2 from "./images/im2.webp";
import img3 from "./images/im3.webp";

const OuerUltimate = () => {
  return (
    <section className={style.ourUltimate}>
      <h2 className={style.ourUltimate__title}>
        Our Ultimate Set of Services for Your <br /> Ideas Implementation
      </h2>

      <div className={style.ourUltimate__cards}>
        <div className={style.ourUltimate__card}>
          <img src={img1} alt="Data Analytics" />
          <h3>Predictive Analytics</h3>
          <p>
            Forecast trends and make data-driven decisions with our advanced ML
            models.
          </p>
        </div>

        <div className={style.ourUltimate__card}>
          <img src={img2} alt="AI Consulting" />
          <h3>AI Consulting</h3>
          <p>
            Expert guidance on implementing AI solutions for your business
            needs.
          </p>
        </div>

        <div className={style.ourUltimate__card}>
          <img src={img3} alt="Data Engineering" />
          <h3>Data Engineering</h3>
          <p>
            Build robust data pipelines and infrastructure for ML operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OuerUltimate;
