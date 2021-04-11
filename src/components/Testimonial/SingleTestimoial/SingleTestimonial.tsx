import React from "react";
import Slider from "react-slick";
import styles from "./singleTestimonial.module.scss";
import quotes from "./quotes.svg";

const SingleTestimonial = (props) => {
  const { text, author, company } = props;
  return (
    <div className={styles.singleTestimonial__container}>
      <div className={styles.signleTestimonial__quotes}>
        <img src={quotes} alt="quate" />
      </div>
      <p className={styles.singleTestimonial__text}>{text}</p>
      <p className={styles.singleTestimonial__author}> {author}</p>
      <p className={styles.singleTestimonial__company}>{company}</p>
    </div>
  );
};
export default SingleTestimonial;
