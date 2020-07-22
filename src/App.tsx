import React from 'react'
import { StyledProvider } from './styles'
import { AuthProvider } from './store/contexts/AuthContext'
import { Authorized } from './Authorized'

export const App: React.FC = () => (
  <StyledProvider>
    <AuthProvider>
      <Authorized />
    </AuthProvider>
  </StyledProvider>
)
