import React from "react";
import { FieldMetaState } from "react-final-form";

type Props = {
  meta: FieldMetaState<any>;
};

export const ErrorField = ({ meta }: Props) => {
  return (
    <div className="form__errorHandler">
      {meta.touched && meta.error ? (
        <div className="form__errorHandlerInside">{meta.error}</div>
      ) : null}
    </div>
  );
};
