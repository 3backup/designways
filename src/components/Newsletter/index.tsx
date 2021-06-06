import React, { useState } from "react";
import styled from "styled-components";
import { CotainerFullWidth } from "../styles/container";
import { ButtonNavyBlue } from "../styles/button";

const tab = -1;

const NewsletterContent = styled.div`
  width: 103rem;
  margin: 0 auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    max-width: 980px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 100%;
  }
`;
const NewsletterForm = styled.div`
  width: 47rem;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 100%;
  }
`;
const NewsletterSubheader = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fonts.label};
  line-height: 120%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  margin-bottom: 1rem;
`;
const NewsletterHeader = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.sectionHeight};
  line-height: 140%;
  color: ${({ theme }) => theme.colors.white};
`;
const NewsletterParagraph = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  margin-top: 2.3rem;
  font-size: ${({ theme }) => theme.fonts.biggerBase};
  line-height: 25px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  margin-bottom: 3rem;
`;
const NewsletterInput = styled.input`
    padding: 1.8rem 2.8rem;
    height: 60px;
    width: 100%;
    background: ${({ theme }) => theme.colors.white};
    color: #${({ theme }) => theme.colors.secondarybackground};
    border: 1px solid ${({ theme }) => theme.colors.lightgray};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.01),
      0px 15px 60px -28px rgba(23, 23, 28, 0.17);
    border-radius: 12px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fonts.biggerBase};
    line-height: 23px;
    &::placeholder {
      color: #8a8cb9;
    }
  }
`;
const NewsletterContentGdpr = styled.label`
  margin: 1.6rem 0;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    margin: 4rem 0;
  }
`;
const NewsletterCheckbox = styled.input`
  -webkit-transform: scale(2);
  border: none;
  margin: 1rem 0.4rem;
  border-radius: 10px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 2rem;
    height: 2rem;
  }
`;
const NewsletterGdpr = styled.span`
  font-size: 1.2rem;
  line-height: 150%;
  margin-left: 2rem;
  color: #fff;
  text-align: left;
  font-weight: 400;
  display: block;
  cursor: pointer;
`;

export const Newsletter = () => {
  const [isDisabled, setDisabled] = useState(true);
  const newsletterValidation = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) =>
    setDisabled(!target.checked ? true : false);

  return (
    <CotainerFullWidth id="newsletter">
      <NewsletterContent>
        <NewsletterForm>
          <NewsletterSubheader>Newsletter</NewsletterSubheader>
          <NewsletterHeader>Chcesz być na bieżąco?</NewsletterHeader>
          <NewsletterParagraph>
            Pierwsza_y dowiaduj się o najciekawszych wydarzeniach, zgarniaj kody
            rabatowe czy poznawaj nowe możliwości rozwojowe, dopisując się do
            naszego newslettera.
          </NewsletterParagraph>
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
                <NewsletterInput
                  type="email"
                  name="EMAIL"
                  className="email"
                  id="mce-EMAIL"
                  placeholder="Twój adres email"
                  required
                />
                <div
                  id="mergeRow-gdpr"
                  className="ąmergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
                  <div className="content__gdpr ">
                    <fieldset
                      className="mc_fieldset gdprRequired mc-field-group"
                      name="interestgroup_field">
                      <NewsletterContentGdpr
                        className="checkbox subfield"
                        htmlFor="gdpr_60219">
                        <NewsletterCheckbox
                          type="checkbox"
                          id="gdpr_60219"
                          onChange={newsletterValidation}
                          name="gdpr[60219]"
                          defaultValue="Y"
                          className="av-checkbox "
                        />
                        <NewsletterGdpr>
                          Wyrażam zgodę na otrzymywanie drogą elektroniczną na
                          wskazany przeze mnie adres e-mail treści zgodnie z
                          polityka prywatności.
                        </NewsletterGdpr>
                      </NewsletterContentGdpr>
                    </fieldset>
                  </div>
                </div>
                <div aria-hidden="true" style={{ display: "none" }}>
                  <input
                    type="text"
                    name="b_4cfaa6a48ce77c6979d19881a_6ca63a52d1"
                    tabIndex={tab}
                  />
                </div>

                <div className="clear">
                  <ButtonNavyBlue
                    type="submit"
                    value="Subskrybuj"
                    name="subscribe"
                    disabled={isDisabled}
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </form>
          </div>
        </NewsletterForm>
      </NewsletterContent>
    </CotainerFullWidth>
  );
};
