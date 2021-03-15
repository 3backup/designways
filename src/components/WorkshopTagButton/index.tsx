import React from "react";

type Props = {
  onClick: () => void;
  name: string;
  isActive: boolean;
  isHuge: boolean;
};

export const WorkshopTagButton = ({
  onClick,
  name,
  isActive,
  isHuge,
}: Props) => {
  return (
    <button
      type='button'
      className={`tag__single tagsFilter ${
        isActive ? "tag__single--active" : ""
      } ${isHuge ? "tag__single--huge" : ""}`}
      onClick={() => onClick()}>
      {name}
    </button>
  );
};
