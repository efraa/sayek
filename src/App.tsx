import React from 'react'
import { StyledProvider } from './styles'
import { ReactQueryDevtools } from 'react-query-devtools'
import { AlertContainer } from './components/Alert'
import { AuthProvider, Authorized } from './Authentication'

export const App: React.FC = () => (
  <StyledProvider>
    <AuthProvider>
      <AlertContainer />
      <Authorized />
    </AuthProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </StyledProvider>
)
