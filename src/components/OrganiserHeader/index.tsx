import React from "react";
import Image from "next/image";
import Link from "next/link";
import backArrow from "../../images/back-button.svg";
import logoOrganiser from "../../images/logo-product-discovery-pro.png";
import linkedIn from "../../images/LinkedIN.svg";
import facebook from "../../images/Facebook_white.svg";
export const OrganiserHeader = () => {
  return (
    <header className="organiserHeader">
      <div className="organiserHeader__menu">
        <div className="organiserHeader__oneThird">
          <button type="button" className="organiserHeader__button">
            <Image
              src={backArrow}
              alt="back arrow"
              width={20}
              height={20}
              className="nav__imageButton"
            />
            <span className="organiserHeader__buttonSpan">Wróć do głównej</span>
          </button>
        </div>
        <h1 className="organiserHeader__organiserTitle organiserHeader__oneThird">
          Product Discovery Pro
        </h1>
        <nav className="organiserHeader__nav organiserHeader__oneThird">
          <ul className="organiserHeader__ul">
            <li className="organiserHeader__li">Opinie</li>
            <li className="organiserHeader__li">O Organizatorze</li>
            <li className="organiserHeader__li">Prowadzący</li>
          </ul>
        </nav>
      </div>
      <div className="organiserHeader__basicInfo organiserContainer">
        <img
          src={logoOrganiser}
          alt="plus in the button"
          width={160}
          height={60}
          className="organiserHeader__imageHero"
        />
        <h2 className="organiserHeader__h2">Buduj Lepsze Produkty, Szybciej</h2>
        <p className="organiserHeader__p">
          Pomagamy budować produkty, które pokochają Twoi klienci.
        </p>
        <div className="organiserHeader__links">
          <div className="organiserHeader__socialMedia">
            <a href="https://www.linkedin.com/company/productdiscovery-pro/">
              <img
                className="organiserHeader__socialMediaIcon"
                src={linkedIn}
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/productdiscoverypro">
              <img
                className="organiserHeader__socialMediaIcon"
                src={facebook}
                alt=""
              />
            </a>
          </div>
          <a
            href="https://productdiscovery.pro/"
            className="organiserHeader__externalLink">
            Strona organizatora
          </a>
        </div>
      </div>
    </header>
  );
};
