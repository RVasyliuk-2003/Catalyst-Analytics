import style from "./caseStudies.module.scss";

import { caseStudiesData } from "./caseStudiesData";
import line from "./images/line.svg";
import search from "./../../../../assets/images/search.svg";

const CaseStudies = () => {
  return (
    <section className={style.caseStudies}>
      <h2 className={style.caseStudies__title}>Our Case Studies</h2>
      <p className={style.caseStudies__p}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has <br /> been the industry's standard dummy text
        ever since
      </p>

      <div className={style.caseStudies__filter_box}>
        <div className={style.caseStudies__filter_box__search_box}>
          <input
            className={style.caseStudies__filter_box__search_inpt}
            type="text"
            placeholder="Search by keywords..."
          />

          <button className={style.caseStudies__filter_box__search_btn}>
            <img
              className={style.caseStudies__filter_box__search_img}
              src={search}
              alt="search"
            />
          </button>
        </div>

        <div className={style.caseStudies__filter_box__categorys_sel}>
          <select></select>
          <select></select>
          <button className={style.caseStudies__filter_box__btn_clear}>
            Clear All
          </button>
        </div>
      </div>

      <div className={style.caseStudies__line}></div>

      <div className={style.caseStudies__cardsGrid}>
        {caseStudiesData.map((ell) => (
          <div className={style.caseStudies__card} key={ell.id}>
            <img
              className={style.caseStudies__card__img}
              src={ell.image}
              alt="image"
            />

            <div className={style.caseStudies__card__btn_card}>
              <h3 className={style.caseStudies__card__title}>{ell.title}</h3>
              <button className={style.caseStudies__card__btn}>
                <img
                  className={style.caseStudies__card__btn_line}
                  src={line}
                  alt="line"
                />
              </button>
            </div>

            <p className={style.caseStudies__card__desk}>{ell.description}</p>

            <ul className={style.caseStudies__card__featur_ul}>
              {ell.features.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
