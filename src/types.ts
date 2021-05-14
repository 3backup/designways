export enum WorkshopSortType {
  ByPrice,
  ByDate,
}

export type Workshop = {
  certificate: boolean;
  duration: string;
  endDate: string;
  startDate: string;
  image: FileSys;
  level: ExtendObject<WorkshopLevel>;
  location: string;
  price: number;
  speaker: string;
  spots: number;
  tags: ExtendObject<WorkshopTag>[];
  title: string;
  type: string;
  url: string;
};

export type FormattedWorkshop = Workshop & {
  normalizedDateStart: number,
  normalizedDateEnd: number
}

export type WorkshopLevel = {
  name: string;
};

export type WorkshopTag = {
  name: string;
};

export type FileSys = {
  fields : {
    file: {
      url: string;
    };
  },
  title: string;
};

export type ExtendObject<T> = {
  fields: T;
};
