import React from "react";
import { Head } from "../../components/Head";
import { OrganiserHeader } from "../../components/OrganiserHeader";
import { OrganiserEvent } from "../../components/OrganiserEvent";
import { OrganiserDescription } from "../../components/OrganiserDescription";
import { OrganiserSpeaker } from "../../components/OrganiserSpeaker";
import Newsletter from "../../components/Newsletter";
import { Footer } from "../../components/Footer";

export default function organiser() {
  return (
    <>
      <Head />
      <OrganiserHeader />
      <OrganiserEvent />
      <OrganiserDescription />
      <OrganiserSpeaker />
      <Newsletter />
      <Footer />
    </>
  );
}
