/* eslint-disable prettier/prettier */
import React from "react";
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import { AuthChecker } from "../components/AuthChecker";
import { HeaderFilter } from "../components/HeaderFilter";
import { Workshops } from "../components/Workshops";
import { getEvents, getTags, getLevels } from "../util/contentfulPosts";
import { Workshop, WorkshopLevel, WorkshopTag } from "../types";

type Props = {
  events: Workshop[];
  tags: WorkshopTag[];
  levels: WorkshopLevel[];
};

export default function Filter({ events, tags, levels }: Props) {
  return (
    <>
      <Head />
      <HeaderFilter />
      <Workshops events={events} tags={tags} levels={levels} />
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const [events, tags, levels] = await Promise.all([
    getEvents(),
    getTags(),
    getLevels(),
  ]);

  return {
    props: {
      tags,
      events,
      levels,
    },
    revalidate: 60,
  };
}
