import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const InputWrapper = ({ children }: Props) => {
  return <div className="form__inputContainer">{children} </div>;
};
