import React from "react";
import { ExtendedFile } from "../types";

type Props = {
  file: ExtendedFile;
};
export const Thumb = ({ file }: Props) => {
  return (
    <div className="form__dropzoneArea--thumbnail" key={file.path}>
      <img
        src={file.preview}
        className="form__dropzoneArea--thumbnailImage"
        alt={file.preview}
      />
    </div>
  );
};
