import React from "react";
import { Head } from "../../components/Head";
import { useRouter } from "next/router";

import {
  OrganiserHeader,
  OrganiserDescription,
  OrganiserSpeakers,
  OrganiserAdditional,
} from "components/Organiser";
import { Newsletter } from "components/Newsletter";
import { Testimonial } from "components/Testimonial";
import { Footer } from "components/Footer";

import { productDiscoverySpeakers } from "../../constants";

export default function organiser() {
  const router = useRouter();
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
