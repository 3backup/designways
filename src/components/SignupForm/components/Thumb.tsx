import React from "react";

type Props = {
  file: {
    name: string;
    preview: string;
  };
};
export const Thumb = ({ file }: Props) => {
  return (
    <div className="form__dropzoneArea--thumbnail" key={file.name}>
      <img
        src={file.preview}
        className="form__dropzoneArea--thumbnailImage"
        alt={file.preview}
      />
    </div>
  );
};
