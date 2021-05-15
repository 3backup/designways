import React from "react";
import styles from "./singleTestimonial.module.scss";
import quotes from "./quotes.svg";

type Props = {
  text: string;
  author: string;
  company: string;
};

export const SingleTestimonial = ({ text, author, company }: Props) => {
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
