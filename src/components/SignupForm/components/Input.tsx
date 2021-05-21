import React from "react";

type Props = {
  label: string;
  isValid: boolean;
  isShort?: boolean;
  error: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  placeholder,
  isValid,
  isShort = false,
  error,
  ...rest
}: Props) => {
  return (
    <div className="form__singleInputWithLabel">
      <div className="form__label">{label}</div>
      <input
        className={`form__input ${isShort ? "form__input--short" : ""}${
          !isValid ? " form__input--error" : ""
        }`}
        placeholder={placeholder}
        {...rest}
      />
      <div className="form__errorHandler">
        {!isValid ? (
          <div className="form__errorHandlerInside">{error}</div>
        ) : null}
      </div>
    </div>
  );
};
