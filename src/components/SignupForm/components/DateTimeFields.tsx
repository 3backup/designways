import React from "react";
import { Field } from "react-final-form";

type Props = {
  dateField?: string;
  timeField: string;
  label: string;
};

export const DateTimeFields = ({ label, dateField, timeField }: Props) => {
  return (
    <div className="form__singleinputWithLabelContainer">
      <div className="form__label">{label}</div>
      <div className="form__twoInputs">
        {dateField && (
          <Field
            name={dateField}
            render={({ input, meta }) => (
              <input
                placeholder="DD-MM-RRRR"
                pattern="\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*"
                className={`form__input form__input--short ${
                  meta.touched && !meta.valid ? "form__input--error" : ""
                }`}
                {...input}
              />
            )}
          />
        )}
        <Field
          name={timeField}
          render={({ input, meta }) => (
            <input
              placeholder="00:00"
              className={`form__input form__input--shorter ${
                meta.touched && !meta.valid ? "form__input--error" : ""
              }`}
              {...input}
            />
          )}
        />
      </div>
    </div>
  );
};
