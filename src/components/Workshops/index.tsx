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

  const filteredEvents = useMemo(
    () =>
      events.filter((event) => {
        console.log(event);
        let tags = null;
        let levels = null;
        let price = null;
        const { name: eventLevel } = event.level.fields;
        if (
          currentLevels.length == 0 &&
          currentPriceFilters.length == 0 &&
          currentTags.length == 0
        ) {
          tags = true;
          levels = true;
          price = true;
        }
        currentLevels.forEach((element) => {
          for (const singleLevel of Object.values(element)) {
            if (singleLevel == eventLevel) {
              exampleArray.push(event);
              console.log(exampleArray);

              levels = true;
            }
          }
        });
        tags === null ? true : tags;
        levels === null ? true : levels;
        price === null ? true : price;
        console.log(tags, levels, price);
        return tags && levels && price;
      }),
    [events],
  );

  const oldEvents = useMemo(
    () =>
      sortEvents(
        filteredEvents.filter(
          (event) => dayjs(event.startDate).unix() < dayjs().unix(),
        ),
        sortType,
        true,
      ),
    [filteredEvents, sortType],
  );

  const onGoingEvents = useMemo(
    () =>
      sortEvents(
        filteredEvents.filter(
          (event) => dayjs(event.startDate).unix() > dayjs().unix(),
        ),
        sortType,
        false,
      ),
    [filteredEvents, sortType],
  );

  return (
    <>
      <div className='container container--xl filter__main'>
        <div className='tag__container'>
          <h6 className='text__h6'>Wybierz tematyke</h6>
          <div className='tag__tags'>
            {tags.map((tag) => (
              <WorkshopTagButton
                isActive={currentTags.includes(tag)}
                key={tag.name}
                name={tag.name}
                onClick={() => toggleTag(tag)}
              />
            ))}
          </div>
        </div>
        <div className='tag__container'>
          <h6 className='text__h6'>Stopień zaawansowania:</h6>
          <div className='tag__tags'>
            {levels.map((level) => (
              <WorkshopTagButton
                isActive={currentLevels.includes(level)}
                key={level.name}
                onClick={() => toggleLevel(level)}
                name={level.name}
              />
            ))}
          </div>
        </div>
        <div className='tag__container'>
          <h6 className='text__h6'>Cena:</h6>
          <div className='tag__tags'>
            <WorkshopTagButton
              isActive={currentPriceFilters.includes(PriceFilter.Free)}
              onClick={() => togglePrice(PriceFilter.Free)}
              name='Darmowe'
            />
            <WorkshopTagButton
              isActive={currentPriceFilters.includes(PriceFilter.Paid)}
              onClick={() => togglePrice(PriceFilter.Paid)}
              name='Płatne'
            />
          </div>
        </div>
      </div>

      <div className='container container--big sortElement'>
        <div className='sortElement__countEvents text__h6'>
          Liczba znalezionych wydarzeń:{" "}
          <span id='eventNumber'>{filteredEvents.length}</span>
        </div>
        <div className='sortElement__sortButtonContainer'>
          <SortButton
            active={sortType === WorkshopSortType.ByDate}
            title='Cena: Rosnąco'
            onClick={() => setSortType(WorkshopSortType.ByPrice)}
          />
          <SortButton
            active={sortType === WorkshopSortType.ByPrice}
            title='Data: Najbliższa'
            onClick={() => setSortType(WorkshopSortType.ByDate)}
          />
        </div>
      </div>
      <div className='container container--big' id='lecture'>
        {onGoingEvents.map((event) => (
          <WorkshopItem
            key={`${event.title}${dayjs(event.startDate).unix()}`}
            post={event}
          />
        ))}
        {!!oldEvents.length && (
          <div className='pastEvent text__h6'> Ubiegłe wydarzenia</div>
        )}

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
