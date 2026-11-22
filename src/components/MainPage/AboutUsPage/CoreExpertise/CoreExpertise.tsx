import style from "./coreExpertise.module.scss";

import aiImg from "./images/ai_img.webp";
import blockchain from "./images/blockchain.webp";
import management from "./images/management.webp";
import trading from "./images/trading.webp";

const CoreExpertise = () => {
  return (
    <section className={style.coreExpertise}>
      <h2 className={style.coreExpertise__title}>Core Expertise</h2>

      <div className={style.coreExpertise__core_cards}>
        <div className={style.coreExpertise__core_cards__card}>
          <span className={style.coreExpertise__core_cards__card_title}>
            AI & Machine Learning
          </span>

          <div className={style.coreExpertise__core_cards__card_img_Box}>
            <img src={aiImg} alt="aiImg" />
          </div>

          <p className={style.coreExpertise__core_cards__card_p}>
            Expert development of neural networks, computer vision systems, and
            NLP solutions with proven production deployment experience.
          </p>
        </div>

        <div className={style.coreExpertise__core_cards__card}>
          <span className={style.coreExpertise__core_cards__card_title}>
            Blockchain
          </span>

          <div className={style.coreExpertise__core_cards__card_img_Box}>
            <img src={blockchain} alt="blockchain" />
          </div>

          <p className={style.coreExpertise__core_cards__card_p}>
            Extensive experience in DeFi protocol development, smart contracts,
            and Web3 infrastructure implementation.
          </p>
        </div>

        <div className={style.coreExpertise__core_cards__card}>
          <span className={style.coreExpertise__core_cards__card_title}>
            Algorithmic Trading
          </span>

          <div className={style.coreExpertise__core_cards__card_img_Box}>
            <img src={trading} alt="trading" />
          </div>

          <p className={style.coreExpertise__core_cards__card_p}>
            Specialized in high-frequency trading systems and ML-powered market
            analysis algorithms.
          </p>
        </div>

        <div className={style.coreExpertise__core_cards__card}>
          <span className={style.coreExpertise__core_cards__card_title}>
            Esports Management
          </span>

          <div className={style.coreExpertise__core_cards__card_img_Box}>
            <img src={management} alt="management" />
          </div>

          <p className={style.coreExpertise__core_cards__card_p}>
            Pioneering data-driven approaches to team optimization and
            tournament management in competitive gaming.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;
