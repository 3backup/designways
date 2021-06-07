import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { SingleTestimonial } from "./components/SingleTestimoial/SingleTestimonial";
import left from "./Left.svg";
import right from "./Right.svg";

const CarouselSection = styled.section`
  width: 100%;
  overflow: hidden;
  padding: 8rem 0;
`;
const CarouselHeader = styled.h3`
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  text-align: cetner;
  font-size: ${({ theme }) => theme.fonts.leadeHeight};
  line-height: 140%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: right;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.navyblue};
`;
const ButtonNext = styled.button`
  background: ${({ theme }) => theme.colors.white};
  opacity: 1;
  width: 11rem;
  height: 5.5rem;
  cursor: pointer;
  border: 1.18605px solid ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  border-radius: 0px 84.1855px 84.1855px 0;
  img {
    margin-top: 4px;
  }
`;
const ButtonPrevioius = styled.button`
  background: ${({ theme }) => theme.colors.white};
  width: 11rem;
  height: 5.5rem;
  opacity: 1;
  cursor: pointer;
  border: 1.18605px solid ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  border-radius: 84.1855px 0px 0px 84.1855px;
  img {
    margin-top: 4px;
  }
`;

const sliderSettings = {
  className: "center",
  centerMode: true,
  autoplay: false,
  infinite: true,
  slidesToShow: 2.3,
  speed: 1000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
export class Testimonial extends Component {
  slider: any;

  next = () => {
    this.slider.slickNext();
  };

  previous = () => {
    this.slider.slickPrev();
  };

  render() {
    return (
      <CarouselSection id="testimonial">
        <CarouselHeader>Opinie o organizatorze</CarouselHeader>
        <Slider ref={(c) => (this.slider = c)} {...sliderSettings}>
          <div key={1}>
            <SingleTestimonial
              text="Warsztaty z Product Management 3.0. toolbox, które odbyliśmy z Michałem to dobrze zainwestowany czas! Dynamiczna formuła pracy w formie prezentacji, rozmowy i wielu ćwiczeń warsztatowych pomogła nam zrozumieć i „doświadczyć” korzyści płynących z określonych metod i procesu. Zdecydowanie najbardziej wartościowa część to wspólna praca z zespołem z zastosowaniem Evidence Based Management, ćwiczenie technik i testów walidacyjnych (z użyciem MVP) oraz projektowanie propozycji wartości. Zdecydowanie polecam!"
              author="Piotr Hołownia"
              company="Innovation Tribe Lead w T-mobile"
            />
          </div>

          <div key={2}>
            <SingleTestimonial
              text="Pełen profesjonalizm, doskonałe połączenie teorii z praktyką, a wszystko świetnie zorganizowane (2 dni warsztatów i sesja Q&A) i przeprowadzone w sympatycznej atmosferze. Szkolenie jest idealną pigułką wiedzy o Product Discovery i zachęca do dalszego pogłębiania tematu w zakresie poszczególnych rozwiązań. Świetna inspiracja do przeanalizowania własnych procesów i wprowadzenia Product Discovery w codzienną pracę. Serdecznie polecam."
              author="Monika Seroka"
              company="Product Discovery & Design Manager, Grupa Pracuj"
            />
          </div>
          <div key={3}>
            <SingleTestimonial
              text="Świetnie przygotowane, merytoryczne warsztaty! Zadania tworzyły logiczną całość, a prowadzący przekazywali wiedzę popartą własnym doświadczeniem. Polecam :)"
              author="Anna Wojciechowska"
              company="Projektant Innowacji w Bank Pekao S.A."
            />
          </div>
          <div key={4}>
            <SingleTestimonial
              text="Mocno polecam całe szkolenie z PD zarówno dla osób, które dopiero poznają zagadnienie jak i dla wtajemniczonych (super układa wiedzę). Całość przekazana w apetyczny sposób w bardzo miłej atmosferze współpracy, wymiany poglądów i konstruktywnej krytyki."
              author="Wojtech Boniaszczuk"
              company="UX Design Team Leader w Asseco Business Solutions S.A"
            />
          </div>
          <div key={5}>
            <SingleTestimonial
              text="Bardzo duża dawka praktycznych informacji, którą można stosować już w kolejnym projekcie. Mimo rozbudowanego tematu, poprowadzony sprawnie przez wzajemnie uzupełniających się wiedzą i anegdotami Bartka i Michała."
              author="Gabriela"
              company="IT Business and Product Consultant"
            />
          </div>
          <div key={6}>
            <SingleTestimonial
              text="Bartek i Michał zarażają entuzjazmem, mają „to coś”, czego potrzeba do skutecznego przekazywania wiedzy. Proces Product Discovery, który wypracowali własnym potem, krwią i łzami 😉 nadaje się do natychmiastowego wdrożenia. Dużo konkretów, dobre tempo, wiele referencji do dalszej nauki. Bardzo, bardzo polecam."
              author="Krzysztof"
              company="Team Partners Managing Partner"
            />
          </div>
          <div key={7}>
            <SingleTestimonial
              text="Podczas warsztatów Product Discovery Michał i Bartek przekazują skondensowaną dawkę wiedzy połączoną z motywacja do działania. Dogłębny opis procesu, realne przykłady jego realizacji i praktyczne ćwiczenia to przepis na naprawdę solidny warsztat, który przyda się każdej osobie zaangażowanej w tworzenie produktów i usług."
              author="Olka Fiszbach-Biernat"
              company="Team Leader I Senior UX/UI Designer w HTD Health Sp. z o.o."
            />
          </div>
          <div key={8}>
            <SingleTestimonial
              text="Szkolenie było przeprowadzone na najwyższym poziomie pod każdym względem. Michał ma niesamowitą wiedzę w temacie Product Managmentu, którą przekazuje w sposób zrozumiały, a zajęcia mimo formy online są energiczne i angażujące. Szkolenie spełniło moje oczekiwania w 100%."
              author="Piotr Wierzbicki"
              company="Główny Specjalista ds. Marketingu w T-mobile Innovation Tribe"
            />
          </div>
        </Slider>
        <div style={{ textAlign: "center" }}>
          <ButtonPrevioius onClick={this.previous} type="button">
            <img src={left} alt="" />
          </ButtonPrevioius>
          <ButtonNext onClick={this.next} type="button">
            <img src={right} alt="" />
          </ButtonNext>
        </div>
      </CarouselSection>
    );
  }
}
