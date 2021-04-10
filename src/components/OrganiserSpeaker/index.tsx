import React from "react";
import SingleSpeaker from "./SignleSpeaker/SingleSpeaker";
import Image from "next/image";
import Link from "next/link";
import Michal from "../../images/michal-reda-prowadzacy-product-discovery-pro.jpg";
import Adam from "../../images/adam-bartkiewicz-prowadzacy-prodcut-discovery-pro.jpg";
import Bartek from "../../images/bartosz-narzelski-prowadzacy-prodcut-discovery-pro.jpg";

export const OrganiserSpeaker = () => {
  return (
    <div className="OrganiserSpeaker">
      <div className="OrganiserSpeaker__content">
        <p className="OrganiserSpeaker__title">Prowadzący</p>
        <SingleSpeaker
          name="Michał Reda"
          image={Michal}
          firstParagraph="Doświadczony Product and Growth Manager. Trener i ewangelizator obszaru Product Discovery w Polsce. Ma na koncie kilkanaście wypuszczonych produktów. W przeszłości pełnił takie role jak Head of R&D, Head of Growth czy Dyrektora marketingu i rozwoju produktów w różnorodnych organizacjach. "
          secondParagraph="„Moją pasją jest odkrywanie, budowanie oraz skalowanie rozwiązań, które pozostają w sercach użytkowników i robią robotę dla biznesu. Od 3 lat pomagam innym i dzielę się wiedzą z zakresu Product Managementu ze szczególnym uwzględnieniem Product Discovery, a także budowania kultury eksploracji i eksperymentacji w biznesie. "
          facebook="https://www.facebook.com/CuriousMichal"
          linkedin="https://www.linkedin.com/in/michalreda/"
        />
        <SingleSpeaker
          name="Adam Bartkiewicz"
          image={Adam}
          firstParagraph="Pomaga wdrażać i skalować innowacje poprzez procesy Product Discovery oraz Growth Marketing. Przez ostatnie lata budował i wdrażał strategie Growth Marketingowe oraz rozwijał produkty w obszarach ochrony zdrowia oraz nieruchomości – m.in. jako Product Owner marki innowacyjnych suplementów diety w spółce należącej do USP Zdrowie czy jako Head of Growth marketplace-u zajmującego się mieszkaniami z rynku pierwotnego. "
          secondParagraph="W każdym z projektów wdrażał i demokratyzował procesy badawcze wewnątrz organizacji, skupiając się na obszarze discovery oraz na szybkiej walidacji odpowiadając za wdrożenie oraz analizę eksperymentów w procesie Growth."
          facebook="https://www.facebook.com/bartkiewiczadam"
          linkedin="https://www.linkedin.com/in/bartkiewiczadam/"
        />
        <SingleSpeaker
          name="Bartosz Narzelski"
          image={Bartek}
          firstParagraph="Trener, facylitator i projektant usług. Oprócz pracy dla zespołów projektowych prowadzi zajęcia dla studentów SWPS / School of Ideas."
          secondParagraph="Wcześniej przez ponad 2,5 roku jako CX Manager rozwijał produkty i usługi testując nowe modele biznesowe w startuphub dla firmy farmaceutycznej.
                  Współpracował w wielu multidyscyplinarnych zespołach w agencjach reklamowych (VML, Brand New Heaven, OX Media i Kalicińscy.com), butikach strategicznych, domach badawczych i projektowych (Stibitz, s360, This!, JAZ+, 4PResearch), softwarehousach (Laboratorium.ee, SoftwareMill, HTD), ale też w fundacjach (Fundacja Batorego, Sektor 3.0, ngo.pl, Kultura Bez Barier) oraz w sektorze publicznym (PARP, Min. Finansów, PKW/KBW)"
          facebook="https://www.facebook.com/rzelski"
          linkedin="https://www.linkedin.com/in/bartosznarzelski/"
        />
      </div>
    </div>
  );
};
