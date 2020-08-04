import { createGlobalStyle, keyframes } from 'styled-components'

const placeload = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    min-height: 100vh;
    width: 100%;
    padding: 0;
    margin: auto;
    background: ${({ theme: { colors } }) => colors.white};
    font-size: 100%;
  }

  #app {
    max-width: 768px;
    margin: auto;
  }

  * {
    font-family: ${({ theme: { fonts } }) => fonts.primary};
    word-break: break-word;
    outline: none !important;

    &::-webkit-scrollbar {
      width: 6px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme: { colors } }) => colors.white};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb,
    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme: { colors } }) => colors.gray};
      border-radius: 10px;
    }
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
    font-size: 16px;
    color: ${({ theme: { colors } }) => colors.defaultTextColor};
    font-feature-settings: 'pnum';
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant-numeric: proportional-nums;
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme: { colors } }) => colors.black};
    margin: 0;
    padding: 0;
  }

  h1,
  .h1 {
    font-size: 26px;
  }

  h2,
  .h2 {
    font-size: 24px;
    line-height: 32px;
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
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme: { colors } }) => colors.defaultTextColor};
  }

  small {
    font-size: 14px;
  }

  p,
  li,
  a,
  span,
  strong,
  input,
  button,
  select,
  textarea {
    line-height: 32px;
    font-weight: 500;
  }

  .load {
    animation: ${placeload} 1s linear forwards 0s infinite;
    background: ${({ theme: { colors } }) =>
      `linear-gradient(to right, ${colors.secondary} 8%, ${colors.gray} 18%, ${colors.secondary} 33%)`};
    background-size: 1200px 104px;
    position: relative;
  }
`
