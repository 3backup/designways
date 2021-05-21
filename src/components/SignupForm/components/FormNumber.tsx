import React from "react";
import checkWhite from "../../../images/check-white.svg";

type Props = {
  isValid: boolean;
  label: string;
};

export const FormNumber = ({ isValid = false, label }: Props) => {
  return (
    <div className={`form__number ${isValid ? "form__number--active" : ""}`}>
      {`${isValid ? "" : label}`}
      <img
        src={checkWhite}
        className={`form__numberCheck ${isValid ? "form__number--hide" : ""}`}
        alt=""
      />
    </div>
  );
};
