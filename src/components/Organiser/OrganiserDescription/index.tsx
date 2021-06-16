import React from "react";
import styled from "styled-components";
import { ContainerOrganiserHome } from "../../styles/container";

const ContainerDeschome = styled(ContainerOrganiserHome)`
  margin: 8rem auto 8rem auto;
`;
const ContainerTitle = styled.h3`
  width: 100%;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.leadeHeight};
  line-height: 140%;
  display: flex;
  text-align: left;
  color: ${({ theme }) => theme.colors.navyblue};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 100%;
    text-align: left;
  }
`;
const OrganiserText = styled.div`
  width: 100%;
  margin: 2rem 0;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.biggerBase};
  line-height: 160%;
  color: ${({ theme }) => theme.colors.navyblue};
  opacity: 0.8;
  list-style-type: circle;
  @media only screen and (max-width: 1024px) {
    width: 100%;
    padding-left: 0;
    margin-top: 4rem;
  }
`;
const OrganiserUl = styled.ul`
  margin-left: 6rem;
  color: ${({ theme }) => theme.colors.navyblue};
`;
const OrganiserLi = styled.li`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 160%;
  margin: 2.4rem;
  color: ${({ theme }) => theme.colors.navyblue};
  opacity: 0.8;
  &::before {
    content: "•";
    color: ${({ theme }) => theme.colors.violet};
    font-weight: bold;
    display: inline-block;
    width: 2em;
    margin-left: -3.5rem;
  }
`;
export const OrganiserDescription = () => (
  <ContainerDeschome id="about">
    <ContainerTitle>Więcej o Product Discovery Pro</ContainerTitle>
    <OrganiserText>
      Podczas warsztatów:
      <OrganiserUl>
        <OrganiserLi>
          Przedstawimy Ci nasz autorski przepis na skuteczne odkrywanie i
          budowanie wartości produktu poprzez eksplorację szans, badania oraz
          eksperymenty.
        </OrganiserLi>
        <OrganiserLi>
          Podzielimy się wiedzą w sposób maksymalnie praktyczny. Podczas
          warsztatów stawiamy na różnorodne ćwiczenia warsztatowe, dyskusje oraz
          odnoszenie się do realnych case studies.
        </OrganiserLi>
        <OrganiserLi>
          Przekazujemy wiedzę i uczymy procesu, metod, technik i narzędzi, z
          których sami korzystamy w codziennej pracy.
        </OrganiserLi>
        <OrganiserLi>
          W unikalny sposób łączymy świat zarządzania produktem z realizacją
          wartościowych badań i eksperymentów – znajdziesz tutaj inspiracje i
          elementy zaczerpnięte z Lean, Service Design, Value Proposition
          Design, Eksperymentacji, Evidence Based Management, czy badań UX.
        </OrganiserLi>
        <OrganiserLi>
          W unikalny sposób łączymy świat zarządzania produktem z realizacją
          wartościowych badań i eksperymentów – znajdziesz tutaj inspiracje i
          elementy zaczerpnięte z Lean, Service Design, Value Proposition
          Design, Eksperymentacji, Evidence Based Management, czy badań UX.
        </OrganiserLi>
        <OrganiserLi>
          Wiedza zdobyta podczas szkolenia jest wysoko adaptowalna – możesz
          wykorzystać ją kolejnego dnia – zarówno jeśli pracujesz w zwinnych
          metodykach rozwoju oprogramowania (scrum, kanban) jak i kiedy
          pracujesz w zespole projektowym, badawczym lub występujesz jako
          konsultant.
        </OrganiserLi>
      </OrganiserUl>
    </OrganiserText>
  </ContainerDeschome>
);
