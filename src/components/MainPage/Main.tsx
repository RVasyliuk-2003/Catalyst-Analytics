import Hero from "./HeroPage/Hero";
import Services from "./ServicesPage/Services";
import Portfolio from "./Portfolio/Portfolio";
import AboutUs from "./AboutUsPage/AboutUs";
import Career from "./Career/Career";
import ContactUs from "./ContactUs/ContactUs";

import { Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </main>
  );
}
