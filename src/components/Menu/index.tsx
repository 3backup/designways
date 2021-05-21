import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="container container--big display__row nav__main">
      <Image
        src="/images/Logo_horizontal_white.svg"
        alt="Logo DesignWays"
        width={168}
        height={48}
      />
      <nav className="nav__container display__flex disp">
        <a href="/suggest" rel="noreferrer" target="_blank">
          <button type="button" className="nav__addEvent">
            <Image
              src="/images/plus.svg"
              alt="plus in the button"
              width={18}
              height={18}
              className="nav__imageButton"
            />
            <span className="nav__titleButton">Dodaj wydarzenie</span>
          </button>
        </a>
        <ul className="nav__list display__row">
          <li className="nav__element">
            <a className="nav__element" href="#newsletter">
              Newsletter
            </a>
          </li>
          <li className="nav__element">
            <a className="nav__element" href="mailto:hello@designways.io">
              hello@designways.io
            </a>
          </li>

          <li className="nav__element">
            <a
              href="https://www.facebook.com/designwaysconf
          "
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/images/facebook.svg"
                alt="Facebook logo"
                width={11}
                height={19}
              />
            </a>
          </li>
          <li className="nav__element">
            <a
              target="_blank"
              href="https://www.instagram.com/designwaysconf/"
              rel="noreferrer"
            >
              <Image
                src="/images/insta_icon.svg"
                alt="Instagram logo"
                width={19}
                height={19}
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
