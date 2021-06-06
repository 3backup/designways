import React from "react";
import Logo from "images/Logo_horizontal_new.svg";
import InstagramLogo from "images/instagram-dark.svg";
import FacebookLogo from "images/facebook-dark.svg";
import styled from "styled-components";

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
  font-size: 1.6rem;
  line-height: 140%;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.darkgrey};
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
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterHalf>
        <img src={Logo} alt="logo-bottom" />
        <FooterCopyrights>
          All Rights Reserverd © 2021 DesignWays. Skontaktuj się pod:
          <a
            className="filterFooter__footerCopyrights"
            href="mailto:hello@designways.io">
            hello@deisgnways.io
          </a>
        </FooterCopyrights>
      </FooterHalf>
      <FooterRight>
        <p className="filterFooter__footerTerms">
          <a
            href="https://www.designways.io/polityka-prywatnosci.html"
            className="filterFooter__footerTerms">
            Terms & Privacy
          </a>
        </p>
        <div className="filterFooter__socialMedia">
          <a href="https://www.facebook.com/designwaysconf">
            <img src={InstagramLogo} alt="" />
          </a>
          <a href="https://www.instagram.com/designwaysconf/">
            <img src={FacebookLogo} alt="" />
          </a>
        </div>
      </FooterRight>
    </FooterContainer>
  );
};
