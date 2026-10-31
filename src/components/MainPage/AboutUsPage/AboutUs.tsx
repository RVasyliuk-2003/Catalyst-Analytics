import HeroUs from "./HeroUs/HeroUs";
import Sub from "./Sub/Sub";
import OurMission from "./OurMission/OurMission";
import OurStory from "./OurStory/OurStory";
import CoreExpertise from "./CoreExpertise/CoreExpertise";
import OurTrack from "./OurTrack/OurTrack";
import OperationalImpact from "./Impact/OperationalImpact";
import OurValue from "./OurValue/OurValue";

import ToDiscuss from "./../ToDiscuss/ToDiscuss";

export default function AboutUs() {
  return (
    <div>
      <HeroUs />
      <Sub />
      <OurStory />
      <OurMission />
      <CoreExpertise />
      <OurTrack />
      <OperationalImpact />
      <OurValue />

      <ToDiscuss />
    </div>
  );
}
