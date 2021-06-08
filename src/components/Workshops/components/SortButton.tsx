import React from "react";
import styled from "styled-components";

type Props = {
  active: boolean;
  title: string;
  onClick: () => void;
};

const SortButtonMain = styled.button`
  background-color: transparent;
  border: none;
  line-height: 150%;
  width: auto;
  padding: 0;
  color: #7d4ce5;
  cursor: pointer;
  padding-bottom: 2px;
  font-weight: bold;
  margin: 20px 0 20px 40px;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;
export const SortButton = ({ title, active, onClick }: Props) => {
  return (
    <SortButtonMain
      type="button"
      className={
        active
          ? "sortElement__sortButton  text__h6"
          : "sortElement__sortButton sortElement__sortButton--active text__h6"
      }
      onClick={() => onClick()}>
      {title}
    </SortButtonMain>
  );
};
