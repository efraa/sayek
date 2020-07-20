import { AuthTypes } from '../types/AuthTypes'
import { IAuthState } from '../state/AuthState'

export const AuthReducer = (state: IAuthState, action: AuthTypes) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
        isAuth: action.isAuth,
      }
    default:
      return {
        ...state,
      }
  }
}
