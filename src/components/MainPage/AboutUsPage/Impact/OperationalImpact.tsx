import style from "./operationalImpact.module.scss";

const OperationalImpact = () => {
  return (
    <section className={style.operationalImpact}>
      <h2 className={style.operationalImpact__title}>Operational Impact</h2>

      <div className={style.operationalImpact__boxs}>
        <div className={style.operationalImpact__boxs__box}>
          <b className={style.operationalImpact__boxs__box_b}>
            99.99<span>%</span>
          </b>
          <h4 className={style.operationalImpact__boxs__box_title}>
            System Uptime
          </h4>
          <p className={style.operationalImpact__boxs__box_p}>
            For critical ML and trading infrastructure
          </p>
        </div>

        <div className={style.operationalImpact__boxs__box}>
          <b className={style.operationalImpact__boxs__box_b}>60%</b>
          <h4 className={style.operationalImpact__boxs__box_title}>
            Cost Reduction
          </h4>
          <p className={style.operationalImpact__boxs__box_p}>
            Average operational cost savings for clients
          </p>
        </div>

        <div className={style.operationalImpact__boxs__box}>
          <b className={style.operationalImpact__boxs__box_b}>85%</b>
          <h4 className={style.operationalImpact__boxs__box_title}>
            Automation Rate
          </h4>
          <p className={style.operationalImpact__boxs__box_p}>
            In client workflow optimization
          </p>
        </div>

        <div className={style.operationalImpact__boxs__box}>
          <b className={style.operationalImpact__boxs__box_b}>3x</b>
          <h4 className={style.operationalImpact__boxs__box_title}>
            Performance Gain
          </h4>
          <p className={style.operationalImpact__boxs__box_p}>
            Average improvement in system efficiency
          </p>
        </div>
      </div>
    </section>
  );
};

export default OperationalImpact;
