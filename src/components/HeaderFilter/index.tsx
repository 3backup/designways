import React from "react";
import styled from "styled-components";
import { HeaderViolet } from "../styles/header";
import { Container } from "../styles/container";
import { Menu } from "../Menu";

const HeaderTitle = styled.h1`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.headerSize};
  margin: ${({ theme }) => theme.space.x40} 0;
  line-height: 57px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ theme }) => theme.fonts.fontsx26};
    line-height: 125%;
  }
`;
const HeaderSubtitle = styled.h2`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.fontsx26};
  line-height: 37px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ theme }) => theme.fonts.fontsx26};
    line-height: 150%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: ${({ theme }) => theme.fonts.biggerBase};
    line-height: 125%;
  }
`;

export const HeaderFilter = () => {
  return (
    <HeaderViolet className="violet violet__filter display__column">
      <Menu />
      <Container>
        <HeaderTitle>Poznaj swoją designerską ścieżkę.</HeaderTitle>
        <HeaderSubtitle>
          Znajdź szkolenia z branży, które pozwolą Ci rozwinąć karierę.
        </HeaderSubtitle>
      </Container>
    </HeaderViolet>
  );
};
