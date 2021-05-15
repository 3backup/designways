import React from "react";

import { SingleSpeaker } from "./SingleSpeaker/SingleSpeaker";

import { Speaker } from "../../../types";

type Props = {
  speakers: Speaker[];
};

export const OrganiserSpeakers = ({ speakers }: Props) => {
  return (
    <div className="OrganiserSpeaker" id="speaker">
      <div className="OrganiserSpeaker__content">
        <p className="OrganiserSpeaker__title">Prowadzący</p>
        {speakers.map((speaker) => (
          <SingleSpeaker {...speaker} />
        ))}
      </div>
    </div>
  );
};
