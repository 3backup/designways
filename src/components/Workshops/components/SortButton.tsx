import React from "react";

type Props = {
  active: boolean;
  title: string;
  onClick: () => void;
};

export const SortButton = ({ title, active, onClick }: Props) => {
  return (
    <button
      type="button"
      className={
        active
          ? "sortElement__sortButton  text__h6"
          : "sortElement__sortButton sortElement__sortButton--active text__h6"
      }
      onClick={() => onClick()}
    >
      {title} 
    </button>
  );
};
