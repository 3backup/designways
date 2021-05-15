import React from "react";

import Microphone from "images/microphone.png";

const AddEvent = () => {
  return (
    <div className="container container--xl AddToDatabase violet violet--alternative">
      <img
        src="images/microphone.png"
        alt={Microphone}
        className="AddToDatabase__image"
      />
      <h3 className="AddToDatabase__h3">
        Zaproponuj nowe wydarzenie do naszej bazy.
      </h3>
      <a
        href="https://airtable.com/shrAwlFIeLbevMEa6"
        target="_blank"
        rel="noreferrer"
        className="AddToDatabase__button">
        <img
          src="images/send.svg"
          alt=""
          className="AddToDatabase__buttonIcon"
        />
        <span className="AddToDatabase__buttonText">Wyślij propozycję</span>
      </a>
    </div>
  );
};

export default AddEvent;
