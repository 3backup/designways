import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";

import { validate, generateEntry } from "./helpers";
import { formClient } from "./constants";
import { WorkshopLevel, WorkshopTag } from "../../types";
import { Radio, Thumb, FormNumber, DateInput, Input } from "./components";

type Props = {
  tags: WorkshopTag[];
  levels: WorkshopLevel[];
};

const TOUCH_DATE_ERROR_FIELDS = [
  "startDate",
  "startDateTime",
  "endDateTime",
  "endDate",
  "duration",
];

export const SignupForm = ({ tags = [], levels = [] }: Props) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    minSize: 0,
    maxSize: 10485760,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => ({
          ...files,
          preview: URL.createObjectURL(file),
        }))
      );
    },
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  const formik = useFormik({
    initialValues: {
      title: "",
      speaker: "",
      url: "",
      spots: "0",
      image: files,
      startDate: "",
      startDateTime: "",
      endDate: "",
      endDateTime: "",
      duration: "",
      pickedLevel: null,
      pickedTags: [],
    },
    validate,
    onSubmit: (values) => {
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
      formClient
        .getSpace("vjm3j88sc8ek")
        .then((space) => space.getEnvironment("master"))
        .then((environment) =>
          environment.createEntryWithId(
            "event",
            currentTime.toString(),
            generateEntry(values)
          )
        )
        .then((entry) => console.log(entry))
        .catch(console.error);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} method="post">
      {/* Nazwa wydarzenia */}
      <div className="form__inputContainer">
        <FormNumber
          isEnabled={formik.touched.title && !formik.errors.title}
          label="1"
        />
        <div className="form__singleInputWithLabel">
          <Input
            label="Nazwa"
            error={formik.errors.title}
            field="title"
            placeholder="np. Testy użyteczności: od koncepcji do scenariusza "
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isValid={Boolean(formik.touched.title && formik.errors.title)}
          />
        </div>
      </div>
      {/* Prowadzący */}
      <div className="form__inputContainer">
        <FormNumber
          isEnabled={formik.touched.speaker && !formik.errors.speaker}
          label="2"
        />
        <div className="form__singleInputWithLabel">
          <Input
            label="Prowadzący"
            error={formik.errors.speaker}
            field="speaker"
            placeholder="np. https://"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isValid={Boolean(formik.touched.speaker && formik.errors.speaker)}
          />
        </div>
      </div>
      {/* Link do wydarzenia */}
      <div className="form__inputContainer">
        <FormNumber
          isEnabled={formik.touched.url && !formik.errors.url}
          label="3"
        />
        <div className="form__singleInputWithLabel">
          <Input
            label="Link do wydarzenia"
            error={formik.errors.url}
            field="url"
            placeholder="np. https://"
            type="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isValid={Boolean(formik.touched.url && formik.errors.url)}
          />
        </div>
      </div>
      {/* Spots */}
      <div className="form__inputContainer">
        <FormNumber
          isEnabled={formik.touched.spots && !formik.errors.spots}
          label="4"
        />
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
        <FormNumber isEnabled={files.length > 0} label="5" />
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
            <aside>
              {files.map((file) => (
                <Thumb {...file} />
              ))}
            </aside>
          </section>
        </div>
      </div>
      {/* dates */}

      <div className="form__inputContainer">
        <FormNumber
          isEnabled={TOUCH_DATE_ERROR_FIELDS.every(
            (value) => formik.touched[value] && !formik.errors[value]
          )}
          label="6"
        />
        <div className="form__singleInputWithLabel--elements ">
          <div className="form__singleinputWithLabelContainer">
            <DateInput
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Data rozpoczęcia"
              field="startDate"
              date={formik.values.startDate}
              time={formik.values.startDateTime}
              isValidDate={Boolean(
                formik.touched.startDate && formik.errors.startDate
              )}
              isValidTime={Boolean(
                formik.touched.startDateTime && formik.errors.startDateTime
              )}
            />
          </div>
          <div className="form__singleinputWithLabelContainer">
            <DateInput
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              label="Data zakończenia"
              field="endDate"
              date={formik.values.endDate}
              time={formik.values.endDateTime}
              isValidDate={Boolean(
                formik.touched.endDate && formik.errors.endDate
              )}
              isValidTime={Boolean(
                formik.touched.endDateTime && formik.errors.endDateTime
              )}
            />
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
                value={formik.values.endDateTime}
              />
            </div>
          </div>
          <div className="form__errorHandler">
            {TOUCH_DATE_ERROR_FIELDS.map((field) => {
              return (
                formik.touched[field] &&
                formik.errors[field] && (
                  <div className="form__errorHandlerInside">
                    {formik.errors[field]}
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
      {/* Spots */}
      <div className="form__inputContainer">
        <FormNumber isEnabled={!!formik.values.pickedLevel} label="7" />
        <div className="form__singleInputWithLabel">
          <div className="form__label">Stopień zaawansowania</div>
          <div className="form__containerLevel">
            {levels.map((level) => (
              <Radio
                key={level.id}
                field="pickedLevel"
                label={level.name}
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.values.pickedLevel = level.id;
                }}
                onBlur={formik.handleBlur}
              />
            ))}
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
      {/* Tags  */}
      <div className="form__inputContainer">
        <FormNumber isEnabled={!!formik.values.pickedLevel} label="8" />
        <div className="form__singleInputWithLabel">
          <div className="form__label">Określ tematykę (maks 4 tagi)</div>
          <div className="form__containerLevel">
            {tags.map((tag) => (
              <Radio
                key={tag.id}
                field={tag.name}
                label={tag.name}
                onChange={(e) => {
                  formik.handleChange(e);
                  if (formik.values.pickedTags.includes(tag.id)) {
                    formik.values.pickedTags.filter(
                      (tagId) => tagId !== tag.id
                    );
                  }
                  formik.values.pickedTags.push(tag.id);
                }}
              />
            ))}
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
