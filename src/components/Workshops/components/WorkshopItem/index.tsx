import React, { useCallback } from "react";
import dayjs from "dayjs";
import styled from "styled-components";
import CertificateImage from "images/np_certificate_1117192_000000 1.svg";

import { FormattedWorkshop } from "../../../../types";
import { formatDuration, formatPriceWithCurrency } from "./helpers";
import {
  EventCategory,
  EventTypes,
  pushEvent,
} from "../../../../util/analytics";

type Props = {
  workshop: any;
  isActive?: Boolean;
  key: string;
};

const LectureDiv = styled.div`
  width: 100%;
  min-height: 50px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  border-radius: 12px;
  margin-bottom: 20px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  grid-template-rows: 1fr;
  justify-content: space-between;
  align-items: center;
  opacity: ${({ isActive = false }: Props) => (isActive ? `1` : `0.3`)};
  transition: 0.5s ease;
  :hover {
    opacity: 1;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 15px;
  }
`;
const LectureHalf = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 100%;
    margin: 1.2rem 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;
const LectureImage = styled.img`
  margin-right: 2rem;
  max-width: 19rem;
  object-fit: contain;
  max-height: 19rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: 12rem;
    max-height: 12rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    max-width: 9rem;
    max-height: 9rem;
  }
`;
const LectureDescritpion = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: flex;
    flex-direction: column-reverse;
  }
  > * {
    margin-bottom: 1.2rem;
  }
`;
const LectureTitle = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 140%;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    font-size: 1.6rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    font-size: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1.6rem;
  }
`;
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const TagSingle = styled.div`
  background: rgba(232, 230, 243, 0.6);
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.2rem;
  margin: 0 1rem 1rem 0;
  font-family: Manrope;
  font-style: normal;
  cursor: pointer;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.miniLabel};
  line-height: 19px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkgrey};
  transition: 0.5s ease;
  cursor: default;
`;
const Level = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0.8rem 0;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.miniLabel};
  line-height: 150%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.green};
`;
const ButtonDesktopReadMore = styled.a`
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.navyblue};
  border-radius: 45px;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4rem;
  height: 3.5rem;
  width: auto;
  padding: 0 1.6rem;
  margin: 0 1.6rem 0 0;
  line-height: 19px;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  transition: 0.5s ease;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    display: none;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.navyblue};
    border: 2px solid ${({ theme }) => theme.colors.navyblue};
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
const GridInfo = styled(LectureHalf)`
  border-left: 1px solid ${({ theme }) => theme.colors.lightvioletbg};
  display: grid;
  column-gap: 1rem;
  grid-auto-flow: column;
  grid-template-columns: 3fr 3fr 2fr;
  grid-template-rows: 1fr 1fr 1fr;
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.navyblue};
  row-gap: 1rem;
  > * {
    padding: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    padding: 1px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    margin: 1rem 0;
    border: none;
    font-size: 1.2rem;
  }
`;
const BorderAndSpacing = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightvioletbg};
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    border: none;
  }
`;
const TableSpan = styled.span`
  width: 150%;
  display: block;
  font-family: Manrope;
  margin-bottom: 0.2rem;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.miniLabel};
  line-height: 18px;
  color: ${({ theme }) => theme.colors.lightpurple};
`;

const PriceElement = styled.div`
  border-left: 1px solid ${({ theme }) => theme.colors.gray};
  grid-column: 3;
  grid-row: 1/-1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  position: relative;
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.darkgrey};
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 1.4rem;
  }
`;
const Certificate = styled.div`
  position: absolute;
  width: 4.4rem;
  height: 4.4rem;
  background: rgba(232, 230, 243, 0.6);
  border-radius: 50px;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  transition: all 0.3s ease-out;
  &:hover .certificate__tooltipText {
    visibility: visible;
    opacity: 1;
  }
`;
const TooltipText = styled.span`
  visibility: hidden;
  opacity: 0;
  width: 182px;
  transition: visibility 0s, opacity 0.5s linear;
  background-color: ${({ theme }) => theme.colors.navyblue};
  font-family: Manrope;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.lightvioletbg};
  text-align: center;
  border-radius: 6px;
  padding: 1rem 1rem;
  background: #${({ theme }) => theme.colors.navyblue};
  position: absolute;
  z-index: 1;
  top: 150%;
  margin-left: -60px;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    display: none;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 67%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }
`;
const CertifiacteImage = styled.img`
  height: 28px;
  width: 28px;
`;
const MobileView = styled(LectureHalf)`
  display: flex;
  @media (min-width: 993px) {
    display: none;
  }
`;
const MobileButton = styled(ButtonDesktopReadMore)`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  height: 5rem;
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    width: 90%;
  }
`;
export const WorkshopItem = ({ workshop, key, isActive }: Props) => {
  const sendEvent = useCallback(() => {
    pushEvent({
      action: EventTypes.Click,
      category: EventCategory.EventClicks,
      label: workshop.title,
      value: 1,
    });
  }, [workshop]);

  return (
    <LectureDiv key={key} isActive={isActive}>
      <LectureHalf>
        <LectureImage
          src={workshop.image.fields.file.url}
          alt={workshop.title}
        />
        <LectureDescritpion>
          <TagsContainer>
            {workshop.tags.map((singleTag) => (
              <TagSingle>{singleTag.fields.name}</TagSingle>
            ))}
          </TagsContainer>
          <Level>{workshop.level.fields.name}</Level>
          <LectureTitle>{workshop.title} </LectureTitle>
          <ButtonDesktopReadMore
            href={workshop.url}
            target="_blank"
            rel="noreferrer">
            Dowiedz się więcej
          </ButtonDesktopReadMore>
        </LectureDescritpion>
      </LectureHalf>
      <GridInfo>
        <BorderAndSpacing>
          <TableSpan>Prowadzący</TableSpan>
          {workshop.speaker}
        </BorderAndSpacing>
        <BorderAndSpacing>
          <TableSpan>Data</TableSpan>
          {dayjs(workshop.startDate).format("DD.MM.YYYY - HH:mm")}
        </BorderAndSpacing>
        <div>
          <TableSpan>Czas Trwania</TableSpan>
          {formatDuration(workshop.duration)}
        </div>
        <BorderAndSpacing>
          <TableSpan>Lokalizacja</TableSpan>
          {workshop.location}
        </BorderAndSpacing>
        <BorderAndSpacing>
          <TableSpan>Typ</TableSpan>
          {workshop.type}
        </BorderAndSpacing>
        <div>
          <TableSpan>Liczba Miejsc</TableSpan>
          {workshop.spots}
        </div>
        <PriceElement>
          <div>{formatPriceWithCurrency(workshop.price)}</div>
          {workshop.certificate ? (
            <Certificate>
              <CertifiacteImage src={CertificateImage} alt="" />
              <TooltipText className="certificate__tooltipText">
                Uczestnik otrzyma certyfikat uczestnictwa
              </TooltipText>
            </Certificate>
          ) : (
            ""
          )}
        </PriceElement>
      </GridInfo>
      <MobileView>
        <MobileButton
          as="a"
          className="lecture__join buttonMobile__cta"
          onClick={sendEvent}
          href={workshop.url}>
          Dowiedz się więcej
        </MobileButton>
      </MobileView>
    </LectureDiv>
  );
};
