/* eslint-disable prettier/prettier */
import styled from "styled-components";
import dayjs from "dayjs";
import React, { useState, useMemo } from "react";
import { ContainerXl, ContainerBig } from "../styles/container";
import {
  FormattedWorkshop,
  Workshop,
  WorkshopLevel,
  WorkshopSortType,
  WorkshopTag,
} from "../../types";

import { sortEvents } from "./helpers";

import { SortButton, WorkshopItem, WorkshopTagButton } from "./components";

enum PriceFilter {
  Free,
  Paid,
}

type Props = {
  events: Workshop[];
  tags: WorkshopTag[];
  levels: WorkshopLevel[];
};

const PostsPerPage = 5;

const TagsContainer = styled.div``;
const TagTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const ContainerWorkshop = styled(ContainerXl)`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 3fr 2fr 1fr;
  padding: 40px 60px;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};
  min-height: 140px;
  margin-top: -100px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.01),
    0px 15px 60px -28px rgba(23, 23, 28, 0.17);
  border-radius: 13px;
  margin-bottom: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin-top: -80px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    padding: 30px 30px;
    grid-template-rows: 1fr auto auto;
    gap: 2.5rem;
    grid-template-columns: 1fr;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    margin-top: -130px;
  }
`;
const ContianerLecture = styled(ContainerBig)`
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    flex-direction: column;
  }
`;
const TagTitle = styled.h6`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.lightpurple};
`;
const SortButtonContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.s}) {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
const NumbersOfEvents = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.darkgrey};
  span {
    color: ${({ theme }) => theme.colors.violet};
  }
`;
const PastButton = styled.button`
  display: block;
  cursor: pointer;
  width: 100%;
  max-width: 768px;
  line-height: 60px;
  height: 60px;
  color: white;
  margin: 0 auto;
  justify-content: center;
  background: #2a2d50;
  border-radius: 12px;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  display: flex;
  align-items: center;
  text-align: center;
  outline: none;
  border: none;
  color: #ffffff;
  transition: 0.3s ease;
  &:hover {
    background-color: #7e4ce6;
    color: #fff;
  }
`;
const PastEvent = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 150%;
  color: ${({ theme }) => theme.colors.darkgrey};
`;

export const Workshops = ({ events, tags, levels }: Props) => {
  // aktualne sortowanie i aktualnie wybrane wydarzenia
  const [sortType, setSortType] = useState<WorkshopSortType>(
    WorkshopSortType.ByDate,
  );

  const formattedWorkshops: FormattedWorkshop[] = useMemo(
    () =>
      events.map((event) => ({
        ...event,
        normalizedDateStart: dayjs(event.startDate).unix(),
        normalizedDateEnd: dayjs(event.endDate).unix(),
      })),
    [events],
  );

  const [currentTags, setCurrentTags] = useState<WorkshopTag[]>([]);
  const [currentLevels, setCurrentLevels] = useState<WorkshopLevel[]>([]);
  const [currentPriceFilters, setCurrentPriceFilters] = useState<PriceFilter[]>(
    [],
  );
  const dateNow = dayjs().unix();

  const toggleTag = (tag: WorkshopTag) =>
    setCurrentTags(
      currentTags.includes(tag)
        ? currentTags.filter((current) => current.name !== tag.name)
        : [...currentTags, tag],
    );
  const toggleLevel = (level: WorkshopLevel) =>
    setCurrentLevels(
      currentLevels.includes(level)
        ? currentLevels.filter((current) => current.name !== level.name)
        : [...currentLevels, level],
    );

  const togglePrice = (filter: PriceFilter) =>
    setCurrentPriceFilters(
      currentPriceFilters.includes(filter)
        ? currentPriceFilters.filter((current) => current !== filter)
        : [...currentPriceFilters, filter],
    );

  const filteredEventsCalculated = useMemo(
    () =>
      formattedWorkshops.filter((event) => {
        if (currentTags.length) {
          const tagsNames = currentTags.map((filter) => filter.name);
          const tagsMatched = event.tags.filter((eventTag) =>
            tagsNames.includes(eventTag.fields.name),
          );
          if (!tagsMatched.length) {
            return false;
          }
        }

        if (currentLevels.length) {
          const levelsNames = currentLevels.map((filter) => filter.name);
          const levelsMatched = levelsNames.includes(event.level.fields.name);
          if (!levelsMatched) {
            return false;
          }
        }

        if (currentPriceFilters.length) {
          const eventPriceType =
            event.price > 0 ? PriceFilter.Paid : PriceFilter.Free;
          const currentPriceFiltersMatched = currentPriceFilters.includes(
            eventPriceType,
          );
          if (!currentPriceFiltersMatched) {
            return false;
          }
        }

        return true;
      }),
    [formattedWorkshops, currentLevels, currentTags, currentPriceFilters],
  );

  const oldEvents = useMemo(
    () =>
      sortEvents(
        filteredEventsCalculated.filter(
          (event) => event.normalizedDateStart < dateNow,
        ),
        sortType,
        true,
      ),
    [filteredEventsCalculated, sortType],
  );

  const [numPostsToShow, setNumPostsToShow] = useState(PostsPerPage);
  const postsToShow = useMemo(() => {
    return oldEvents.slice(0, numPostsToShow);
  }, [numPostsToShow, oldEvents]);

  const onBtnClick = () => setNumPostsToShow(numPostsToShow + PostsPerPage);

  const onGoingEvents = useMemo(
    () =>
      sortEvents(
        filteredEventsCalculated.filter(
          (event) => event.normalizedDateStart > dateNow,
        ),
        sortType,
        false,
      ),
    [filteredEventsCalculated, sortType],
  );

  return (
    <>
      <ContainerWorkshop>
        <TagsContainer>
          <TagTitle>Tagi:</TagTitle>
          <TagTags>
            {tags.map((tag) => (
              <WorkshopTagButton
                isActive={currentTags.includes(tag)}
                isHuge={false}
                key={tag.name}
                name={tag.name}
                onClick={() => toggleTag(tag)}
              />
            ))}
          </TagTags>
        </TagsContainer>
        <TagsContainer>
          <TagTitle>Stopień zaawansowania:</TagTitle>
          <TagTags>
            {levels.map((level) => (
              <WorkshopTagButton
                isActive={currentLevels.includes(level)}
                key={level.name}
                isHuge={false}
                onClick={() => toggleLevel(level)}
                name={level.name}
              />
            ))}
          </TagTags>
        </TagsContainer>
        <TagsContainer>
          <TagTitle>Cena:</TagTitle>
          <TagTags>
            <WorkshopTagButton
              isHuge={false}
              isActive={currentPriceFilters.includes(PriceFilter.Free)}
              onClick={() => togglePrice(PriceFilter.Free)}
              name="Darmowe"
            />
            <WorkshopTagButton
              isHuge={false}
              isActive={currentPriceFilters.includes(PriceFilter.Paid)}
              onClick={() => togglePrice(PriceFilter.Paid)}
              name="Płatne"
            />
          </TagTags>
        </TagsContainer>
      </ContainerWorkshop>

      <ContianerLecture>
        <NumbersOfEvents>
          Liczba znalezionych wydarzeń:{" "}
          <span id="eventNumber">{onGoingEvents.length}</span>
        </NumbersOfEvents>
        <SortButtonContainer>
          <SortButton
            active={sortType === WorkshopSortType.ByDate}
            title="Cena: Rosnąco"
            onClick={() => setSortType(WorkshopSortType.ByPrice)}
          />
          <SortButton
            active={sortType === WorkshopSortType.ByPrice}
            title="Data: Najbliższa"
            onClick={() => setSortType(WorkshopSortType.ByDate)}
          />
        </SortButtonContainer>
      </ContianerLecture>
      <ContainerBig id="lecture">
        <div>
          {onGoingEvents.map((event) => (
            <WorkshopItem
              key={`${event.title}-${event.normalizedDateStart}`}
              workshop={event}
              isActive
            />
          ))}
        </div>
        <PastEvent>Ubiegłe wydarzenia</PastEvent>
        <div>
          {postsToShow.map((event) => (
            <WorkshopItem
              key={`${event.title}-${event.normalizedDateStart}`}
              workshop={event}
            />
          ))}
          <PastButton onClick={onBtnClick} type="button">
            Zobacz więcej
          </PastButton>
        </div>
      </ContainerBig>
    </>
  );
};
