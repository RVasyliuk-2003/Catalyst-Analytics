import style from "./ourTrack.module.scss";

const OurTrack = () => {
  return (
    <section className={style.ourTrack}>
      <h2 className={style.ourTrack__title}>Our Track Record</h2>

      <div className={style.ourTrack__boxs}>
        <div className={style.ourTrack__boxs__box}>
          <b className={style.ourTrack__boxs__box_b}>12+</b>
          <h4 className={style.ourTrack__boxs__box_title}>
            Years AI & ML Development
          </h4>
          <p className={style.ourTrack__boxs__box_p}>
            Building and deploying production-grade ML systems and AI solutions
          </p>
        </div>

        <div className={style.ourTrack__boxs__box}>
          <b className={style.ourTrack__boxs__box_b}>$2B+</b>
          <h4 className={style.ourTrack__boxs__box_title}>
            Trading Volume Tested
          </h4>
          <p className={style.ourTrack__boxs__box_p}>
            Through our battle-tested algorithmic trading systems
          </p>
        </div>

        <div className={style.ourTrack__boxs__box}>
          <b className={style.ourTrack__boxs__box_b}>100+</b>
          <h4 className={style.ourTrack__boxs__box_title}>
            Blockchain Projects Audited
          </h4>
          <p className={style.ourTrack__boxs__box_p}>
            Including DeFi protocols and smart contracts
          </p>
        </div>

        <div className={style.ourTrack__boxs__box}>
          <b className={style.ourTrack__boxs__box_b}>25+</b>
          <h4 className={style.ourTrack__boxs__box_title}>
            Esports Teams Audited
          </h4>
          <p className={style.ourTrack__boxs__box_p}>
            With data-driven performance optimization
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTrack;
