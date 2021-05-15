import React from "react";
import Facebook from "images/Facebook_purple.svg";
import LinkedIn from "images/LinkedIN_purple.svg";

const SignleSpeaker = (props) => {
  const {
    name,
    image,
    firstParagraph,
    secondParagraph,
    facebook,
    linkedin,
  } = props;
  return (
    <div className="SingleSpeaker">
      <div className="SingleSpeaker__image">
        <img className="SingleSpeaker__image--single" src={image} alt="" />
      </div>
      <div className="SingleSpeaker__aboutSpeaker">
        <h3 className="SingleSpeaker__names">{name}</h3>
        <p className="SingleSpeaker__desc">{firstParagraph}</p>
        <p className="SingleSpeaker__desc SingleSpeaker__desc--second">
          {secondParagraph}
        </p>
        <div className="SingleSpeaker__socials">
          <a
            className="SingleSpeaker__socials--single"
            target="_blank"
            rel="noreferrer"
            href={linkedin}>
            <img src={LinkedIn} alt="" />
          </a>
          <a href={facebook} target="_blank" rel="noreferrer">
            <img src={Facebook} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignleSpeaker;
