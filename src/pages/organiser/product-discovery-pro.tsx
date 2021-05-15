import React from "react";
import { Head } from "../../components/Head";
import {
  OrganiserHeader,
  OrganiserEvent,
  OrganiserDescription,
  OrganiserSpeaker,
} from "components/Organiser";
import { Newsletter } from "components/Newsletter";
import { Testimonial } from "components/Testimonial";
import { Footer } from "components/Footer";

export default function organiser() {
  return (
    <>
      <Head />
      <OrganiserHeader />
      <OrganiserEvent />
      <OrganiserDescription />
      <OrganiserSpeaker />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}
