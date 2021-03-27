import React from "react";
import { useFormik } from "formik";
import checkWhite from "../../images/check-white.svg";
import { useDropzone } from "react-dropzone";

const validate = (values) => {
  const errors = {};

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
  const formik = useFormik({
    initialValues: {
      title: "",
      speaker: "",
      url: "",
      spots: 0,
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const titleTouched =
    formik.touched.title && formik.errors.title === undefined;
  const speakerTouched =
    formik.touched.speaker && formik.errors.speaker === undefined;
  const urlTouched = formik.touched.url && formik.errors.url === undefined;
  const spotsTouched =
    formik.touched.spots && formik.errors.spots === undefined;
  return (
    <form onSubmit={formik.handleSubmit}>
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
          <div class="form__errorHandler">
            {formik.touched.title && formik.errors.title ? (
              <div class="form__errorHandlerInside">{formik.errors.title}</div>
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
      <div className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </div>
      <label htmlFor="email">
        Email Address
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
