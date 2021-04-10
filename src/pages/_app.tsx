/* eslint-disable react/prop-types */
import React from "react";
import "../styles/main.sass";
import "../styles/filters.sass";
import "../styles/organiser.scss";
import "../styles/newsletter.scss";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
