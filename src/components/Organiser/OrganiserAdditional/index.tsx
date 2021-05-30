import React from "react";

export const OrganiserAdditional = () => (
  <section className="OrganiserAdditional">
    <div className="OrganiserAdditional__container" id="additional">
      <h3 className="OrganiserAdditional__header">
        Dodatkowe rozwiązania oferowane przez organizatora
      </h3>
      <ul className="OrganiserAdditional__list">
        <li className="OrganiserAdditional__listElement">
          Audyty dojrzałości i pracy zespołu lub organizacji nad innowacją
        </li>
        <li className="OrganiserAdditional__listElement">
          Konsultacje eksperckie
        </li>
        <li className="OrganiserAdditional__listElement">
          Warsztaty strategiczne
        </li>
        <li className="OrganiserAdditional__listElement">
          Projekty wdrożeniowe skupione wokół konkretnego obszaru
          (zaprojektowanie procesu, badania, eksperymentacja)
        </li>
      </ul>
    </div>
  </section>
);
