import { createClient } from "contentful";
import { Workshop, WorkshopLevel, WorkshopTag } from "../types";

const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space,
  accessToken,
});

const getResource = async <T>(resourceName: string, orderField: string) => {
  const entries = await client.getEntries({
    content_type: resourceName,
    order: `fields.${orderField}`,
  });
  if (!entries.items) {
    console.warn(`Error getting Entries for ${resourceName}.`);
  }
  return (entries.items.map((element) => element.fields) as unknown) as T[];
};

export const getEvents = () => getResource<Workshop>("event", "startDate");
export const getTags = () => getResource<WorkshopTag>("tag", "name");
export const getLevels = () => getResource<WorkshopLevel>("level", "name");
