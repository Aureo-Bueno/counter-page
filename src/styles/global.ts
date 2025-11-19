import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.family};
    font-size: ${({ theme }) => theme.fonts.sizes.base};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    line-height: 1.2;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.sizes["3xl"]};
  }

  h2 {
    font-size: ${({ theme }) => theme.fonts.sizes["2xl"]};
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.sizes.xl};
  }

  button {
    cursor: pointer;
    border: none;
    font-family: inherit;
  }

  input, textarea, select {
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
