import React from "react";
import styled from "styled-components";
import Logo from "images/Logo_horizontal_new.svg";
import InstagramLogo from "images/instagram-dark.svg";
import FacebookLogo from "images/facebook-dark.svg";

const FooterContainer = styled.footer`
  min-height: 5rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 119rem;
  width: 119rem;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-top: 1px solid ${({ theme }) => theme.colors.lightgray};
  padding: ${({ theme }) => theme.space.s} 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 0 10px;
    max-width: 96%;
    width: 96%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    padding: 0px 2.5rem;
    max-width: 96%;
    width: 96%;
    flex-direction: column-reverse;
    justify-content: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    max-width: 92%;
    width: 92%;
  }
`;
const FooterHalf = styled.div`
  width: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    img {
      margin: 0 auto;
      width: 33%;
    }
  }
`;
const FooterRight = styled(FooterHalf)`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.darkgrey};
  & > * {
    margin-left: 5rem;
    @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
      margin: 2.5rem 0;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: column-reverse;
    margin: 2rem;
    width: 100%;
  }
`;
const FooterCopyrights = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fonts.label};
  margin-top: 10px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.secondarybackground};
  a {
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fonts.label};
    margin-top: 10px;
    line-height: 100%;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.secondarybackground};
  }
`;
const FooterTerm = styled.p`
  a {
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 140%;
    text-decoration: none;
    text-align: center;
    letter-spacing: 0.02em;
    color: #575983;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 1rem 0;
    width: 100%;
  }
`;
const SocialMedia = styled.div`
  @media (max-width: 768px) {
    width: 80%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-evenly;
  }
  & > * {
    margin-left: 5rem;
    @media (max-width: 768px) {
      margin: 0;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterHalf>
        <img src={Logo} alt="logo-bottom" />
        <FooterCopyrights>
          All Rights Reserverd © 2021 DesignWays. Skontaktuj się pod:
          <a href="mailto:hello@designways.io">hello@deisgnways.io</a>
        </FooterCopyrights>
      </FooterHalf>
      <FooterRight>
        <FooterTerm>
          <a href="https://www.designways.io/polityka-prywatnosci.html">
            Terms & Privacy
          </a>
        </FooterTerm>
        <SocialMedia>
          <a href="https://www.facebook.com/designwaysconf">
            <img src={InstagramLogo} alt="" />
          </a>
          <a href="https://www.instagram.com/designwaysconf/">
            <img src={FacebookLogo} alt="" />
          </a>
        </SocialMedia>
      </FooterRight>
    </FooterContainer>
  );
};
