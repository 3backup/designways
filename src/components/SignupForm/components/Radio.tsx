import React from "react";

type Props = {
  field: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio = ({ field, label, ...rest }: Props) => {
  return (
    <label
      className="form__containerLevel--singletag"
      htmlFor={`${field}_${label}`}
    >
      <input
        className="form__radiobutton"
        type="radio"
        id={`${field}_${label}`}
        name={field}
        value={label}
        {...rest}
      />
      <span className="form__tag">{label}</span>
    </label>
  );
};
