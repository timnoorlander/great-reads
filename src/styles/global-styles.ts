import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  * {
    font-family: ${theme.fonts.body}; 
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.text};
    line-height: 1.5em;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 900;
    line-height: 1em;
    margin-bottom: 1em;
  }

  h1 {
    font-size: ${theme.fontSizes.lg};
  }

  h2 {
    font-size: ${theme.fontSizes.md};
  }

  body {
    background-color: ${theme.colors.background}
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

`;
