import React from "react";
import { Head } from "../components/Head";
import { Footer } from "../components/Footer";
import { SignupFormContainer } from "../components/SignupFormContainer";
import { getLevels, getTags } from "../util/contentfulPosts";
import { SignupForm } from "../components/SignupForm";

export default function suggest({ tags, levels }) {
  return (
    <>
      <Head />
      <SignupFormContainer>
        <SignupForm tags={tags} levels={levels} />
      </SignupFormContainer>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const [tags, levels] = await Promise.all([getTags(), getLevels()]);

  return {
    props: {
      tags,
      levels,
    },
  };
}
