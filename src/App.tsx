import "./index.css";

import Header from "./components/HeaderPage/Header";
import Main from "./components/MainPage/Main";
import Footer from "./components/FooterPage/Footer";

const App = () => {
  return (
    <section className="container">
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <defs>
          <filter
            id="true-inner-shadow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            {/* Звужуємо альфа-канал усередину контуру символів */}
            <feMorphology
              operator="erode"
              radius="2"
              in="SourceAlpha"
              result="eroded"
            />
            {/* Розмиваємо зменшений контур */}
            <feGaussianBlur stdDeviation="1.8" in="eroded" result="blurred" />
            <feOffset dx="0" dy="2" in="blurred" result="offset" />
            <feComposite
              operator="out"
              in="SourceAlpha"
              in2="offset"
              result="innerMask"
            />
            {/* Фарбуємо внутрішню тінь у чорний із потрібною прозорістю */}
            <feFlood
              floodColor="#000000"
              floodOpacity="1"
              result="shadowColor"
            />
            <feComposite
              operator="in"
              in="shadowColor"
              in2="innerMask"
              result="innerShadow"
            />
            {/* Накладаємо внутрішню тінь поверх білого тексту */}
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="innerShadow" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      ;
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

export default App;
