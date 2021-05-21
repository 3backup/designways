import React from "react";
import type { AppProps } from "next/app";

import "../styles/main.sass";
import "../styles/filters.sass";
import "../styles/organiser.scss";
import "../styles/addEvent.scss";

import { useRouteChange } from "../hooks/useRouteChange";

const App = ({ Component, pageProps }: AppProps) => {
  useRouteChange();
  return <Component {...pageProps} />;
};

export default App;
