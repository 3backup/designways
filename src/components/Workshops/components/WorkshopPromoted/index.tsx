import React from "react";
import styled from "styled-components";
import { ContainerBig } from "../../../styles/container";
import { WorkshopItem } from "../WorkshopItem";
import {
  FormattedWorkshop,
  Workshop,
  WorkshopLevel,
  WorkshopTag,
} from "../../../../types";

type Props = {
  events: Workshop[];
  workshop: FormattedWorkshop[];
};
const ContainerPromoted = styled.section`
  width: 100%;
  position: relative;
  margin-top: -13rem;
  z-index: -9;
  padding-top: 13rem;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.veryLightVioletBg};
`;
const PromotedTitle = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.biggerBase};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.violet};
  margin-bottom: 2rem;
`;
export const WorkshopPromoted = ({ events }: Props) => {
  return (
    <ContainerPromoted>
      {" "}
      <ContainerBig>
        {" "}
        <PromotedTitle>Wyrónione wydarzenie</PromotedTitle>
        {events.map((event) => (
          <WorkshopItem
            key={`${event.title}`}
            workshop={event}
            isActive
            promoted
          />
        ))}
      </ContainerBig>
    </ContainerPromoted>
  );
};

export default WorkshopPromoted;
