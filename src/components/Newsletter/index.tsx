import React, { useRef } from "react";
import styles from "../../styles/Newsletter.module.scss";

const tab = -1;

const Newsletter = () => {
  const subscribeBtnRef = useRef<HTMLInputElement>();

  const newsletterValidation = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (subscribeBtnRef.current) {
      subscribeBtnRef.current.disabled = target.checked ? true : false
    }
  };

  return (
    <div className={styles.Newsletter__Contianer} id="newsletter">
      <div className={styles.Newsletter__content}>
        <div className={styles.Newsletter__form}>
          <p className={styles.Newsletter__subheader}>Newsletter</p>
          <h3 className={styles.Newsletter__header}>Chcesz być na bieżąco?</h3>
          <p className={styles.Newsletter__paragraph}>
            Pierwsza_y dowiaduj się o najciekawszych wydarzeniach, zgarniaj kody
            rabatowe czy poznawaj nowe możliwości rozwojowe, dopisując się do
            naszego newslettera.
          </p>
          <div id="mc_embed_signup">
            <form
              action="https://designways.us7.list-manage.com/subscribe/post?u=4cfaa6a48ce77c6979d19881a&amp;id=6ca63a52d1"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div id="mc_embed_signup_scroll">
                <input
                  type="email"
                  name="EMAIL"
                  className={`${styles.Newsletter__email} email`}
                  id="mce-EMAIL"
                  placeholder="Twój adres email"
                  required
                />
                <div
                  id="mergeRow-gdpr"
                  className="ąmergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                >
                  <div className="content__gdpr ">
                    <fieldset
                      className="mc_fieldset gdprRequired mc-field-group"
                      name="interestgroup_field"
                    >
                      <label
                        className={`checkbox subfield ${styles.Newsletter__contentGdpr}`}
                        htmlFor="gdpr_60219"
                      >
                        <input
                          type="checkbox"
                          id="gdpr_60219"
                          onChange={newsletterValidation}
                          name="gdpr[60219]"
                          defaultValue="Y"
                          className={`av-checkbox ${styles.Newsletter__checkbox}`}
                        />
                        <span className={styles.Newsletter__gdpr}>
                          Wyrażam zgodę na otrzymywanie drogą elektroniczną na
                          wskazany przeze mnie adres e-mail treści zgodnie z
                          polityka prywatności.
                        </span>
                      </label>
                    </fieldset>
                  </div>
                </div>
                <div aria-hidden="true">
                  <input
                    type="text"
                    name="b_4cfaa6a48ce77c6979d19881a_6ca63a52d1"
                    tabIndex={tab}
                  />
                </div>

                <div className="clear">
                  <input
                    type="submit"
                    value="Subskrybuj"
                    name="subscribe"
                    disabled
                    id="mc-embedded-subscribe"
                    ref={subscribeBtnRef}
                    className={`${styles.Newsletter__button} button`}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
