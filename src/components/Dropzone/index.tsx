import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

function Dropzone(props) {
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    minSize: 0,
    maxSize: 5485760,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const [files, setFiles] = useState([]);

  const thumbs = files.map((file) => (
    <div className="form__dropzoneArea--thumbnail" key={file.name}>
      <img
        src={file.preview}
        className="form__dropzoneArea--thumbnailImage"
        alt={file.preview}
      />
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files],
  );

  return (
    <section className="container form__dropzoneArea">
      <div
        className={`dropzone form__dropzoneArea--clickable ${
          files.length > 0 ? "form__dropzoneArea--smaller" : ""
        }`}
        {...getRootProps({})}>
        <input {...getInputProps()} />
        {files.length > 0 ? <p>Zmień grafikę</p> : <p>Dodaj grafikę</p>}

        <em>(Tylko jpg & png, Max 5mb, Ratio 1:1)</em>
      </div>
      <aside>{thumbs}</aside>
    </section>
  );
}

export default Dropzone;
