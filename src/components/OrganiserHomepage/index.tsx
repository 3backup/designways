import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../images/logo-product-discovery-pro.svg";
import styles from "./organiserhomepage.module.scss";

export const OrganiserHomepage = () => (
  <section className={styles.OrganiserHomepage} id={styles.OrganiserHomepage}>
    <div className={styles.OrganiserHomepage__container}>
      <h3 className={styles.OrganiserHomepage__title}>Nasi organizatorzy</h3>
      <div className={styles.OrganiserHomepage__images}>
        <Link href="/organiser/product-discovery-pro">
          <Image
            src={Logo}
            alt="Logo Product Discovery Pro"
            width={160}
            height={60}
          />
        </Link>
      </div>
      <p className={styles.OrganiserHomepage__paragraph}>
        Chcesz stworzyć swój profil organizatora? Napisz do nas na{" "}
        <span className={styles.OrganiserHomepage__paragraphSpan}>
          hello@designways.io
        </span>
      </p>
    </div>
  </section>
);
