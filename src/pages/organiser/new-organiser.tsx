import React from "react";
import { Footer } from "components/Footer";
import { Testimonial } from "components/Testimonial";
import { Newsletter } from "components/Newsletter";
import {
  OrganiserHeader,
  OrganiserDescription,
  OrganiserSpeakers,
  OrganiserAdditional,
} from "components/Organiser";
import { useRouter } from "next/router";
import { Head } from "../../components/Head";

import { productDiscoverySpeakers } from "../../constants";

export default function organiser() {
  const outer = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Head />
      <OrganiserHeader />
      <OrganiserDescription />
      <OrganiserSpeakers speakers={productDiscoverySpeakers} />
      <Testimonial />
      <OrganiserAdditional />
      <Newsletter />
      <Footer />
    </>
  );
}
