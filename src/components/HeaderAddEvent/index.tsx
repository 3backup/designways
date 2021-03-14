import React from "react";
import Image from "next/image";
import { Menu } from "../Menu";
import { ContentAddEvent } from "../ContentAddEvent";

export const HeaderAddEvent = () => {
  return (
    <header className='violet violet__filter display__column'>
      <Menu />
    </header>
  );
};
