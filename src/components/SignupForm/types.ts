export type File = {
  path: string;
};

export type SuggestFormValues = {
  title: string;
  speaker: string;
  url: string;
  spots: string;
  startDate: string;
  startDateTime: string;
  images: ExtendedFile[];
  endDate: string;
  endDateTime: string;
  duration: string;
  level: string[];
  tags: string[];
};

export type ExtendedFile = File & { preview?: string };
export type Option = { id: string; name: string };
