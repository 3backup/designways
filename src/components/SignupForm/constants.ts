import { createClient } from "contentful-management";
import { SuggestFormValues } from "./types";

export const formClient = createClient({
  accessToken: "CFPAT-8SGURhp-zdnRpl92sLGqDFiaZYnnDX3_39QegoIgBlA"
});

export const formInitialValues: SuggestFormValues = {
  duration: "",
  endDate: "",
  endDateTime: "",
  startDate: "",
  startDateTime: "",
  images: [],
  level: [],
  tags: [],
  speaker: "",
  spots: "",
  title: "",
  url: ""
};
