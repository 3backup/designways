import dayjs from "dayjs";

import { Workshop, WorkshopSortType } from "../../types";

export const sortEvents = (
  events: Workshop[],
  sortType: WorkshopSortType,
  isOld: boolean
) => {
  if (sortType === WorkshopSortType.ByPrice) {
    return events.sort((a, b) => a.price - b.price);
  }
  if (isOld) {
    return events
      .sort((a, b) => dayjs(a.startDate).unix() - dayjs(b.startDate).unix())
      .reverse();
  }

  return events.sort(
    (a, b) => dayjs(a.startDate).unix() - dayjs(b.startDate).unix()
  );
};
