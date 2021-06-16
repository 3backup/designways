import React from "react";
import quotes from "./quotes.svg";
import styled from "styled-components";

type Props = {
  text: string;
  author: string;
  company: string;
};
const TestimonialCotnainer = styled.div`
  padding: 4rem 6.5rem;
  max-width: 80.5rem;
  margin: 0 auto;
  position: relative;
  opacity: 0.3;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.l}) {
    padding: 3rem;
  }
  &:after {
    content: "";
    background: ${({ theme }) => theme.colors.gray};
    position: absolute;
    top: 5.5rem;
    right: 0;
    opacity: 1;
    height: 33rem;
    width: 1px;
  }
  &:before {
    content: "";
    background: #dfe0e4;
    position: absolute;
    top: 5.5rem;
    left: 0;
    opacity: 1;
    height: 330px;
    width: 1px;
  }
`;
const TestimonialQuote = styled.div``;
const TestimonialText = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 180%;
  color: ${({ theme }) => theme.colors.black};
  margin: 2.3rem 0px;
`;
const TestimonialAuthor = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fonts.base};
  line-height: 140%;
  /* or 22px */
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  margin: 4px 0px;
`;
const TestimonialCompany = styled.p`
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fonts.label};
  line-height: 19px;
  margin: 4px 0px;
  color: ${({ theme }) => theme.colors.lightviolet};
`;

export const SingleTestimonial = ({ text, author, company }: Props) => {
  return (
    <TestimonialCotnainer>
      <TestimonialQuote>
        <img src={quotes} alt="quate" />
      </TestimonialQuote>
      <TestimonialText>{text}</TestimonialText>
      <TestimonialAuthor> {author}</TestimonialAuthor>
      <TestimonialCompany>{company}</TestimonialCompany>
    </TestimonialCotnainer>
  );
};
