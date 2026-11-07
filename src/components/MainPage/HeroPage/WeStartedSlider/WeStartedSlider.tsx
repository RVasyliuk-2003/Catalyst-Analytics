import style from "./weStartedSlider.module.scss";
import icon from "./images/icon_3x.webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const WeStartedSlider = () => {
  return (
    <section className={style.weStartedSlider}>
      <h2 className={style.title}>Why We Started</h2>

      <div className={style.sliderContainer}>
        <div className={style.linearLeft}></div>
        <div className={style.linearRight}></div>

        <Swiper
          className={style.slider}
          modules={[Navigation, Pagination]}
          spaceBetween={60}
          slidesPerView={3}
          navigation={true}
          // pagination={{ clickable: true }}
        >
          <SwiperSlide className={style.card}>
            <div className={style.line}>
              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
              <img src={icon} alt="icon" />

              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
            </div>
            <p>
              That’s when we knew there had to be a better way — a smarter,
              faster, more intuitive solution.
            </p>

            <span className={style.span}>
              John Doe <br />
              <b>Founder & CEO</b>
            </span>
          </SwiperSlide>

          <SwiperSlide className={style.card}>
            <div className={style.line}>
              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
              <img src={icon} alt="icon" />

              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
            </div>
            <p>
              So we built a platform that empowers companies to transform raw
              data into real-time decisions using the power of AI.
            </p>

            <span className={style.span}>
              John Doe <br />
              <b>Founder & CEO</b>
            </span>
          </SwiperSlide>

          <SwiperSlide className={style.card}>
            <div className={style.line}>
              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
              <img src={icon} alt="icon" />

              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
            </div>
            <p>
              We’re here to make intelligent systems accessible, actionable, and
              aligned with real business goals.
            </p>

            <span className={style.span}>
              John Doe <br />
              <b>Founder & CEO</b>
            </span>
          </SwiperSlide>

          <SwiperSlide className={style.card}>
            <div className={style.line}>
              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
              <img src={icon} alt="icon" />

              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
            </div>
            <p>
              That’s when we knew there had to be a better way — a smarter,
              faster, more intuitive solution.
            </p>

            <span className={style.span}>
              John Doe <br />
              <b>Founder & CEO</b>
            </span>
          </SwiperSlide>

          <SwiperSlide className={style.card}>
            <div className={style.line}>
              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
              <img src={icon} alt="icon" />

              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
            </div>
            <p>
              So we built a platform that empowers companies to transform raw
              data into real-time decisions using the power of AI.
            </p>

            <span className={style.span}>
              John Doe <br />
              <b>Founder & CEO</b>
            </span>
          </SwiperSlide>

          <SwiperSlide className={style.card}>
            <div className={style.line}>
              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
              <img src={icon} alt="icon" />

              <svg
                width="125"
                height="1"
                viewBox="0 0 125 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0.5H124.667" stroke="#616161" />
              </svg>
            </div>
            <p className={style.span}>
              We’re here to make intelligent systems accessible, actionable, and
              aligned with real business goals.
            </p>

            <span className={style.span}>
              John Doe <br />
              <b>Founder & CEO</b>
            </span>
          </SwiperSlide>
        </Swiper>

        <button className={style.btn}>Learn More</button>
      </div>
    </section>
  );
};

export default WeStartedSlider;
