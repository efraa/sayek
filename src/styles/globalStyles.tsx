import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: auto;
    overflow: hidden;
  }

  html {
    font-size: 100%;
  }

  body {
    background: ${({ theme: { colors } }) => colors.white};
    font-family: ${({ theme: { fonts } }) => fonts.default};
  }

  img,
  svg {
    max-width: 100%;
    height: auto;
  }

  /* Fonts */
  body,
  button,
  input,
  select,
  textarea {
    font-size: 24px;
    color: ${({ theme: { colors } }) => colors.defaultTextColor};
    font-family: ${({ theme: { fonts } }) => fonts.primary};
    font-feature-settings: 'pnum';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant-numeric: proportional-nums;
    font-weight: normal;
    line-height: 2rem;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3 {
    font-family: ${({ theme: { fonts } }) => fonts.primary};
    font-weight: 600;
    line-height: 77px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme: { colors } }) => colors.defaultTextColor};
    margin: 0;
    padding: 0;
  }

  h1,
  .h1 {
    font-size: 64px;
  }

  h2,
  .h2 {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 16px;
  }

  h3,
  .h3 {
    font-size: 32px;
  }

  h4,
  .h4 {
    font-size: 22px;
  }

  p {
    margin-bottom: 0;
    font-size: 22px;
    line-height: 32px;
    color: ${({ theme: { colors } }) => colors.grayDark};
  }

  p,
  li {
    line-height: 32px;
  }
`
