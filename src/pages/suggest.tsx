import React from "react";
// import { contentful } from "contentful-management";
import { Head } from "../components/Head";
import { AuthChecker } from "../components/AuthChecker";
import { Footer } from "../components/Footer";
import { ContentAddEvent } from "../components/ContentAddEvent";
import { HeaderAddEvent } from "../components/HeaderAddEvent";

// const client = contentful.createClient({
//   accessToken: "CFPAT-8SGURhp-zdnRpl92sLGqDFiaZYnnDX3_39QegoIgBlA",
// });

export default function suggest() {
  return (
    <AuthChecker>
      <Head />
      <HeaderAddEvent />
      <ContentAddEvent />
      <Footer />
    </AuthChecker>
  );
}
// // Create entry
// client
//   .getSpace("vjm3j88sc8ek")
//   .then((space) => space.getEnvironment("master"))
//   .then((environment) =>
//     environment.createEntryWithId("event", "ddffssfd", {
//       fields: {
//         title: {
//           "en-US": "test lfffvl",
//         },
//         speaker: {
//           "en-US": "Tomasz Osowski",
//         },
//         url: {
//           "en-US": "https://",
//         },

//         spots: {
//           "en-US": 123523,
//         },
//         startDate: {
//           "en-US": dayjs().unix(),
//         },
//         endDate: {
//           "en-US": dayjs().unix(),
//         },
//         level: {
//           "en-US": {
//             sys: {
//               type: "Link",
//               linkType: "Entry",
//               id: "59AM7gZUTBkQyob0MfaTjt",
//             },
//           },
//         },
//         price: {
//           "en-US": 123,53
//         },
//         types: {
//           "en-US": "webinar"
//         },
//         certificate: {
//           "en-US": true
//         },
//         duration: {
//           "en-US": "10:00"
//         },
//         location: {
//           "en-US": "10:00"
//         }

//       },
//     }),
//   )
//   .then((entry) => console.log(entry))
//   .catch(console.error);
