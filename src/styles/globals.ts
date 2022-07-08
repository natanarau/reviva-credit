import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
  html {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }
  h1 {
    font-size: 3.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  * {
    margin: 0;
    padding: 0;
  }
  a {
    color: #261E1E;
    text-decoration: none;
  }
  .slick-initialized .slick-slide {
    display: grid;
    justify-content: center;
  }
`
