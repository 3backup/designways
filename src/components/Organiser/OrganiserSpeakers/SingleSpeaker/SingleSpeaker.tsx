import React from "react";
import styled from "styled-components";
import Facebook from "images/Facebook_purple.svg";
import LinkedIn from "images/LinkedIN_purple.svg";
import { Speaker } from "../../../../types";

const SingleSpeakerContainer = styled.div`
  max-width: 107rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 5rem;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  margin: 1.2rem auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    max-width: 992px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    max-width: 100%;
    flex-direction: column;
  }
`;
const SingleSpeakerImageContainer = styled.div`
  display: flex;
  width: 28.5%;
`;
const SingleSpeakerImg = styled.img`
  border-radius: 1rem;
  width: 21rem;
  height: 21rem;
      @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.m}) {
        width: 15rem;
        height: 15rem;
      }
    }`;
const SingleSpeakerAbout = styled.div`
  width: 71.5%;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.s}) {
    width: 100%;
    margin: 2rem 0;
  }
`;
const SingleSpeakerNames = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.fontsx26};
  line-height: 140%;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;
const SingleSpeakerP = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 160%;
  display: flex;
  margin-top: 1.6rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.base};
  opacity: 0.8;
  &--second {
    margin-top: 2.4rem;
  }
`;
const SingleSpeakerPS = styled(SingleSpeakerP)`
  margin-top: 2.4rem;
`;
const SingleSpeakerSocialContainer = styled.div`
  margin-top: 4rem;
`;
const SingleSpeakerSocialLi = styled.a`
  margin-right: 1.6rem;
`;

export const SingleSpeaker = ({
  name,
  image,
  firstParagraph,
  secondParagraph,
  facebook,
  linkedin,
}: Speaker) => {
  return (
    <SingleSpeakerContainer>
      <SingleSpeakerImageContainer>
        <SingleSpeakerImg src={image} alt="" />
      </SingleSpeakerImageContainer>
      <SingleSpeakerAbout>
        <SingleSpeakerNames>{name}</SingleSpeakerNames>
        <SingleSpeakerP>{firstParagraph}</SingleSpeakerP>
        <SingleSpeakerPS>{secondParagraph}</SingleSpeakerPS>
        <SingleSpeakerSocialContainer>
          <SingleSpeakerSocialLi
            className="SingleSpeaker__socials--single"
            target="_blank"
            rel="noreferrer"
            href={linkedin}>
            <img src={LinkedIn} alt="" />
          </SingleSpeakerSocialLi>
          <a href={facebook} target="_blank" rel="noreferrer">
            <img src={Facebook} alt="" />
          </a>
        </SingleSpeakerSocialContainer>
      </SingleSpeakerAbout>
    </SingleSpeakerContainer>
  );
};
