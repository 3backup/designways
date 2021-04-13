import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../images/logo-product-discovery.png";

export const OrganiserEvent = () => {
  return (
    <div className="mainEvent__withDiscount">
      <div className="mainEvent">
        <div className="mainEvent__logo">
          <img className="mainEvent__logoImg" src={Logo} alt="" />
          <div className="mainEvent__recommended">Polecane</div>
        </div>
        <div className="mainEvent__content">
          <div className="tags">
            <div className="tags__singleTag">Badania / Research</div>
            <div className="tags__singleTag">Analityka</div>
            <div className="tags__singleTag">Product Design</div>
            <div className="tags__singleTag">Product Management</div>
            <div className="tags__singleTag">Service Design</div>
            <div className="tags__singleTag">UX</div>
          </div>
          <div className="mainEvent__price">2460,60 zł</div>
          <div className="mainEvent__title">
            <div className="mainEvent__title--level">Średniozaawansowany</div>
            <div className="mainEvent__title--event">
              Certyfikowane Warsztaty Product Discovery Practitioner
            </div>
            <div className="mainEvent__buttonMobile--price">2460,60 zł</div>
          </div>
          <div className="mainEvent__details">
            <div className="mainEvent__details--singleDetail">
              <span className="mainEvent__details--span">Prowadzący</span>
              Michał Reda, Bartosz Narzelski, Adam Bartkiewicz
            </div>
            <div className="mainEvent__details--singleDetail">
              <span className="mainEvent__details--span">Liczba Miejsc</span>
              20
            </div>
            <div className="mainEvent__details--singleDetail">
              <span className="mainEvent__details--span">Lokalizacja</span>
              Online
            </div>
            <div className="mainEvent__details--singleDetail">
              <span className="mainEvent__details--span">Data</span>
              22.04.2021 - 09:00
            </div>
            <div className="mainEvent__details--singleDetail">
              <span className="mainEvent__details--span">Czas Tewania</span>
              15 h 00 min
            </div>
            <div className="mainEvent__details--singleDetail">
              <span className="mainEvent__details--span">Typ</span>
              Szkolenie / warsztat
            </div>
          </div>
          <div className="mainEvent__readMore">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://productdiscovery.pro/warsztaty/"
              className="mainEvent__readMore--link">
              Dowiedz się więcej
            </a>
          </div>
        </div>
        <div className="mainEvent__buttonMobile">
          <a
            className="mainEvent__buttonMobile--button"
            target="_blank"
            rel="noreferrer"
            href="https://productdiscovery.pro/warsztaty/">
            Dowiedz się więcej
          </a>
        </div>
      </div>
      <div className="mainEvent__discount">
        KOD RABATOWY <p className="mainEvent__discount--single">designhub</p>
      </div>
    </div>
  );
};
