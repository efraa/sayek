import { AuthTypes } from '../types/AuthTypes'
import { IAuthState, AuthState } from '../state/AuthState'

export const AuthReducer = (state: IAuthState, action: AuthTypes) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
        isAuth: action.isAuth,
        isLoading: action.isLoading,
      }
    case 'SET_USER_FAIL':
      return {
        ...state,
        isAuth: action.isAuth,
        isLoading: action.isLoading,
      }
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.location,
      }
    case 'LOGOUT':
      return {
        ...AuthState,
        isLoading: false,
      }
    default:
      return {
        ...state,
      }
  }
}
