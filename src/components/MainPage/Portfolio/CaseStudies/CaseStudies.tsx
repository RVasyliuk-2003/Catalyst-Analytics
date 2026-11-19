import style from "./caseStudies.module.scss";
import { useState } from "react";

import { caseStudiesData } from "./caseStudiesData";
import line from "./images/line.svg";
import search from "./../../../../assets/images/search.svg";

type Sort = {
  label: string;
  value: string;
};

const CaseStudies = () => {
  const sortOptions: Sort[] = [
    { label: "Newest first", value: "Newest" },
    { label: "Oldest first", value: "Oldest" },
    { label: "Most Popular", value: "Defaults" },
  ];

  const [searchIn, setSearchIn] = useState<string>("");
  const [searchCat, setSearchCat] = useState<string>("");
  const [selectSort, setSelectSort] = useState<string>("Defaults");

  const noRepeat = [...new Set(caseStudiesData.map((ell) => ell.category))];

  const [filteredData, setFilteredData] = useState(caseStudiesData);

  const fitlers = () => {
    const filt = caseStudiesData.filter((ell) => {
      const matchesSearch =
        !searchIn || ell.title.toLowerCase().includes(searchIn.toLowerCase());

      return matchesSearch;
    });

    setFilteredData(filt);
  };

  const handleSearchChange = (value: string) => {
    setSearchIn(value);

    if (value === "") {
      setFilteredData(caseStudiesData);
    }
  };

  const filteredByCategory = filteredData.filter((ell) => {
    const matchesCategory = !searchCat || searchCat === ell.category;

    return matchesCategory;
  });

  const sorts = [...filteredByCategory].sort((x, y) => {
    if (selectSort === "Newest") {
      return y.id - x.id;
    }

    if (selectSort === "Oldest") {
      return x.id - y.id;
    }

    return 0;
  });

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
            value={searchIn}
            onChange={(e) => handleSearchChange(e.target.value)}
          />

          <button
            className={style.caseStudies__filter_box__search_btn}
            onClick={fitlers}
          >
            <img
              className={style.caseStudies__filter_box__search_img}
              src={search}
              alt="search"
            />
          </button>
        </div>

        <div className={style.caseStudies__filter_box__categorys_sel}>
          <select
            value={searchCat}
            onChange={(e) => setSearchCat(e.target.value)}
          >
            <option value="">All</option>
            {noRepeat.map((ell, id) => (
              <option key={id} value={ell}>
                {ell}
              </option>
            ))}
          </select>
          <select
            value={selectSort}
            onChange={(e) => setSelectSort(e.target.value)}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value}>{opt.value}</option>
            ))}
          </select>

          <button className={style.caseStudies__filter_box__btn_clear}>
            Clear All
          </button>
        </div>
      </div>

      <div className={style.caseStudies__line}></div>

      <div className={style.caseStudies__cardsGrid}>
        {sorts.map((ell) => (
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
