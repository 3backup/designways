import React, { useCallback } from "react";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import axios from "axios";

import { WorkshopLevel, WorkshopTag } from "../../types";
import { formInitialValues } from "./constants";
import {
  ImageFileField,
  DateTimeFields,
  FormNumber,
  Input,
  RadioField,
  InputWrapper,
} from "./components";
import { validate } from "./helpers";
import { SuggestFormValues } from "./types";
import { useForm } from "./hooks";

type Props = {
  tags: WorkshopTag[];
  levels: WorkshopLevel[];
};

const TIME_FIELDS = [
  "startDate",
  "endDate",
  "startDateTime",
  "endDateTime",
  "duration",
];

export const SignupForm = ({ tags = [], levels = [] }: Props) => {
  const { sendForm } = useForm();
  const onSubmit = useCallback(
    (values: SuggestFormValues) => sendForm(values),
    []
  );

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={formInitialValues}
      mutators={{
        ...arrayMutators,
      }}
      render={({ handleSubmit, values, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <InputWrapper>
            <Field
              name="name"
              render={({ input, meta }) => (
                <>
                  <FormNumber isValid={meta.touched && meta.valid} label="1" />
                  <Input
                    label="Nazwa wydarzenia"
                    type="text"
                    isValid={!meta.touched || meta.valid}
                    error={meta.error}
                    placeholder="np. Testy użyteczności: od koncepcji do scenariusza "
                    {...input}
                  />
                </>
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <Field
              name="url"
              render={({ input, meta }) => (
                <>
                  <FormNumber isValid={meta.touched && meta.valid} label="2" />
                  <Input
                    label="Link do wydarzenia"
                    type="url"
                    isValid={!meta.touched || meta.valid}
                    error={meta.error}
                    placeholder="np. https://"
                    {...input}
                  />
                </>
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <Field
              name="speaker"
              render={({ input, meta }) => (
                <>
                  <FormNumber isValid={meta.touched && meta.valid} label="3" />
                  <Input
                    label="Prowadzący"
                    isValid={!meta.touched || meta.valid}
                    error={meta.error}
                    placeholder="np. https://"
                    {...input}
                  />
                </>
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <Field
              name="spots"
              render={({ input, meta }) => (
                <>
                  <FormNumber isValid={meta.touched && meta.valid} label="4" />
                  <Input
                    label="Ilość miejsc uczestników (tylko liczba)"
                    isValid={!meta.touched || meta.valid}
                    error={meta.error}
                    placeholder="np. 14"
                    isShort
                    type="number"
                    {...input}
                  />
                </>
              )}
            />
          </InputWrapper>
          <InputWrapper>
            <FormNumber isValid={values.images.length > 0} label="6" />
            <ImageFileField name="images" />
          </InputWrapper>
          <InputWrapper>
            <FormNumber
              isValid={TIME_FIELDS.every((field) => !errors[field])}
              label="7"
            />
            <div className="form__singleInputWithLabel--elements ">
              <DateTimeFields
                label="Data rozpoczęcia"
                dateField="startDate"
                timeField="startDateTime"
              />
              <DateTimeFields
                label="Data zakończenia"
                dateField="endDate"
                timeField="endDateTime"
              />
              <DateTimeFields label="Czas trwania" timeField="duration" />
              <div className="form__errorHandler">
                {TIME_FIELDS.map((field) =>
                  errors[field] && touched[field] ? (
                    <div className="form__errorHandlerInside">
                      {errors[field]}
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </InputWrapper>
          <InputWrapper>
            <FormNumber isValid={values.level.length > 0} label="8" />
            <RadioField
              label="Stopień zaawansowania"
              name="level"
              options={levels}
            />
          </InputWrapper>
          <InputWrapper>
            <FormNumber isValid={values.tags.length > 0} label="9" />
            <RadioField
              label="Określ tematykę (maks 4 tagi)"
              name="tags"
              isMulti
              options={tags}
            />
          </InputWrapper>
          <button type="submit" className="form__buttonSuggest">
            Wyślij do weryfikacji
          </button>
        </form>
      )}
    />
  );
};
