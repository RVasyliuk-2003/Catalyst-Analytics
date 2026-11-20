import style from "./companyOverview.module.scss";

import ourMision from "./images/ourMisionImg.webp";
import ourStory from "./images/ourStory.webp";

const CompanyOverview = () => {
  return (
    <section className={style.companyOverview}>
      <div className={style.companyOverview__ourContainer}>
        <div className={style.companyOverview__ourContainer_text}>
          <h4 className={style.companyOverview__ourContainer__title}>
            Our Story
          </h4>
          <p className={style.companyOverview__ourContainer__p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, <br />
            <br /> Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley <br />
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
        <img src={ourStory} alt="ourStory" />
      </div>

      <div className={style.companyOverview__ourContainer}>
        <img src={ourMision} alt="ourMision" />

        <div className={style.companyOverview__ourContainer_text}>
          <h4 className={style.companyOverview__ourContainer__title}>
            Our Mission
          </h4>
          <p className={style.companyOverview__ourContainer__p}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, <br />
            <br /> when an brunknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, <br />
            <br /> Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
