import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
  name: string;
  isActive: boolean;
  isHuge: boolean;
  key: string;
};

const Tag = styled.button`
  background: ${(props) =>
    props.isActive
      ? `${props.theme.colors.navyblue}`
      : "rgba(232, 230, 243, 0.6)"};

  border: none;
  border-radius: 6px;
  padding: 8px 18px;
  margin: 8px 8px 0 0;
  font-family: Manrope;
  font-style: normal;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: ${(props: Props) =>
    props.isActive
      ? `${props.theme.colors.white}`
      : `${props.theme.colors.darkgrey}`};
  -webkit-transition: 0.5s ease;
  -moz-transition: 0.5s ease;
  transition: 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.navyblue};
    cursor: pointer;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const WorkshopTagButton = ({
  onClick,
  name,
  isActive,
  key,
  isHuge,
}: Props) => {
  return (
    <Tag
      key={key}
      type="button"
      isActive={isActive}
      isHuge
      onClick={() => onClick()}>
      {name}
    </Tag>
  );
};
