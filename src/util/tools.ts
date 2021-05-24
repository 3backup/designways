import fs from "fs";

type ResourceFn = <T>(resourceName: string, orderField: string) => Promise<T[]>;

export const mockWrapper = (dumpedFn: ResourceFn) => {
  return async <T>(resourceName: string, orderField: string) => {
    if (process.env.USE_MOCKS === "2") {
      const savedEntries = fs.readFileSync(`./mocks/${resourceName}.json`);
      return (JSON.parse(
        (savedEntries as unknown) as string
      ) as unknown) as T[];
    }

    const results = await dumpedFn(resourceName, orderField);
    if (process.env.USE_MOCKS === "1") {
      fs.writeFileSync(`./mocks/${resourceName}.json`, JSON.stringify(results));
    }
    return results;
  };
};

export const decorateWithCode = (data: Record<string, unknown>) => {
  const fields = Object.keys(data).reduce(
    (acc, key) => ({
      ...acc,
      [key]: {
        "en-US": data[key],
      },
    }),
    {}
  );
  return {
    fields,
  };
};
