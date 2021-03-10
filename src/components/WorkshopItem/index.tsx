import React from "react";
import { Workshop } from "../../types";
import { formatDuration, formatPriceWithCurrency } from "./helpers";

type WorkshopItemProps = {
  workshop: Workshop;
  customClass?: string
};

export const WorkshopItem: React.FC<WorkshopItemProps> = ({ workshop }) => {
  return (
    <div className="lecture">

      <div className="lecture__half">
        <img className="lecture__image" src={workshop.image.fields.file.url} alt={workshop.title} />
        <div className="lecture__description">
          <div className="lecture__tags"> {workshop.tags.map(singleTag => (
            <div class="tag__single tag__single--small">{singleTag.fields.name}</div>
          ))}
          </div>
          <div className="level level__basic">{workshop.level.fields.name}</div>
          <div className="lecture__title">{workshop.title} </div>
          <a
            href=""
            target="_blank"
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
          {workshop.startDate}
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
          {formatPriceWithCurrency(workshop.price)}
        </div>
      </div>
      <div className="lecture__half buttonMobile">
        <a className="lecture__join buttonMobile__cta" href="">
          Dowiedz się więcej
        </a>
      </div>
    </div>
  );
};
