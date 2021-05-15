import React from "react";
import checkWhite from "../../../images/check-white.svg";

type Props = {
  isEnabled: boolean;
  label: string;
};

export const FormNumber = ({ isEnabled = true, label }: Props) => {
  return (
    <div className={`form__number ${isEnabled ? "form__number--active" : ""}`}>
      {`${isEnabled ? "" : label}`}
      <img
        src={checkWhite}
        className={`form__numberCheck ${isEnabled ? "form__number--hide" : ""}`}
        alt=""
      />
    </div>
  );
};
