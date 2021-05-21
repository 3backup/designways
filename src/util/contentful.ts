import { createClient } from "contentful";
import { createClient as createClientManager } from "contentful-management";
import dayjs from "dayjs";

import { FormFile, Workshop, WorkshopLevel, WorkshopTag } from "../types";
import { decorateWithCode, mockWrapper } from "./tools";

const BRANCH = "master";
const space = process.env.CONTENTFUL_SPACE;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const accessTokenManagement = process.env.CONTENTFUL_ACCESS_TOKEN_MANAGEMENT;

const getClient = () => {
  if (process.env.USE_MOCKS === "2") {
    return null;
  }
  return createClient({
    space,
    accessToken,
  });
};

const getClientManager = () => {
  return createClientManager({
    space,
    accessToken: accessTokenManagement,
  });
};

const client = getClient();

type ContentfulElement<T> = {
  sys: {
    id: string;
  };
  fields: T;
};

const getResource = async <T>(resourceName: string, orderField: string) => {
  if (!client) {
    return null;
  }
  try {
    const entries = await client.getEntries({
      content_type: resourceName,
      order: `fields.${orderField}`,
    });
    if (!entries.items) {
      console.warn(`Error getting Entries for ${resourceName}.`);
    }
    return (entries.items.map((element: any) => ({
      ...element.fields,
      id: element.sys.id,
    })) as unknown) as T[];
  } catch (err) {
    return Promise.resolve([] as T[]);
  }
};

export const uploadImage = async (file: FormFile) => {
  const spaceE = await getClientManager().getSpace(space);
  const environment = await spaceE.getEnvironment(BRANCH);

  const uploaded = await environment.createUpload({
    file: file.buffer,
  });
  return environment.createAsset(
    decorateWithCode({
      title: file.originalname,
      file: {
        fileName: file.originalname,
        contentType: file.mimetype,
        uploadFrom: {
          sys: {
            type: "Link",
            linkType: "Upload",
            id: uploaded.sys.id,
          },
        },
      },
    }) as any
  );
};
export const sendEventForm = async (data: Record<string, any>) => {
  const currentTime = dayjs().unix();
  const spaceE = await getClientManager().getSpace(space);
  const environment = await spaceE.getEnvironment(BRANCH);

  environment.createEntryWithId(
    "event",
    currentTime.toString(),
    decorateWithCode(data)
  );
};

const getMockyResource = mockWrapper(getResource);

export const getEvents = () => getMockyResource<Workshop>("event", "startDate");
export const getTags = () => getMockyResource<WorkshopTag>("tag", "name");
export const getLevels = () => getMockyResource<WorkshopLevel>("level", "name");
