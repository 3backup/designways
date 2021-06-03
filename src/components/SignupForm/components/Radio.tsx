import React, { FunctionComponent } from "react";
import { FieldArrayRenderProps } from "react-final-form-arrays";
import { Option } from "../types";

type Props = {
  label: string;
  value: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

type GroupProps = FieldArrayRenderProps<Option["id"], HTMLElement> & {
  options?: Option[];
  isMulti?: boolean;
};

export const Radio = ({ id, label, ...rest }: Props) => (
  <label className="form__containerLevel--singletag" htmlFor={id}>
    <input className="form__radiobutton" type="radio" {...rest} />
    <span className="form__tag">{label}</span>
  </label>
);

export const RadioGroup = ({
  isMulti = false,
  fields,
  options = [],
}: GroupProps) => {
  const toggle = (_, optionId) => {
    if (!isMulti) {
      if (fields.length) {
        fields.remove(0);
      }
      fields.push(optionId);
      return;
    }
    if ((fields.value || []).includes(optionId)) {
      fields.remove(fields.value.indexOf(optionId));
    } else {
      fields.push(optionId);
    }
  };
  return (
    <>
      {options.map((option) => (
        <Radio
          key={option.id}
          value={option.id}
          label={option.name}
          checked={(fields.value || []).includes(option.id)}
          onChange={(event) => toggle(event, option.id)}
        />
      ))}
    </>
  );
};
