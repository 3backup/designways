export type Workshop = {
  tags: Tag[];
  skill: string;
  title: string;
  speaker: string;
  date: string;
  location: string;
  type: string;
  cost: number;
  url: string;
  spots: number;
  duration: string;
};

type Tag = {
  fields: {
    name: string;
  }
}