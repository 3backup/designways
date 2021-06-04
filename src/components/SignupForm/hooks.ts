import { useMutation } from "react-query";
import axios from "axios";

import { SuggestFormValues } from "./types";

export const useForm = () => {
  const { mutate: sendForm, isLoading: isSending } = useMutation(
    async (values: SuggestFormValues) => {
      const formData = new FormData();
      const { images, ...rest } = values;
      if (images.length > 0) {
        formData.append("images", (images[0] as unknown) as Blob);
      }

      return axios.post("/api/form", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    },
  );
  return { sendForm, isSending };
};
