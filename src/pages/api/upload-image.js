const contentful = require("contentful-management");
const client = contentful.createClient({
  accessToken: "CFPAT-8SGURhp-zdnRpl92sLGqDFiaZYnnDX3_39QegoIgBlA",
});
const fs = require("fs");
client
  .getSpace("vjm3j88sc8ek")
  .then((space) => space.getEnvironment("master"))
  .then((environment) =>
    environment.createAssetFromFiles({
      fields: {
        title: {
          "en-US": "Hello there",
        },
        description: {
          "en-US": "Asset description",
        },
        file: {
          "en-US": {
            contentType: "image/png",
            fileName: "bejamas.png",
            file: fs.createReadStream("microphone.png"),
          },
        },
      },
    }),
  )
  .then((asset) => asset.processForAllLocales())
  .then((asset) => asset.publish())
  .catch(console.error);
