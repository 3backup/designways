import React from "react";
import Image from "next/image";
import Logo from "../../images/logo-product-discovery-pro.svg";
import styles from "./organiserhomepage.module.scss";

export const OrganiserHomepage = () => {
  return (
    <section className={styles.OrganiserHomepage} id={styles.OrganiserHomepage}>
      <div className={styles.OrganiserHomepage__container}>
        <h3 className={styles.OrganiserHomepage__title}>Nasi organizatorzy</h3>
        <div className={styles.OrganiserHomepage__images}>
          <Image src={Logo} alt="Reda" width={160} height={60} />
        </div>
        <p className={styles.OrganiserHomepage__paragraph}>
          Chcesz stworzyć swój profil organizatora? Napisz do nas na
          <span> hello@designways.io</span>
        </p>
      </div>
    </section>
  );
};
