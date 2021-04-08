import React from "react";
import { Head } from "../../components/Head";
import { OrganiserHeader } from "../../components/OrganiserHeader";
import { Footer } from "../../components/Footer";
import { HeaderFilter } from "../../components/HeaderFilter";
import AddEvent from "../../components/AddEvent";
import { Workshops } from "../../components/Workshops";

export default function Home() {
  return (
    <>
      <Head />
      <OrganiserHeader />
      <Footer />
    </>
  );
}
