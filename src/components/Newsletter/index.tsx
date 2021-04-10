import React from "react";

const Newsletter = (props) => {
  return (
    <div className="Newsletter__Contianer">
      <div className="Newsletter__content">
        <div className="Newsletter__form">
          <div id="mc_embed_signup">
            <form
              action="https://designways.us7.list-manage.com/subscribe/post?u=4cfaa6a48ce77c6979d19881a&amp;id=6ca63a52d1"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate>
              <div id="mc_embed_signup_scroll">
                <label htmlFor="mce-EMAIL">Subscribe</label>
                <input
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="email address"
                  required
                />
                <div
                  id="mergeRow-gdpr"
                  className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                  <div className="content__gdpr">
                    <p>
                      Please select all the ways you would like to hear from
                      DesignWays Hub:
                    </p>
                    <fieldset
                      className="mc_fieldset gdprRequired mc-field-group"
                      name="interestgroup_field">
                      <label className="checkbox subfield" htmlFor="gdpr_60219">
                        <input
                          type="checkbox"
                          id="gdpr_60219"
                          name="gdpr[60219]"
                          value="Y"
                          className="av-checkbox "
                        />
                        <span>Email</span>{" "}
                      </label>
                    </fieldset>
                    <p>
                      You can unsubscribe at any time by clicking the link in
                      the footer of our emails. For information about our
                      privacy practices, please visit our website.
                    </p>
                  </div>
                  <div className="content__gdprLegal">
                    <p>
                      We use Mailchimp as our marketing platform. By clicking
                      below to subscribe, you acknowledge that your information
                      will be transferred to Mailchimp for processing.{" "}
                      <a href="https://mailchimp.com/legal/" target="_blank">
                        Learn more about Mailchimp's privacy practices here.
                      </a>
                    </p>
                  </div>
                </div>

                <div aria-hidden="true">
                  <input
                    className="fff"
                    type="text"
                    name="b_4cfaa6a48ce77c6979d19881a_6ca63a52d1"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
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
