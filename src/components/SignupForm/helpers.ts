/* eslint-disable no-restricted-syntax */
import dayjs from "dayjs";

import { ValidationsValues } from "./types";

export const validate = (values: ValidationsValues) => {
  const errors: Partial<ValidationsValues> = {};
  if (values.startDate) {
    for (const value of values.startDate) {
      if (value.length === 1 && value.match(/[a-z]/i)) {
        errors.startDate =
          "Data rozpoczęcia musi być zapisana w formacie DD-MM-RRRR np. 16-01-2021";
      }
    }
  } else if (!values.startDate) {
    errors.startDate = "Data rozpoczęcia jest wymagana";
  }
  if (values.startDateTime) {
    for (const value of values.startDateTime) {
      if (value.length === 1 && value.match(/[a-z]/i)) {
        errors.startDateTime =
          "Godzna rozpoczęcia musi być zapisana w formacie HH:MM np 19:45";
      }
    }
  } else if (!values.startDateTime) {
    errors.startDateTime = "Godzina rozpoczęcia jest wymagana";
  }
  if (values.endDate) {
    for (const value of values.endDate) {
      if (value.length === 1 && value.match(/[a-z]/i)) {
        errors.endDate =
          "Data rozpoczęcia musi być zapisana w formacie DD-MM-RRRR np. 16-01-2021";
      }
    }
  } else if (!values.endDate) {
    errors.endDate = "Data zakończenia jest wymagana";
  }
  if (values.endDateTime) {
    for (const value of values.endDateTime) {
      if (value.length === 1 && value.match(/[a-z]/i)) {
        errors.endDateTime =
          "Godzna rozpoczęcia musi być zapisana w formacie HH:MM np 19:45";
      }
    }
  } else if (!values.endDateTime) {
    errors.endDateTime = "Godzina zakończenia jest wymagana";
  }
  if (values.duration) {
    for (const value of values.duration) {
      if (value.length === 1 && value.match(/[a-z]/i)) {
        errors.duration =
          "Czas trwania musi w formacie HH:MM np 40:30 co oznacza 40 h 30 min";
      }
    }
  } else if (!values.duration) {
    errors.duration = "Czas trwania jest wymagany";
  }
  if (!values.title) {
    errors.title = "Tytuł jest wymagany";
  } else if (values.title.length < 10) {
    errors.title = "Tytuł musi mieć przynajmniej 10 znaków";
  }
  if (!values.speaker) {
    errors.speaker = "Prowadzący jest wymagany";
  } else if (values.speaker.length < 10) {
    errors.speaker = "Tytuł musi mieć przynajmniej 10 znaków";
  }
  if (!values.url) {
    errors.url = "Link jest wymagany";
  } else if (!values.url.includes("http")) {
    errors.url = "Link musi posiadać 'https' lub 'http' ";
  }
  if (!values.spots) {
    errors.spots = "Liczba miejsc jest wymagana";
  } else if (values.spots === "0") {
    errors.spots = "Wartość musi być większa od 0";
  }

  return errors;
};

export const generateEntry = (values: ValidationsValues) => {
  return {
    // create
    fields: {
      title: {
        "en-US": values.title
      },
      speaker: {
        "en-US": values.speaker
      },
      url: {
        "en-US": values.url
      },
      spots: {
        "en-US": values.spots
      },
      startDate: {
        "en-US": dayjs(`${values.startDate}, ${values.startDateTime}`).add(
          2,
          "hour"
        )
      },
      endDate: {
        "en-US": dayjs(`${values.endDate}, ${values.endDateTime}`).add(
          2,
          "hour"
        )
      },
      // to jest tak złe ale później to naprawie

      level: {
        "en-US": {
          sys: {
            type: "Link",
            linkType: "Entry",
            id: "59AM7gZUTBkQyob0MfaTjt"
          }
        }
      }
    }
  };
};

const isLetter = (str) => {
  return str.length === 1 && str.match(/[a-z]/i);
};
