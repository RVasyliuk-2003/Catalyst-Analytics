import style from "./partnerSlider.module.scss";

import zapier from "./images/zapier.svg";
import spotify from "./images/spotify.svg";
import zoom from "./images/zoom.svg";
import slack from "./images/slack.svg";
import amazon from "./images/amazon.svg";
import abobe from "./images/abobe.svg";

const PartnerSlider = () => {
  return (
    <section className={style.partnerSlider}>
      <div className={style.partnerSlider__containerImg}>
        <img src={zapier} alt="Zapier" />
        <img src={spotify} alt="Spotify" />
        <img src={zoom} alt="Zoom" />
        <img src={slack} alt="Slack" />
        <img src={amazon} alt="Amazon" />
        <img src={abobe} alt="Abobe" />

        {/* Дублювання карток для безперервної прокрутки */}
        <img src={zapier} alt="Zapier" />
        <img src={spotify} alt="Spotify" />
        <img src={zoom} alt="Zoom" />
        <img src={slack} alt="Slack" />
        <img src={amazon} alt="Amazon" />
        <img src={abobe} alt="Abobe" />
      </div>
    </section>
  );
};

export default PartnerSlider;
