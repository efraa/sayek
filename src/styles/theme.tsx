import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyles'

enum Colors {
  black = '#363636',
  blackOdd = '#8899A6',
  white = '#FFFFFF',
  whiteDark = '#F5F8FA',
  pink = '#FF5678',
  gray = '#E5E5E5',
}

enum Breakpoints {
  sm = 576,
  md = 768,
  lg = 991.98,
  xl = 1200,
}

const fonts = {
  poppins: "'Poppins', sans-serif",
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
    secondary: Colors.whiteDark,
    defaultTextColor: Colors.blackOdd,
  },
  fonts: {
    ...fonts,
    primary: fonts.poppins,
  },
  media,
  breakpoints: Breakpoints,
}

export const StyledProvider = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
