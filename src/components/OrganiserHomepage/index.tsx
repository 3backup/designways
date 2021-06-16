import React from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Logo from "../../images/logo-product-discovery-pro.svg";

import { ContainerOrganiserHome } from "../styles/container";

const OrganiserHomepageSection = styled.section`
  padding: 8rem 0;
`;
const OrganiserTitle = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.leadeHeight};
  line-height: 140%;
  text-align: cetner;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.navyblue};
`;
const OrganiserImages = styled.div`
  margin: 5rem 0;
`;
const OrganiserParagraph = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.biggerBase};
  color: ${({ theme }) => theme.colors.darkviolet};
  line-height: 140%;
  text-align: center;
`;
const OrganiserParagraphSpan = styled.span`
  text-decoration: underline;
`;
export const OrganiserHomepage = () => (
  <OrganiserHomepageSection>
    <ContainerOrganiserHome>
      <OrganiserTitle>Nasi organizatorzy</OrganiserTitle>
      <OrganiserImages>
        <Link href="/organiser/product-discovery-pro">
          <Image
            src={Logo}
            alt="Logo Product Discovery Pro"
            width={160}
            height={60}
          />
        </Link>
      </OrganiserImages>
      <OrganiserParagraph>
        Chcesz stworzyć swój profil organizatora? Napisz do nas na{" "}
        <OrganiserParagraphSpan>hello@designways.io</OrganiserParagraphSpan>
      </OrganiserParagraph>
    </ContainerOrganiserHome>
  </OrganiserHomepageSection>
);
