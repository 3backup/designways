export enum WorkshopSortType {
  ByPrice,
  ByDate,
}

export type Workshop = {
  id: string;
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
  normalizedDateStart: number;
  normalizedDateEnd: number;
};

export type WorkshopLevel = {
  name: string;
  id: string;
};

export type WorkshopTag = {
  name: string;
  id: string;
};

export type FileSys = {
  fields: {
    file: {
      url: string;
    };
  };
  title: string;
};

export type ExtendObject<T> = {
  fields: T;
};

export type Speaker = {
  name: string;
  image: string;
  firstParagraph: string;
  secondParagraph: string;
  facebook: string;
  linkedin: string;
};

export type FormFile = {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  buffer: ArrayBuffer;
  size: number;
};
