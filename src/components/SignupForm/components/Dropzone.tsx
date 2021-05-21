import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ExtendedFile } from "../types";
import { Thumb } from "./Thumb";

type Props = {
  onChange: (_: ExtendedFile[]) => void;
};

export const Dropzone = ({ onChange }: Props) => {
  const [files, setFiles] = useState<ExtendedFile[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: false,
    noDrag: true,
    onDrop: (acceptedFiles) => {
      const filesAccepted = (acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ) as unknown) as ExtendedFile[];
      setFiles(filesAccepted);
      if (onChange) {
        onChange(filesAccepted);
      }
    },
  });

  const thumbs = files.map((file) => <Thumb file={file} />);

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <div className="form__singleInputWithLabel">
      <section className="container form__dropzoneArea">
        <div
          className={`dropzone form__dropzoneArea--clickable ${
            files.length > 0 ? "form__dropzoneArea--smaller" : ""
          }`}
          {...getRootProps({})}
        >
          <input {...getInputProps()} />
          {files.length > 0 ? <p>Zmień grafikę</p> : <p>Dodaj grafikę</p>}

          <em>(Tylko jpg & png, Max 5mb, Ratio 1:1)</em>
        </div>
        <aside>{thumbs}</aside>
      </section>
    </div>
  );
};

export default Dropzone;
