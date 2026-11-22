import style from "./toDiscuss.module.scss";

const ToDiscuss = () => {
  return (
    <section className={style.toDiscuss}>
      <div className={style.toDiscuss__container}>
        <h2 className={style.toDiscuss__title}>READY TO DISCUSS</h2>
        <p className={style.toDiscuss__text}>
          Your Product Needs With <span>Catalyst Analytic</span> Experts?
        </p>
        <button className={style.toDiscuss__btn}>Get In Touch</button>
      </div>
    </section>
  );
};

export default ToDiscuss;
