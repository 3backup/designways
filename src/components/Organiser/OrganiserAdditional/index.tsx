import React from "react";
import styled from "styled-components";
import { ContainerOrganiserHome } from "../../styles/container";
import BulletPoint from "../../../images/organiser-list-element.svg";

const OrganiserAdditionalSection = styled.section`
  background: ${({ theme }) => theme.colors.lightvioletbg};
  height: min-content;
  padding: 8rem 0;
`;
const ContainerOrganiserAdd = styled(ContainerOrganiserHome)`
  width: 103rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    max-width: 992px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    max-width: 94%;
    padding: 4%;
    flex-direction: column;
  }
`;
const ContainerHeader = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  max-width: 52rem;
  font-size: ${({ theme }) => theme.fonts.fontsx26};
  margin-bottom: 6rem;
  line-height: 160%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.navyblue};
`;
const ContainerUl = styled.ul`
  list-style-image: url(${BulletPoint});
  list-style-type: disc;
  li {
    padding-left: 5rem;
  }
`;
const ContainerLi = styled.li`
  list-style-type: none;
  margin-bottom: 2rem;
  background: url(${BulletPoint}) no-repeat left top;
  padding: 0px 0 3px 24px;
  font-family: Manrope;
  font-style: normal;
  font-weight: regular;
  font-size: ${({ theme }) => theme.fonts.leadeHeight};
  line-height: 140%;
  display: flex;
  align-items: center;
`;

export const OrganiserAdditional = () => (
  <OrganiserAdditionalSection>
    <ContainerOrganiserAdd id="additional">
      <ContainerHeader>
        Dodatkowe rozwiązania oferowane przez organizatora
      </ContainerHeader>
      <ContainerUl>
        <ContainerLi>
          Audyty dojrzałości i pracy zespołu lub organizacji nad innowacją
        </ContainerLi>
        <ContainerLi>Konsultacje eksperckie</ContainerLi>
        <ContainerLi>Warsztaty strategiczne</ContainerLi>
        <ContainerLi>
          Projekty wdrożeniowe skupione wokół konkretnego obszaru
          (zaprojektowanie procesu, badania, eksperymentacja)
        </ContainerLi>
      </ContainerUl>
    </ContainerOrganiserAdd>
  </OrganiserAdditionalSection>
);
