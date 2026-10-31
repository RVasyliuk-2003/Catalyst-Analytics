import Hero from "./HeroPage/Hero";
import Services from "./ServicesPage/Services";
import Portfolio from "./Portfolio/Portfolio";
import AboutUs from "./AboutUsPage/AboutUs";
import Career from "./Career/Career";
import ContactUs from "./ContactUs/ContactUs";

export default function Main() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs />
      <Career />
      <ContactUs />
    </main>
  );
}
