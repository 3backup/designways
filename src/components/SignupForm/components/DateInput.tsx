import React from "react";

type Props = {
  field: string;
  label: string;
  date: string;
  time: string;
  isValidTime: boolean;
  isValidDate: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const DateInput = ({
  field,
  label,
  onChange,
  onBlur,
  date,
  time,
  isValidDate,
  isValidTime,
}: Props) => {
  return (
    <>
      <div className="form__label">{label}</div>
      <div className="form__twoInputs">
        <input
          id={field}
          name={field}
          className={`form__input form__input--short  ${
            !isValidDate ? "form__input--error" : ""
          }`}
          placeholder="RRRR-MM-DD"
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          value={date}
        />

        <input
          className={`form__input form__input--shorter  ${
            !isValidTime ? "form__input--error" : ""
          }`}
          placeholder="00:00 h"
          type="text"
          id="startDateTime"
          name="startDateTime"
          onChange={onChange}
          onBlur={onBlur}
          value={time}
        />
      </div>
    </>
  );
};
