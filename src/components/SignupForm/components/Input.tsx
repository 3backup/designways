import React from "react";

type Props = {
  field: string;
  label: string;
  isValid: boolean;
  error: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  type,
  field,
  placeholder,
  isValid,
  error,
  ...rest
}: Props) => {
  return (
    <>
      <div className="form__label">{label}</div>
      <input
        id={field}
        name={field}
        className={`form__input ${isValid ? "form__input--error" : ""}`}
        placeholder={placeholder}
        type={type}
        {...rest}
      />
      <div className="form__errorHandler">
        {!isValid ? (
          <div className="form__errorHandlerInside">{error}</div>
        ) : null}
      </div>
    </>
  );
};
