import "./index.css";

import Header from "./components/HeaderPage/Header";
import Main from "./components/MainPage/Main";
import Footer from "./components/FooterPage/Footer";

const App = () => {
  return (
    <section className="container">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

export default App;
