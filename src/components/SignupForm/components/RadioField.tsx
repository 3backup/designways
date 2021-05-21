import React from "react";
import { FieldArray } from "react-final-form-arrays";
import { Option } from "../types";

import { RadioGroup } from "./Radio";

type Props = {
  label: string;
  name: string;
  options: Option[];
  isMulti?: boolean;
};

export const RadioField = ({
  label,
  name,
  options,
  isMulti = false,
}: Props) => {
  return (
    <div className="form__singleInputWithLabel">
      <div className="form__label">{label}</div>
      <div className="form__containerLevel">
        <FieldArray
          name={name}
          options={options}
          component={(props) => <RadioGroup isMulti={isMulti} {...props} />}
        />
      </div>
    </div>
  );
};
