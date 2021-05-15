import { GA_TRACKING_ID } from "../constants";

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

export enum EventTypes {
  Click = "click_event",
}

export enum EventCategory {
  EventClicks = "Events- Clicks",
}

export const pageview = (url: URL) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const pushEvent = ({ action, category, label, value }: GTagEvent) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};
