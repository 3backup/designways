import React from "react";
import { Head } from "../components/Head";
import { AuthChecker } from "../components/AuthChecker";
import { Footer } from "../components/Footer";
import { ContentAddEvent } from "../components/ContentAddEvent";
import { HeaderAddEvent } from "../components/HeaderAddEvent";

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
