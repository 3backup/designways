import React from "react";
import Link from "next/link";
import Logo from "./logo-product-discovery-pro.png";
import styles from "./organiserNew.module.scss";

export const OrganiserNew = () => {
  return (
    <div className={styles.container}>
      <div className={styles.oragniserNew}>
        <div className={styles.oragniserNew__content}>
          <img src={Logo} className={styles.oragniserNew__logo} alt="" />
          <p className={styles.oragniserNew__paragraph}>
            Poznaj pierwszy profil organizatora na DesignWays Hub - Product
            Discovery Pro
          </p>
          <Link href="/organiser/product-discovery-pro">
            <a className={styles.oragniserNew__button}>Sprawdź wydarzenia</a>
          </Link>
        </div>

        <div className={styles.oragniserNew__discount}>
          Kod rabatowy -300zł <span>designhub300</span>
        </div>
      </div>
      <p className={styles.container__contact}>
        Chcesz stworzyć swój profil organizatora? Napisz do nas na
        <span> hello@designways.io</span>
      </p>
    </div>
  );
};
export default OrganiserNew;
