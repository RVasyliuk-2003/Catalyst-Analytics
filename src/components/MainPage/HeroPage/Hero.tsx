import HeroSec from "./HeroSec/HeroSec";
import OurUltimate from "./OurUltimate/OurUltimate";
import WeStartedSlider from "./WeStartedSlider/WeStartedSlider";
import PartnerSlider from "./PartnerSlider/PartnerSlider";
import ChooseUs from "./ChooseUs/ChooseUs";
import Questions from "./Questions/Questions";

export default function Hero() {
  return (
    <section>
      <HeroSec />
      <PartnerSlider />
      <OurUltimate />
      <ChooseUs />
      <WeStartedSlider />
      <Questions />
    </section>
  );
}
