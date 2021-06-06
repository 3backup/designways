import React from "react";
import type { AppProps } from "next/app";

import "../styles/main.sass";
import "../styles/filters.sass";
import "../styles/organiser.scss";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useRouteChange } from "../hooks/useRouteChange";

const GlobalStyle = createGlobalStyle`

:root{
  font-size:10px;
}
*, *:before, *:after
    box-sizing: border-box

html, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video
    margin: 0
    padding: 0
    border: 0
    font: inherit
    vertical-align: baseline
    text-decoration: none
    text-rendering: optimizeLegibility
    -webkit-font-smoothing: antialiased
    text-size-adjust: none
html
    font-size: 10px

footer, header, nav, section, main
    display: block

body
    line-height: 1
    font-size: 16px
    font-family: Manrope

ol, ul
    list-style: none

blockquote, q
    quotes: none

blockquote:before, blockquote:after, q:before, q:after
    content: ''
    content: none

table
    border-collapse: collapse
    border-spacing: 0

input
    border-radius: 0

html
    scroll-behavior: smooth

`;

const theme = {
  colors: {
    lightviolet: "#AE97F5",
    violet: "#7D4CE5",
    darkviolet: "#6B32E3",
    white: "#FFFFFF",
    lightgray: "#CED3E0",
    navyblue: "#2A2D50",
    darkgrey: "#575983",
    secondarybackground: "#8A8CB9",
    green: "#189F0D",
  },
  fonts: {
    base: "1.6rem",
    titlePage: "5.8rem",
    sectionHeight: "3.8rem",
    leadeHeight: "2.4rem",
    biggerBase: "1.8rem",
    label: "1.4rem",
  },
  space: {
    xs: "2.5rem",
    s: "6rem",
    m: "10rem",
  },
  breakpoints: {
    xxs: "320px",
    xs: "576px",
    s: "768px",
    m: "992px",
    l: "1200",
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
