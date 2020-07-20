import React from 'react'
import { StyledProvider } from './styles'
import { AuthProvider } from './store/contexts/AuthContext'
import { Authentication } from './Authentication'

export const App: React.FC = () => (
  <StyledProvider>
    <AuthProvider>
      <Authentication />
    </AuthProvider>
  </StyledProvider>
)
