import React from "react";
import { Head } from "../../components/Head";
import { OrganiserHeader } from "../../components/OrganiserHeader";
import { OrganiserEvent } from "../../components/OrganiserEvent";
import { Footer } from "../../components/Footer";

export default function organiser() {
  return (
    <>
      <Head />
      <OrganiserHeader />
      <OrganiserEvent />
      <Footer />
    </>
  );
}
