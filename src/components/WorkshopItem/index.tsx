/* eslint-disable prettier/prettier */
import dayjs from "dayjs";
import React from "react";
import { FormattedWorkshop, Workshop } from "../../types";
import { formatDuration, formatPriceWithCurrency } from "./helpers";
import CertificateImage from "../../images/np_certificate_1117192_000000 1.svg";

type Props = {
  workshop: FormattedWorkshop;
  isActive?: Boolean;
};

export const WorkshopItem = ({ workshop, isActive = false }: Props) => {
  const image = workshop.image.fields.file.url;
  const title = workshop.title;
  return (
    <div className={isActive ? "lecture" : "lecture lecture--nonActive"}>
      <div style={{ width: "400px;" }}>
        {workshop.image.fields.file.url}
        {workshop.url}
      </div>
      <div className="lecture__half">
        <img
          className="lecture__image"
          src={image}
          alt={title}
        />
      </div>
      <div style={{ width: "400px;" }}>
        {workshop.image.fields.file.url}
        {workshop.url}
      </div>
    </div>
  );
};
