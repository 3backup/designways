/* eslint-disable prettier/prettier */
import dayjs from "dayjs";
import React from "react";
import { Workshop } from "../../types";
import { formatDuration, formatPriceWithCurrency } from "./helpers";
import CertificateImage from "../../images/np_certificate_1117192_000000 1.svg";

type Props = {
  workshop: Workshop;
  customClass: string;
};

export const WorkshopItem = (props) => {
  return (
    <div className={props.oldEvent ? "lecture lecture--nonActive" : "lecture"}>
      <div className="lecture__half">
        <img
          className="lecture__image"
          src={props.post.image.fields.file.url}
          alt={props.post.title}
        />
        <div className="lecture__description">
          <div className="lecture__tags">
            {props.post.tags.map((singleTag) => (
              <div className="tag__single tag__single--small">
                {singleTag.fields.name}
              </div>
            ))}
          </div>
          <div className="level level__basic">
            {props.post.level.fields.name}
          </div>
          <div className="lecture__title">{props.post.title} </div>
          <a
            href={props.post.url}
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
          {props.post.speaker}
        </div>
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Data</span>
          {dayjs(props.post.startDate).format("DD.MM.YYYY - HH:mm")}
        </div>
        <div>
          <span className="lecture__rightGrid--span">Czas Trwania</span>
          {formatDuration(props.post.duration)}
        </div>
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Lokalizacja</span>
          {props.post.location}
        </div>
        <div className="lecture__rightGrid__borderAndSpacing">
          <span className="lecture__rightGrid--span">Typ</span>
          {props.post.type}
        </div>
        <div>
          <span className="lecture__rightGrid--span">Liczba Miejsc</span>
          {props.post.spots}
        </div>
        <div className="lecture__rightGrid__price">
          <div>{formatPriceWithCurrency(props.post.price)}</div>
          {props.post.certificate ? (
            <div className="certificate">
              <img
                src={CertificateImage}
                className="certificate__image"
                alt=""
              />
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
        <a className="lecture__join buttonMobile__cta" href={props.post.url}>
          Dowiedz się więcej
        </a>
      </div>
    </div>
  );
};
