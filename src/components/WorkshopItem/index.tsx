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

export const WorkshopItem = ({ workshop, isActive = false }: Props) => (
  <div className={isActive ? "lecture" : "lecture lecture--nonActive"}>
    <div className="lecture__half">
      <img
        className="lecture__image"
        src={workshop.image.fields.file.url}
        alt={workshop.title}
      />
      <div className="lecture__description">
        <div className="lecture__tags">
          {workshop.tags.map((singleTag) => (
            <div className="tag__single tag__single--small">
              {singleTag.fields.name}
            </div>
          ))}
        </div>
        <div className="level level__basic">{workshop.level.fields.name}</div>
        <div className="lecture__title">{workshop.title} </div>
        <a
          href={workshop.url}
          target="_blank"
          rel="noreferrer"
          className="lecture__join buttonDesktop"
        >
          Dowiedz się więcej
        </a>
      </div>
    </div>
    <div className="lecture__half lecture__rightGrid">
      <div className="lecture__rightGrid__borderAndSpacing">
        <span className="lecture__rightGrid--span">Prowadzący</span>
        {workshop.speaker}
      </div>
      <div className="lecture__rightGrid__borderAndSpacing">
        <span className="lecture__rightGrid--span">Data</span>
        {dayjs(workshop.startDate).format("DD.MM.YYYY - HH:mm")}
      </div>
      <div>
        <span className="lecture__rightGrid--span">Czas Trwania</span>
        {formatDuration(workshop.duration)}
      </div>
      <div className="lecture__rightGrid__borderAndSpacing">
        <span className="lecture__rightGrid--span">Lokalizacja</span>
        {workshop.location}
      </div>
      <div className="lecture__rightGrid__borderAndSpacing">
        <span className="lecture__rightGrid--span">Typ</span>
        {workshop.type}
      </div>
      <div>
        <span className="lecture__rightGrid--span">Liczba Miejsc</span>
        {workshop.spots}
      </div>
      <div className="lecture__rightGrid__price">
        <div>{formatPriceWithCurrency(workshop.price)}</div>
        {workshop.certificate ? (
          <div className="certificate">
            <img src={CertificateImage} className="certificate__image" alt="" />
            <span className="certificate__tooltipText">
              Uczestnik otrzyma certyfikat uczestnictwa
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
    <div className="lecture__half buttonMobile">
      <a className="lecture__join buttonMobile__cta" href={workshop.url}>
        Dowiedz się więcej
      </a>
    </div>
  </div>
);
