import { useRouter } from "next/router";
import { useEffect } from "react";

import { pageview } from "../util/analytics";

export const useRouteChange = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
};
