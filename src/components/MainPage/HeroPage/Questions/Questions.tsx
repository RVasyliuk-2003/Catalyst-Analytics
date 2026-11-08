import style from "./questions.module.scss";
import { useState } from "react";

import { Fquestions } from "./FAQ.ts";

const Questions = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null);

  return (
    <section className={style.questions}>
      <h2 className={style.questions__title}>Frequently Asked Questions</h2>

      <div className={style.questions__cards}>
        {Fquestions.map((ell, id) => (
          <div
            key={id}
            className={`${style.questions__card} ${
              isOpen === id ? style.questions__card_bg : ""
            }`}
          >
            <div className={style.questions__card__header}>
              <div className={style.questions__card__number_card}>
                <b
                  style={{
                    color: isOpen === id ? "var(--text-blue)" : "#fff",
                  }}
                >
                  {ell.number}
                </b>
              </div>

              <div className={style.questions__card__close_card}>
                <h3
                  style={{
                    color: isOpen === id ? "var(--text-blue)" : "#fff",
                  }}
                  className={style.questions__h3}
                >
                  {ell.question}
                </h3>

                <button
                  className={style.questions__btn}
                  onClick={() => setIsOpen(isOpen === id ? null : id)}
                >
                  {isOpen === id ? "−" : "+"}
                </button>
              </div>
            </div>

            <div
              className={`${style.questions__card__answer} ${
                isOpen === id ? style.questions__card__answer_open : ""
              }`}
            >
              <div className={style.questions__card__answer_content}>
                <p>{ell.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
