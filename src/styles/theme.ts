import { css } from "styled-components";

export const theme = {
  colors: {
    primary: "#e2d0b7",
    text: "#222128",
    background: "#B7C9E2",
    accent: "#edf1f8",
  },
  breakpoints: {
    xs: "400px",
    sm: "600px",
    md: "900px",
    lg: "1280px",
    xl: "1440px",
    xxl: "1920px",
  },
  fonts: {
    body: "'Montserrat', sans-serif",
    heading: "'DM Serif Text', serif",
  },
  fontSizes: {
    xs: "1rem",
    sm: "1.5rem",
    md: "2rem",
    lg: "3rem",
  },
  borderRadius: {
    sm: "1rem",
    md: "2rem",
  },
  boxShadow: css`
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 4px 8px rgba(0, 0, 0, 0.3);
  `,
};

export type Theme = typeof theme;
