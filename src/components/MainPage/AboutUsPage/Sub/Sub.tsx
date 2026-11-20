import style from "./sub.module.scss";

const Sub = () => {
  return (
    <section className={style.sub}>
      <div className={style.sub__sub_container}>
        <div className={style.sub__sub_box}>
          <span>Clients</span>
          <b>200+</b>
        </div>
        <div className={style.sub__sub_box}>
          <span>PROJECTS</span>
          <b>280+</b>
        </div>
        <div className={style.sub__sub_box}>
          <span>HAPPY CLIENTS</span>
          <b>100%</b>
        </div>
        <div className={style.sub__sub_box}>
          <span>FOLLOWER</span>
          <b>420K</b>
        </div>
        <div className={style.sub__sub_box}>
          <span>Years Of Experience</span>
          <b>10+</b>
        </div>
      </div>
    </section>
  );
};

export default Sub;
