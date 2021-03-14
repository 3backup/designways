import React from "react";
import Image from "next/image";
import { Menu } from "../Menu";

export const HeaderFilter = () => {
  return (
    <header className='violet violet__filter display__column'>
      <Menu />
      <div className='container container--big display__flex display__column'>
        <h2 className='text__h2 text__h2--smallBottom'>
          Poznaj swoją designerską ścieżkę.
        </h2>
        <h5 className='text__h5'>
          Znajdź szkolenia z branży, które pozwolą Ci rozwinąć karierę.
        </h5>
      </div>
    </header>
  );
};
