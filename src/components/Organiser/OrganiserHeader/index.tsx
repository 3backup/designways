import React from "react";
import Image from "next/image";
import Link from "next/link";

import backArrow from "images/back-button.svg";
import logoOrganiser from "images/logo-product-discovery-pro.png";
import linkedIn from "images/LinkedIN.svg";
import facebook from "images/Facebook_white.svg";

import styled from "styled-components";

const OrganiserHeaderContainer = styled.header`
  width: 100%;
  min-height: 50rem;
  background: ${({ theme }) => theme.colors.violet};
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    min-height: 60rem;
  } ;
`;
const MenuContainer = styled.div`
  display: flex;
  min-height: 7.2rem;
  padding: 0 4.4rem;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 0 1rem;
  }
`;
const OneThird = styled.div`
  width: 33%;
`;
const MenuBackButton = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  opacity: 0.7;
  background: transparent;
  transition: 0.3s;
  &:hover {
    opacity: 1;
  }
`;
const MenuBackButtonSpan = styled.span`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  margin-left: 2rem;
  font-size: ${({ theme }) => theme.fonts.labels};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.white};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: none;
  }
`;
const OrganiserTitleMain = styled.h1`
  font-family: Manrope;
  width: 33%;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.biggerBase};
  line-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.5;
`;
const NavContainer = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 33%;
`;
const NavUl = styled.ul`
  display: flex;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }
`;
const NavLi = styled.a`
  margin-left: 3rem;
  color: ${({ theme }) => theme.colors.white};
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  padding-top: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 4rem;
  display: block;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s;
  border-bottom: 1px solid transparent;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    margin-left: 1.5rem;
  }
  &:hover {
    opacity: 1;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  }
`;
const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 103rem;
  margin: 0 auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    max-width: 992px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    max-width: 94%;
  }
`;
const LogoOrganiser = styled.img`
  margin: 5rem 0;
  width: 16rem;
`;
const OrganiserTitleLead = styled.h2`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.titlePage};
  line-height: 68px;
  display: flex;
  margin-bottom: 1.8rem;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: ${({ theme }) => theme.fonts.fontsx26};
    line-height: 140%;
  }
`;
const OrganiserParagraph = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.leadeHeight};
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
`;
const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 5rem;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
`;
const EternalLink = styled.a`
  padding: 14px 36px;
  right: 44.4rem;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 62px;
  color: ${({ theme }) => theme.colors.navyblue};
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.label};
  line-height: 19px;
  transition: ease 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
const SocialMedia = styled.div`
  display: flex;
  height: 100%;
  padding: 1rem 0 0 0;
  align-items: center;
  a {
    display: block;
  }
`;
const SocialMediaIcon = styled.img`
  width: 3rem;
  height: 3rem;
  margin-right: 3rem;
  transition: ease 0.3s;
  &:hover {
    transform: scale(1.05);
  }
`;
export const OrganiserHeader = () => {
  return (
    <OrganiserHeaderContainer>
      <MenuContainer>
        <OneThird>
          <Link href="/">
            <MenuBackButton type="button">
              <Image
                src={backArrow}
                alt="back arrow"
                width={20}
                height={20}
                className="nav__imageButton"
              />
              <MenuBackButtonSpan>Wróć do głównej</MenuBackButtonSpan>
            </MenuBackButton>
          </Link>
        </OneThird>
        <OrganiserTitleMain>Product Discovery Pro</OrganiserTitleMain>
        <NavContainer>
          <NavUl>
            <NavLi as="a" href="#about">
              O Organizatorze
            </NavLi>
            <NavLi as="a" href="#speaker">
              Prowadzący
            </NavLi>
            <NavLi as="a" href="#testimonial">
              Opinie
            </NavLi>
          </NavUl>
        </NavContainer>
      </MenuContainer>
      <BasicInfo>
        <LogoOrganiser
          src={logoOrganiser}
          alt="Logo organiser"
          width={160}
          height={60}
        />
        <OrganiserTitleLead>Buduj Lepsze Produkty, Szybciej</OrganiserTitleLead>
        <OrganiserParagraph>
          Pomagamy budować produkty, które pokochają Twoi klienci.
        </OrganiserParagraph>
        <LinksContainer>
          <SocialMedia>
            <a href="https://www.linkedin.com/company/productdiscovery-pro/">
              <SocialMediaIcon src={linkedIn} alt="" />
            </a>
            <a href="https://www.facebook.com/productdiscoverypro">
              <SocialMediaIcon src={facebook} alt="" />
            </a>
          </SocialMedia>
          <EternalLink href="https://productdiscovery.pro/">
            Strona organizatora
          </EternalLink>
        </LinksContainer>
      </BasicInfo>
    </OrganiserHeaderContainer>
  );
};
