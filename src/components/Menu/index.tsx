import React from "react";
import Image from "next/image";
import styled from "styled-components";

import {
  Navigation,
  NavigationList,
  NavigationElement,
} from "../styles/navigation";
import { LinkMenu } from "../styles/links";
import { ButtonMenu } from "../styles/button";
import { ContainerBig } from "../styles/container";
import Linkedin from "./LinkedIN.svg";

const ContainerMenu = styled(ContainerBig)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  height: 4.2rem;
  margin: 3rem auto;
  align-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    justify-content: center;
  }
`;
const SocialMediaElements = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 6px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }
`;
export const Menu = () => {
  return (
    <ContainerMenu>
      <Image
        src="/images/Logo_horizontal_white.svg"
        alt="Logo DesignWays"
        width={168}
        height={48}
      />
      <Navigation>
        <a
          href="https://airtable.com/shrAwlFIeLbevMEa6"
          rel="noreferrer"
          target="_blank">
          <ButtonMenu>
            <Image
              src="/images/plus.svg"
              alt="plus in the button"
              width={18}
              height={18}
              className="nav__imageButton"
            />
            <span>Dodaj wydarzenie</span>
          </ButtonMenu>
        </a>
        <NavigationList>
          <NavigationElement>
            <LinkMenu href="#newsletter">Newsletter</LinkMenu>
          </NavigationElement>
          <NavigationElement>
            <LinkMenu href="mailto:hello@designways.io">
              hello@designways.io
            </LinkMenu>
          </NavigationElement>
          <SocialMediaElements>
            <NavigationElement>
              <a
                href="https://www.facebook.com/designwaysconf
          "
                rel="noreferrer"
                target="_blank">
                <Image
                  src="/images/facebook.svg"
                  alt="Facebook logo"
                  width={11}
                  height={19}
                />
              </a>
            </NavigationElement>
            <NavigationElement>
              <a
                target="_blank"
                href="https://www.instagram.com/designwaysconf/"
                rel="noreferrer">
                <Image
                  src="/images/insta_icon.svg"
                  alt="Instagram logo"
                  width={19}
                  height={19}
                />
              </a>
            </NavigationElement>
            <NavigationElement>
              <a
                target="_blank"
                href="https://www.linkedin.com/company/18962434/"
                rel="noreferrer">
                <Image src={Linkedin} alt="LinkedIn" width={19} height={19} />
              </a>
            </NavigationElement>
          </SocialMediaElements>
        </NavigationList>
      </Navigation>
    </ContainerMenu>
  );
};
