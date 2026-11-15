import style from "./weServe.module.scss";
import { industriesData } from "./industriesData.ts";

import line from "./../images/line.svg";

const WeServe = () => {
  return (
    <section className={style.weServe}>
      <h2 className={style.weServe__title}>Industries We Serve</h2>
      <p className={style.weServe__title_p}>
        Delivering innovative solutions across diverse industries with deep
        domain expertise
      </p>

      <div className={style.weServe__cards}>
        {industriesData.map((ell) => (
          <div className={style.weServe__cards__card} key={ell.id}>
            <img
              className={style.weServe__cards__card_icon}
              src={ell.icon}
              alt="icon"
            />
            <h3 className={style.weServe__cards__card_title}>{ell.title}</h3>
            <p className={style.weServe__cards__card_p}>{ell.description}</p>

            <ul className={style.weServe__cards__card_ul_List}>
              {ell.features.map((el, i) => (
                <li key={i} className={style.weServe__cards__card_list_li}>
                  {el}
                </li>
              ))}
            </ul>

            <button className={style.weServe__cards__card_btn}>
              <span>
                <img
                  className={style.weServe__cards__card_btn_line}
                  src={line}
                  alt="line"
                />
              </span>
              Book a Call
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeServe;
