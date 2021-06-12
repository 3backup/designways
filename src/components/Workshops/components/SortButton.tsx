import React from "react";
import styled from "styled-components";

type SortButtonProps = {
  active: boolean;
  title: string;
  onClick: () => void;
};

const SortButtonMain = styled.button<{ active: boolean }>`
  background-color: transparent;
  border: none;
  line-height: 150%;
  width: auto;
  padding: 0;
  font-size: ${({ theme }) => theme.fonts.base};
  border-bottom: ${(props) => (props.active ? `0` : `1px`)} solid
    ${({ theme }) => theme.colors.navyblue};
  color: ${({ active, theme }) =>
    active ? `${theme.colors.violet}` : `${theme.colors.black}`};
  cursor: pointer;
  padding-bottom: 2px;
  font-weight: bold;
  margin: 20px 0 20px 40px;
  transition: 0.5s ease;
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    margin: 20px 0;
  }
`;

export const SortButton = ({ title, active, onClick }: SortButtonProps) => {
  return (
    <SortButtonMain active={active} type="button" onClick={() => onClick()}>
      {title}
    </SortButtonMain>
  );
};
