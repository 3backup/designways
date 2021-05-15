import React from "react";
import { Head } from "../../components/Head";
import {
  OrganiserHeader,
  OrganiserEvent,
  OrganiserDescription,
  OrganiserSpeakers,
} from "components/Organiser";
import { Newsletter } from "components/Newsletter";
import { Testimonial } from "components/Testimonial";
import { Footer } from "components/Footer";

import { productDiscoverySpeakers } from "../../constants";

export default function organiser() {
  return (
    <>
      <Head />
      <OrganiserHeader />
      <OrganiserEvent />
      <OrganiserDescription />
      <OrganiserSpeakers speakers={productDiscoverySpeakers} />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}
