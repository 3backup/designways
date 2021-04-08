/* eslint-disable prettier/prettier */
import React, { useState, useMemo, useEffect } from "react";
import dayjs from "dayjs";
import {
  Workshop,
  WorkshopLevel,
  WorkshopSortType,
  WorkshopTag,
} from "../../types";
import { WorkshopTagButton } from "../WorkshopTagButton";
import { SortButton } from "./components/SortButton";
import { sortEvents } from "./helpers";
import { WorkshopItem } from "../WorkshopItem";

enum PriceFilter {
  Free,
  Paid,
}

type Props = {
  events: Workshop[];
  tags: WorkshopTag[];
  levels: WorkshopLevel[];
};

export const Workshops = ({ events, tags, levels }: Props) => {
  // aktualne sortowanie i aktualnie wybrane wydarzenia
  const [sortType, setSortType] = useState<WorkshopSortType>(
    WorkshopSortType.ByDate,
  );
  const [currentTags, setCurrentTags] = useState<WorkshopTag[]>([]);
  const [currentLevels, setCurrentLevels] = useState<WorkshopLevel[]>([]);
  const [currentPriceFilters, setCurrentPriceFilters] = useState<PriceFilter[]>(
    [],
  );

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
      events.filter((event) => {
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
    [events, currentLevels, currentTags, currentPriceFilters],
  );

  const oldEvents = useMemo(
    () =>
      sortEvents(
        filteredEventsCalculated.filter(
          (event) => dayjs(event.startDate).unix() < dayjs().unix(),
        ),
        sortType,
        true,
      ),
    [filteredEventsCalculated, sortType],
  );

  const onGoingEvents = useMemo(
    () =>
      sortEvents(
        filteredEventsCalculated.filter(
          (event) => dayjs(event.startDate).unix() > dayjs().unix(),
        ),
        sortType,
        false,
      ),
    [filteredEventsCalculated, sortType],
  );

  return (
    <>
      <div className="container container--xl filter__main">
        <div className="tag__container">
          <h6 className="text__h6">Wybierz tematyke</h6>
          <div className="tag__tags">
            {tags.map((tag) => (
              <WorkshopTagButton
                isActive={currentTags.includes(tag)}
                isHuge={false}
                key={tag.name}
                name={tag.name}
                onClick={() => toggleTag(tag)}
              />
            ))}
          </div>
        </div>
        <div className="tag__container">
          <h6 className="text__h6">Stopień zaawansowania:</h6>
          <div className="tag__tags">
            {levels.map((level) => (
              <WorkshopTagButton
                isActive={currentLevels.includes(level)}
                key={level.name}
                isHuge={false}
                onClick={() => toggleLevel(level)}
                name={level.name}
              />
            ))}
          </div>
        </div>
        <div className="tag__container">
          <h6 className="text__h6">Cena:</h6>
          <div className="tag__tags">
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
          </div>
        </div>
      </div>

      <div className="container container--big sortElement">
        <div className="sortElement__countEvents text__h6">
          Liczba znalezionych wydarzeń:
          <span id="eventNumber">{filteredEventsCalculated.length}</span>
        </div>
        <div className="sortElement__sortButtonContainer">
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
        </div>
      </div>
      <div className="container container--big" id="lecture">
        {onGoingEvents.map((event) => (
          <WorkshopItem
            key={`${event.title}${dayjs(event.startDate).unix()}`}
            post={event}
          />
        ))}

        {/* {!!oldEvents.length && (
          <div className='pastEvent text__h6'> Ubiegłe wydarzenia</div>
        )} */}

        {oldEvents.map((event) => (
          <WorkshopItem
            key={`${event.title}${dayjs(event.startDate).unix()}`}
            oldEvent
            post={event}
          />
        ))}
      </div>
    </>
  );
};
