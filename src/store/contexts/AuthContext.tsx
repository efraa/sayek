import React, { createContext, Dispatch, ReactNode, useReducer } from 'react'
import { AuthTypes } from '../types/AuthTypes'
import { AuthReducer } from '../reducers/AuthReducer'
import { AuthState, IAuthState } from '../state/AuthState'

export interface IAuthContext {
  state: IAuthState
  dispatch: Dispatch<AuthTypes>
}

export const AuthContext = createContext({
  state: AuthState,
  dispatch: () => {},
} as IAuthContext)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, AuthState)
  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}
