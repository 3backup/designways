import React from "react";
import type { AppProps } from "next/app";

import "../styles/main.sass";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useRouteChange } from "../hooks/useRouteChange";

const GlobalStyle = createGlobalStyle`
:root{
  font-size:10px;
  box-sizing: border-box;
}
*, *:before, *:after{
    box-sizing: border-box;
}
html, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video{
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: none;
}html{
    font-size: 10px;
}
footer, header, nav, section, main{
    display: block;
}
body{
    line-height: 1;
    font-size: 16px;
    font-family: Manrope;
}
ol, ul{
    list-style: none;
}
blockquote, q{
    quotes: none;
}
blockquote:before, blockquote:after, q:before, q:after{
    content: '';
    content: none;
}
table{
    border-collapse: collapse;
    border-spacing: 0;
}
input{
    border-radius: 0;
}
html{
    scroll-behavior: smooth;
}
`;

export const theme = {
  colors: {
    lightviolet: "#AE97F5",
    lightvioletbg: "#EFEAFF",
    veryLightVioletBg: "#FAF8FF",
    violet: "#7D4CE5",
    darkviolet: "#6B32E3",
    white: "#FFFFFF",
    sectionGray: "#f4f4f5",
    lightgray: "#CED3E0",
    gray: "#dfe0e4",
    lightpurple: "#b9bad5",
    navyblue: "#2A2D50",
    black: "#242424",
    darkgrey: "#575983",
    secondarybackground: "#8A8CB9",
    green: "#3fd59f",
  },
  fonts: {
    base: "1.6rem",
    titlePage: "5.8rem",
    headerSize: "4.2rem",
    sectionHeight: "3.8rem",
    fontx32: "3.2rem",
    fontsx26: "2.6rem",
    leadeHeight: "2.4rem",
    biggerBase: "1.8rem",
    label: "1.4rem",
    miniLabel: "1.3rem",
  },
  space: {
    xxs: "1rem",
    xs: "2.5rem",
    x40: "4rem",
    s: "6rem",
    m: "10rem",
  },
  breakpoints: {
    xxs: "320px",
    xs: "576px",
    s: "768px",
    m: "992px",
    l: "1200px",
  },
};

const App = ({ Component, pageProps }: AppProps) => {
  useRouteChange();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
