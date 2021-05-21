import { FormattedWorkshop, WorkshopSortType } from "../../types";

export const sortEvents = (
  events: FormattedWorkshop[],
  sortType: WorkshopSortType,
  isOld: boolean
) => {
  if (sortType === WorkshopSortType.ByPrice) {
    return events.sort((a, b) => a.price - b.price);
  }
  if (isOld) {
    return events
      .sort((a, b) => a.normalizedDateStart - b.normalizedDateStart)
      .reverse();
  }

  return events.sort((a, b) => a.normalizedDateStart - b.normalizedDateStart);
};
