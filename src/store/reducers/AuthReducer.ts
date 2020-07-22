import { AuthTypes } from '../types/AuthTypes'
import { IAuthState, AuthState } from '../state/AuthState'

export const AuthReducer = (state: IAuthState, action: AuthTypes) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
        isAuth: action.isAuth,
      }
    case 'LOGOUT':
      return {
        ...AuthState,
      }
    default:
      return {
        ...state,
      }
  }
}
