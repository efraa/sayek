import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyles'

enum Colors {
  black = '#000000',
  blackDark = '#1A1A1A',
  blackOdd = '#222222',
  blackLight = '#2E2E2E',
  blackLighter = '#444444',
  white = '#FFFFFF',
  whiteDark = '#F8F8F8',
  pink = '#ED2B74',
  gray = '#A7ABAE',
  grayLighter = '#F5F5F5',
  grayLight = '#E1E2E2',
  grayDark = '#4C5A64',
  grayDarkLight = '#6a7882',
  required = '#D1153B',
}

enum Breakpoints {
  sm = 576,
  md = 768,
  lg = 991.98,
  xl = 1200,
}

const fonts = {
  inter: "'Inter', sans-serif",
  openSans: "'Open Sans', Helvetica, sans-serif",
  roboto: "'Roboto', sans-serif",
}

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(Breakpoints.lg),
  tablet: customMediaQuery(Breakpoints.md),
  phone: customMediaQuery(Breakpoints.sm),
}

export const theme = {
  colors: {
    ...Colors,
    primary: Colors.pink,
    secondary: Colors.white,
    defaultTextColor: Colors.blackOdd,
  },
  fonts: {
    ...fonts,
    primary: fonts.inter,
    secondary: fonts.openSans,
    tertiary: fonts.roboto,
    default: fonts.openSans,
  },
  media,
  breakpoints: Breakpoints,
  viewport: {
    h: '1024px',
    w: '1280px',
  },
}

export const StyledProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
