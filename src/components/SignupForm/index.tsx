import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { FileWithPath, useDropzone } from "react-dropzone";
import { useFormik, Field } from "formik";
import { createClient } from "contentful-management";
import checkWhite from "../../images/check-white.svg";
import Dropzone from "../Dropzone";

const validate = (values) => {
  type Errors = {
    title: any;
    speaker: any;
    url: any;
    spots: any;
    startDate: any;
    startDateTime: any;
    endDate: any;
    endDateTime: any;
  };
  const errors = {};
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

export const SignupForm = (props) => {
  type File = {
    path: string;
  };
  const client = createClient({
    accessToken: "CFPAT-8SGURhp-zdnRpl92sLGqDFiaZYnnDX3_39QegoIgBlA",
  });
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    minSize: 0,
    maxSize: 10485760,
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
  const formik = useFormik({
    initialValues: {
      title: "",
      speaker: "",
      url: "",
      spots: 0,
      image: files,
      startDate: "",
      startDateTime: "",
      endDate: "",
      endDateTime: "",
      duration: "",
      pickedLevel: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values.pickedLevel);
      const formData = files[0];
      //   const handleSubmit = async () => {

      //     await fetch('../../pages/api/upload-image/', {
      //       method: 'POST',
      //       body: formData
      //     }, null, null };
      // handleSubmit();
      // const sdkClient = sdk.createClient({
      //   spaceId: "vjm3j88sc8ek",
      //   accessToken: "CFPAT-8SGURhp-zdnRpl92sLGqDFiaZYnnDX3_39QegoIgBlA",
      // });
      // const contentType = files[0].type;
      // const fileName = files[0].name;

      // client
      //   .getSpace("vjm3j88sc8ek")
      //   .then((space) => space.getEnvironment("m"))
      //   .then((environment) =>
      //     environment.createAssetFromFiles({
      //       fields: {
      //         title: {
      //           "en-US": files[0].name,
      //         },

      //         file: {
      //           "en-US": {
      //             contentType: "image/svg+xml",
      //             fileName: "circle.svg",
      //             file: '<svg><path fill="red" d="M50 50h150v50H50z"/></svg>',
      //             size: files[0].size,
      //             details: {
      //               image: {
      //                 width: 190,
      //                 height: 190,
      //               },
      //             },
      //             // contentType: files[0].type,
      //             // fileName: files[0].name,
      //             // file: files[0].preview,
      //           },
      //         },
      //       },
      //     }),
      //   )
      //   .then((asset) => asset.processForAllLocales())
      //   .then((asset) => asset.publish())
      //   .then((entry) => console.log(entry))
      //   .catch(console.error);
      const currentTime = dayjs().unix();
      client
        .getSpace("vjm3j88sc8ek")
        .then((space) => space.getEnvironment("master"))
        .then((environment) =>
          environment.createEntryWithId("event", currentTime.toString(), {
            // create
            fields: {
              title: {
                "en-US": values.title,
              },
              speaker: {
                "en-US": values.speaker,
              },
              url: {
                "en-US": values.url,
              },
              spots: {
                "en-US": values.spots,
              },
              startDate: {
                "en-US": dayjs(
                  `${values.startDate}, ${values.startDateTime}`,
                ).add(2, "hour"),
              },
              endDate: {
                "en-US": dayjs(`${values.endDate}, ${values.endDateTime}`).add(
                  2,
                  "hour",
                ),
              },
              // to jest tak złe ale później to naprawie

              level: {
                "en-US": {
                  sys: {
                    type: "Link",
                    linkType: "Entry",
                    id: "59AM7gZUTBkQyob0MfaTjt",
                  },
                },
              },
            },
          }),
        )

        .then((entry) => console.log(entry))
        .catch(console.error);
    },
  });

  const hanldeClick = (event) => {
    event.preventDefault();
    console.log("click");
  };
  const isLetter = (str) => {
    return str.length === 1 && str.match(/[a-z]/i);
  };

  const titleTouched =
    formik.touched.title && formik.errors.title === undefined;
  const speakerTouched =
    formik.touched.speaker && formik.errors.speaker === undefined;
  const urlTouched = formik.touched.url && formik.errors.url === undefined;
  const spotsTouched =
    formik.touched.spots && formik.errors.spots === undefined;
  const datesTouched =
    formik.touched.startDate &&
    formik.errors.startDate === undefined &&
    formik.touched.startDateTime &&
    formik.errors.startDateTime === undefined &&
    formik.touched.endDate &&
    formik.errors.endDateTime === undefined &&
    formik.touched.endDateTime &&
    formik.errors.endDateTime === undefined &&
    formik.touched.duration &&
    formik.errors.duration === undefined;

  return (
    <form onSubmit={formik.handleSubmit} method="post">
      {/* Nazwa wydarzenia */}
      <div className="form__inputContainer">
        <div
          className={`form__number ${
            titleTouched ? "form__number--active" : ""
          }`}>
          {`${titleTouched ? "" : "1"}`}

          <img
            src={checkWhite}
            className={`form__numberCheck ${
              titleTouched ? "form__number--hide" : ""
            }`}
            alt=""
          />
        </div>
        <div className="form__singleInputWithLabel">
          <div className="form__label">Nazwa</div>
          <input
            id="title"
            name="title"
            className={`form__input ${
              formik.touched.title && formik.errors.title
                ? "form__input--error"
                : ""
            }`}
            placeholder="np. Testy użyteczności: od koncepcji do scenariusza "
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          <div className="form__errorHandler">
            {formik.touched.title && formik.errors.title ? (
              <div className="form__errorHandlerInside">
                {formik.errors.title}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* Prowadzący */}
      <div className="form__inputContainer">
        <div
          className={`form__number ${
            speakerTouched ? "form__number--active" : ""
          }`}>
          {`${speakerTouched ? "" : "2"}`}

          <img
            src={checkWhite}
            className={`form__numberCheck ${
              speakerTouched ? "form__number--hide" : ""
            }`}
            alt=""
          />
        </div>
        <div className="form__singleInputWithLabel">
          <div className="form__label">Prowadzący</div>
          <input
            id="speaker"
            name="speaker"
            className={`form__input ${
              formik.touched.speaker && formik.errors.speaker
                ? "form__input--error"
                : ""
            }`}
            placeholder="np. Joanna Ostafin "
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.speaker}
          />
          <div className="form__errorHandler">
            {formik.touched.speaker && formik.errors.speaker ? (
              <div className="form__errorHandlerInside">
                {formik.errors.speaker}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* Link do wydarzenia */}
      <div className="form__inputContainer">
        <div
          className={`form__number ${
            urlTouched ? "form__number--active" : ""
          }`}>
          {`${urlTouched ? "" : "3"}`}

          <img
            src={checkWhite}
            className={`form__numberCheck ${
              urlTouched ? "form__number--hide" : ""
            }`}
            alt=""
          />
        </div>
        <div className="form__singleInputWithLabel">
          <div className="form__label">Link do wydarzenia</div>
          <input
            id="url"
            name="url"
            className={`form__input ${
              formik.touched.url && formik.errors.url
                ? "form__input--error"
                : ""
            }`}
            placeholder="np. https://"
            type="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url}
          />
          <div className="form__errorHandler">
            {formik.touched.url && formik.errors.url ? (
              <div className="form__errorHandlerInside">
                {formik.errors.url}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* Spots */}
      <div className="form__inputContainer">
        <div
          className={`form__number ${
            spotsTouched ? "form__number--active" : ""
          }`}>
          {`${spotsTouched ? "" : "4"}`}

          <img
            src={checkWhite}
            className={`form__numberCheck ${
              spotsTouched ? "form__number--hide" : ""
            }`}
            alt=""
          />
        </div>
        <div className="form__singleInputWithLabel">
          <div className="form__label">
            Ilość miejsc uczestników (tylko liczba)
          </div>
          <input
            id="spots"
            name="spots"
            className={`form__input form__input--short ${
              formik.touched.spots && formik.errors.spots
                ? "form__input--error"
                : ""
            }`}
            placeholder="np. 14"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.spots}
          />
          <div className="form__errorHandler">
            {formik.touched.spots && formik.errors.spots ? (
              <div className="form__errorHandlerInside">
                {formik.errors.spots}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* images */}
      <div className="form__inputContainer">
        <div
          className={`form__number ${
            files.length > 0 ? "form__number--active" : ""
          }`}>
          {`${files.length > 0 ? "" : "6"}`}

          <img
            src={checkWhite}
            className={`form__numberCheck ${
              files.length > 0 ? "form__number--hide" : ""
            }`}
            alt=""
          />
        </div>
        <div className="form__singleInputWithLabel">
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
        </div>
      </div>
      {/* dates */}
      <div className="form__inputContainer">
        <div
          className={`form__number ${
            datesTouched ? "form__number--active" : ""
          }`}>
          {`${datesTouched ? "" : "6"}`}

          <img
            src={checkWhite}
            className={`form__numberCheck ${
              datesTouched ? "form__number--hide" : ""
            }`}
            alt=""
          />
        </div>
        <div className="form__singleInputWithLabel--elements ">
          <div className="form__singleinputWithLabelContainer">
            <div className="form__label">Data rozpoczęcia</div>
            <div className="form__twoInputs">
              <input
                id="startDate"
                name="startDate"
                className={`form__input form__input--short  ${
                  formik.touched.startDate && formik.errors.startDate
                    ? "form__input--error"
                    : ""
                }`}
                placeholder="RRRR-MM-DD"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.startDate}
              />

              <input
                className={`form__input form__input--shorter  ${
                  formik.touched.startDateTime && formik.errors.startDateTime
                    ? "form__input--error"
                    : ""
                }`}
                placeholder="00:00 h"
                type="text"
                id="startDateTime"
                name="startDateTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.startDateTime}
              />
            </div>
          </div>
          <div className="form__singleinputWithLabelContainer">
            <div className="form__label">Data zakończenia</div>
            <div className="form__twoInputs">
              <input
                className={`form__input form__input--short  ${
                  formik.touched.endDate && formik.errors.endDate
                    ? "form__input--error"
                    : ""
                }`}
                placeholder="RRRR-MM-DD"
                pattern="\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*"
                type="text"
                maxlength="10"
                id="endDate"
                name="endDate"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endDate}
              />
              <input
                className={`form__input form__input--shorter  ${
                  formik.touched.endDateTime && formik.errors.endDateTime
                    ? "form__input--error"
                    : ""
                }`}
                placeholder="00:00 h"
                type="text"
                id="endDateTime"
                name="endDateTime"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endtDateTime}
              />
            </div>
          </div>
          <div className="form__singleinputWithLabelContainer">
            <div className="form__label">Czas trwania</div>
            <div className="form__twoInputs">
              <input
                className={`form__input form__input--shorter  ${
                  formik.touched.duration && formik.errors.duration
                    ? "form__input--error"
                    : ""
                }`}
                placeholder="00:00 h"
                type="text"
                id="duration"
                name="duration"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.endtDateTime}
              />
            </div>
          </div>
          <div className="form__errorHandler">
            {formik.touched.startDate && formik.errors.startDate ? (
              <div className="form__errorHandlerInside">
                {formik.errors.startDate}
              </div>
            ) : null}
            {formik.touched.startDateTime && formik.errors.startDateTime ? (
              <div className="form__errorHandlerInside">
                {formik.errors.startDateTime}
              </div>
            ) : null}
            {formik.touched.endDate && formik.errors.endDate ? (
              <div className="form__errorHandlerInside">
                {formik.errors.endDate}
              </div>
            ) : null}
            {formik.touched.endDateTime && formik.errors.endDateTime ? (
              <div className="form__errorHandlerInside">
                {formik.errors.endDateTime}
              </div>
            ) : null}
            {formik.touched.duration && formik.errors.duration ? (
              <div className="form__errorHandlerInside">
                {formik.errors.duration}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {/* Spots */}
      <div className="form__inputContainer">
        <div
          className={`form__number ${
            spotsTouched ? "form__number--active" : ""
          }`}>
          {`${spotsTouched ? "" : "7"}`}

          <img
            src={checkWhite}
            className={`form__numberCheck ${
              spotsTouched ? "form__number--hide" : ""
            }`}
            alt=""
          />
        </div>
        <div className="form__singleInputWithLabel">
          <div className="form__label">Stopień zaawansowania</div>
          <div>
            <label htmlFor="pickedLevel1">
              <input
                type="radio"
                id="pickedLevel1"
                name="pickedLevel"
                onChange={(e) => {
                  formik.values.pickedLevel = "ffff";
                  console.log("fff");
                  formik.handleChange;
                }}
                onBlur={formik.handleBlur}
                value="Początkujący"
              />
              Początkujący
            </label>
            <label htmlFor="pickedLevel2" className="form__tag">
              <input
                type="radio"
                id="pickedLevel2"
                name="pickedLevel"
                onChange={(e) => {
                  formik.values.pickedLevel = "two";
                  console.log("picked");
                  formik.handleChange;
                }}
                onBlur={formik.handleBlur}
                value="Średniozaawansowany"
              />
              Średniozaawansownay
            </label>
            <label htmlFor="pickedLevel3">
              <input
                type="radio"
                id="pickedLevel3"
                name="pickedLevel"
                onChange={(e) => {
                  formik.values.pickedLevel = "two";
                  console.log("picked");
                  formik.handleChange;
                }}
                onBlur={formik.handleBlur}
                value="Zaawansowany"
              />
              Średniozaawansownay
            </label>
          </div>
          <div className="form__errorHandler">
            {formik.touched.spots && formik.errors.spots ? (
              <div className="form__errorHandlerInside">
                {formik.errors.spots}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <button type="submit" className="form__buttonSuggest">
        Wyślij do weryfikacji
      </button>
    </form>
  );
};
