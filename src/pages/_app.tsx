import React from "react";

import "../styles/main.sass";
import "../styles/filters.sass";
import "../styles/organiser.scss";

import { useRouteChange } from "../hooks/useRouteChange";

function App({ Component, pageProps }) {
  useRouteChange()
  return <Component {...pageProps} />;
}

export default App;
