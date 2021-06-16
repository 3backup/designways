import React from "react";

import styled from "styled-components";
import { SingleSpeaker } from "./SingleSpeaker/SingleSpeaker";

import { Speaker } from "../../../types";

type Props = {
  speakers: Speaker[];
};

const OrganiserSpeaker = styled.div`
  width: 100%;
  background: #f4f4f5;
`;
const OrganiserSpeakerCotent = styled.div`
  max-width: 118rem;
  padding: 7rem 0;
  margin: 0 auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    padding: 7rem 2rem;
  }
`;

const OrganiserTitle = styled.p`
  width: 25%;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  text-align: right;
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.fonts.fontsx26};
  line-height: 140%;
  color: ${({ theme }) => theme.colors.navyblue};
  opacity: 0.8;
`;
export const OrganiserSpeakers = ({ speakers }: Props) => {
  return (
    <OrganiserSpeaker id="speaker">
      <OrganiserSpeakerCotent>
        <OrganiserTitle>Prowadzący</OrganiserTitle>
        {speakers.map((speaker) => (
          <SingleSpeaker {...speaker} />
        ))}
      </OrganiserSpeakerCotent>
    </OrganiserSpeaker>
  );
};
