import React from "react";
import Image from "next/image";
import { WorkshopTagButton } from "../WorkshopTagButton";
import { types } from "util";

export const ContentAddEvent = () => {
  const hanldeClick = (event) => {
    event.preventDefault();
    console.log("click");
  };
  const setEmail = (value) => {
    console.log(value);
  };

  return (
    <div className="container container__addEvent form__container">
      <div className="form__backButtonContainer">
        <button className="form__backButton" type="button">
          <Image
            src="/images/back-icon.svg"
            alt="Przycisk powrotu"
            width={20}
            height={20}
          />
          <span className="form__backButton__text">Wróć do strony głównej</span>
        </button>
      </div>
      <div className="form__title">
        Dodaj swoje wydarzenie na DesignWays Hub
      </div>
      <form action="" className="form__form" onSubmit={hanldeClick}>
        <div className="form__inputContainer">
          <div className="form__number">1</div>
          <div className="form__singleInputWithLabel">
            <div className="form__label">Nazwa</div>
            <input
              className="form__input"
              placeholder="np. Testy użyteczności: od koncepcji do scenariusza "
              type="text"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="form__inputContainer">
          <div className="form__number">2</div>
          <div className="form__singleInputWithLabel">
            <div className="form__label">Prowadzący</div>
            <input
              className="form__input"
              placeholder="np. Marek Urban"
              type="text"
            />
          </div>
        </div>
        <div className="form__inputContainer">
          <div className="form__number">3</div>
          <div className="form__singleInputWithLabel">
            <div className="form__label">Link do wydarzenia</div>
            <input
              className="form__input"
              placeholder="np. https://designways.io"
              type="text"
            />
          </div>
        </div>{" "}
        <div className="form__inputContainer">
          <div className="form__number">4</div>
          <div className="form__singleInputWithLabel">
            <div className="form__label">Ilość miejsc uczestników</div>
            <input
              className="form__input form__input--short"
              placeholder="np. 14 "
              type="text"
            />
          </div>
        </div>
        <div className="form__inputContainer">
          <div className="form__number">5</div>
          <div className="form__singleInputWithLabel">
            <div className="form__label">Grafika wydarzenia</div>
            <input
              className="form__input form__input--short"
              placeholder="np. 14 "
              type="text"
              accept="image/*"
            />
          </div>
        </div>
        <div className="form__inputContainer">
          <div className="form__number">6</div>
          <div className="form__singleInputWithLabel--elements ">
            <div className="form__singleinputWithLabelContainer">
              <div className="form__label">Data rozpoczęcia</div>
              <div className="form__twoInputs">
                <input
                  className="form__input form__input--short"
                  placeholder="DD-MM-RRRR"
                  type="text"
                />
                <input
                  className="form__input form__input--shorter"
                  placeholder="00:00 h"
                  type="text"
                />
              </div>
            </div>
            <div className="form__singleinputWithLabelContainer">
              <div className="form__label">Data zakończenia</div>
              <div className="form__twoInputs">
                <input
                  className="form__input form__input--short"
                  placeholder="DD-MM-RRRR"
                  type="text"
                />
                <input
                  className="form__input form__input--shorter"
                  placeholder="00:00 h"
                  type="text"
                />
              </div>
            </div>
            <div className="form__singleinputWithLabelContainer">
              <div className="form__label">Czas trwania</div>
              <div className="form__twoInputs">
                <input
                  className="form__input form__input--shorter"
                  placeholder="00:00 h"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form__inputContainer">
          <div className="form__number">7</div>
          <div className="form__singleInputWithLabel">
            <div className="form__label form__label--diff">
              Stopień zaawansowania
            </div>
          </div>
        </div>
        <div className="form__inputContainer">
          <div className="form__number">8</div>
          <div className="form__singleInputWithLabel">
            <div className="form__label form__label--diff">
              Określ tematykę (maks 4 tagi)
            </div>
            <input type="checkbox" />
          </div>
        </div>
        <div className="form__inputContainer">
          <div className="form__number">9</div>
          <div className="form__singleInputWithLabel--elements">
            <div className="form__singleinputWithLabelContainer">
              <div className="form__label form__label--diff ">Cena</div>
            </div>
            <div className="form__singleinputWithLabelContainer">
              <div className="form__label">Określ cenę</div>
              <div className="form__twoInputs">
                <input
                  className="form__input form__input--short"
                  placeholder="000,00 zł"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form__inputContainer">
          <div className="form__number">11</div>
          <div className="form__singleInputWithLabel--elements">
            <div className="form__singleinputWithLabelContainer">
              <div className="form__label form__label--diff ">Lokalizacja</div>
            </div>
            <div className="form__singleinputWithLabelContainer">
              <div className="form__label">Podaj miejsce wydarzenia</div>
              <div className="form__twoInputs">
                <input
                  className="form__input form__input--short"
                  placeholder="np. Kraków Expo"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form__inputContainer">
          <div className="form__number">11</div>
          <div className="form__singleInputWithLabel">
            <div className="form__singleInputWithLabel--elements">
              <div className="form__singleinputWithLabelContainer">
                <div className="form__label form__label--diff ">
                  Czy uczestnicy otrzymają certifikat po zakończeniu wydarzenia?
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="form__buttonSuggest">Wyślij do weryfikacji </button>
      </form>
    </div>
  );
};
