import style from "./ourServices.module.scss";
import line from "./../images/line.svg";

import { servicesData } from "./servicesData.ts";

const OurServices = () => {
  return (
    <section className={style.ourServices}>
      <h2 className={style.ourServices__title}>Our Services</h2>
      <p className={style.ourServices__cards_p}>
        Comprehensive AI, blockchain, and analytics solutions powered by deep
        expertise in machine <br /> learning and data engineering
      </p>

      <div className={style.ourServices__cards_grid}>
        {servicesData.map((ell) => (
          <div className={style.ourServices__card} key={ell.id}>
            <img
              className={style.ourServices__card_img}
              src={ell.icon}
              alt="img"
            />

            <b className={style.ourServices__card_title}>{ell.title}</b>
            <p className={style.ourServices__card_desc_p}>{ell.description}</p>

            <ul className={style.ourServices__card_list}>
              {ell.features.map((el, i) => (
                <li key={i} className={style.ourServices__card_list_li}>
                  {el}
                </li>
              ))}
            </ul>

            <button className={style.ourServices__card_btn}>
              <span>
                <img src={line} alt="Line" />
              </span>
              Book a Call
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
