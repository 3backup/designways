import React from "react";
import Image from "next/image";
import { SignupForm } from "../SignupForm";
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
      <SignupForm />
    </div>
  );
};
