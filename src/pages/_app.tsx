import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/main.sass";
import "../styles/filters.sass";
import "../styles/organiser.scss";
import "../styles/addEvent.scss";

import { useRouteChange } from "../hooks/useRouteChange";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  useRouteChange();
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default App;
