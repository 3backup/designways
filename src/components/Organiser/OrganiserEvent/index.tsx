import React from "react";
import styled from "styled-components";
import Logo from "images/logo-product-discovery.png";
import { ButtonNavyBlueRounded } from "../../styles/button";

const MainEventContainer = styled.div`
  margin: -10rem auto 0 auto;
  width: 124rem;
  min-height: 44rem;
  box-shadow: 0px 4px 4px rgba(48, 73, 162, 0.02),
    0px 15px 60px -28px rgba(23, 26, 53, 0.18);
  border-radius: 13px;
  background-color: ${({ theme }) => theme.colors.violet};
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 99.2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 94%;
  }
`;
const MainEvent = styled.div`
  margin: -10rem auto 0 auto;
  width: 124rem;
  min-height: 44rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 13px;
  display: flex;
  flex-direction: row;
  height: 100%;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 992px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    flex-direction: column;
    width: 100%;
  }
`;
const LogoElement = styled.div`
  background: #f3f9f9;
  width: 34rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 13px 0 0 13px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 100%;
    border-radius: 13px 13px 0 0;
  }
`;
const LogoElementImg = styled.img`
  width: 29rem;
  height: 29rem;
`;
const RecommendedElement = styled.div`
 position: absolute;
    left: 0;
    top: 2.5rem;
    height: 3.5rem;
    width: 13rem;
    background: ${({ theme }) => theme.colors.violet};
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fonts.label};
    line-height: 140%;
    border-radius: 0px 4px 4px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
  }`;
const EventContent = styled.div`
  padding: 4rem 6rem;
  display: grid;
  grid-template-columns: 17fr 7fr;
  grid-template-rows: 1fr 2fr 2fr;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: 1fr;
    padding: 3rem;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 0;
  flex-wrap: wrap;
  grid-column: 1;
  grid-row: 1;
`;
const SingleTag = styled.div`
width: max-content;
height: max-content;
padding: 6px 13px;
background: rgba(232, 230, 243, 0.6);
border-radius: 6px;
font-family: Manrope;
font-style: normal;
margin-right: 0.6rem;
margin-top: 0.6rem;
font-weight: bold;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
color: ${({ theme }) => theme.colors.navyblue};
}`;
const PriceElement = styled.div`
  display: flex;
  grid-column: 2;
  grid-row: 1;
  justify-content: flex-end;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  align-items: center;
  color: #7d4ce5;
  text-align: right;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }
`;
const TitleEvent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: 1;
  grid-row: 2;
`;
const EventLevel = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.label};
  line-height: 140%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
`;
const MainTitle = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.fontx32};
  line-height: 140%;
  color: ${({ theme }) => theme.colors.black};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: ${({ theme }) => theme.fonts.fontsx26};
  }
`;
const Pricemobile = styled.div`
  margin-top: 1.6rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.fontx26};
  line-height: 16px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.violet};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: flex;
    flex-direction: row;
  }
  @media only screen and (min-width: 993px) {
    display: none;
  }
`;
const DetailsContainer = styled.div`
  grid-column: 1;
  grid-row: 3;
  display: grid;
  grid-template-columns: 4fr 3fr 3fr;
  grid-template-rows: 60px 60px;
  font-family: Manrope;
  column-gap: 3rem;
  justify-content: flex-end;
  align-items: flex-end;
  align-content: flex-end;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.label};
  line-height: 19px;
  color: ${({ theme }) => theme.colors.navyblue};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    margin-top: 4rem;
  }
`;
const SingleDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  &:nth-of-type(1) {
    padding: 1rem 0 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightvioletbg};
  }
  &:nth-of-type(2) {
    padding: 1rem 0 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightvioletbg};
  }
  &:nth-of-type(3) {
    padding: 1rem 0 1rem 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightvioletbg};
  }
`;
const SingleDetailSpan = styled.span`
  display: block;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.miniLabel};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.lightpurple};
`;
const ReadMoreButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  grid-column: 2;
  grid-row: 3;
`;
const ButtonMobileContainer = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem auto 4rem auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: flex;
    flex-direction: row;
  }
  @media only screen and (min-width: 993px) {
    display: none;
  }
`;
const DiscountContainer = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.label};
  line-height: 140%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.violet};
  border-radius: 0 0 12px 12px;
`;
const DicsountSpan = styled.span`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.label};
  line-height: 140%;
  padding: 8px 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 6px;
  margin: 0 2rem;
  color: #${({ theme }) => theme.colors.white};
`;
const ButtonMobile = styled(ButtonNavyBlueRounded)`
  width: 94%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 2rem auto 4rem auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: flex;
    flex-direction: row;
  }
  @media only screen and (min-width: 993px) {
    display: none;
  }
`;
export const OrganiserEvent = () => {
  return (
    <MainEventContainer>
      <MainEvent>
        <LogoElement>
          <LogoElementImg src={Logo} alt="" />
          <RecommendedElement>Polecane</RecommendedElement>
        </LogoElement>
        <EventContent>
          <TagsContainer>
            <SingleTag>Badania / Research</SingleTag>
            <SingleTag>Analityka</SingleTag>
            <SingleTag>Product Design</SingleTag>
            <SingleTag>Product Management</SingleTag>
            <SingleTag>Service Design</SingleTag>
            <SingleTag>UX</SingleTag>
          </TagsContainer>
          <PriceElement>2460,60 zł</PriceElement>
          <TitleEvent>
            <EventLevel>Średniozaawansowany</EventLevel>
            <MainTitle>
              Certyfikowane Warsztaty Product Discovery Practitioner
            </MainTitle>
            <Pricemobile>2460,60 zł</Pricemobile>
          </TitleEvent>
          <DetailsContainer>
            <SingleDetail>
              <SingleDetailSpan>Prowadzący</SingleDetailSpan>
              Michał Reda, Bartosz Narzelski, Adam Bartkiewicz
            </SingleDetail>
            <SingleDetail>
              <SingleDetailSpan>Liczba Miejsc</SingleDetailSpan>
              20
            </SingleDetail>
            <SingleDetail>
              <SingleDetailSpan>Lokalizacja</SingleDetailSpan>
              Online
            </SingleDetail>
            <SingleDetail>
              <SingleDetailSpan>Czas Trwania</SingleDetailSpan>
              2dni po 7h <br></br> 9:00 - 16:00
            </SingleDetail>
            <SingleDetail>
              <SingleDetailSpan>Data</SingleDetailSpan>
              22-23.04.2021
            </SingleDetail>
            <SingleDetail>
              <SingleDetailSpan>Typ</SingleDetailSpan>
              Szkolenie / warsztat
            </SingleDetail>
          </DetailsContainer>
          <ReadMoreButtonDiv>
            <ButtonNavyBlueRounded
              target="_blank"
              rel="noreferrer"
              href="https://productdiscovery.pro/warsztaty/"
              c>
              Dowiedz się więcej
            </ButtonNavyBlueRounded>
          </ReadMoreButtonDiv>
        </EventContent>
        <ButtonMobileContainer>
          <ButtonMobile
            target="_blank"
            rel="noreferrer"
            href="https://productdiscovery.pro/warsztaty/">
            Dowiedz się więcej
          </ButtonMobile>
        </ButtonMobileContainer>
      </MainEvent>
      <DiscountContainer>
        KOD RABATOWY -300zł
        <DicsountSpan>designhub300</DicsountSpan>
      </DiscountContainer>
    </MainEventContainer>
  );
};
