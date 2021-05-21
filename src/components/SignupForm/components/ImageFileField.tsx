import React from "react";
import { Field } from "react-final-form";
import { Dropzone } from "./Dropzone";

type Props = {
  name: string;
};

export const ImageFileField = ({ name }: Props) => {
  return <Field name={name} render={({ input }) => <Dropzone {...input} />} />;
};
