import { Dispatch } from 'react'
import JwtDecode from 'jwt-decode'
import { token } from '../../api/token'
import { AuthTypes } from '../types/AuthTypes'
import { UserDTO } from '../../api/dtos/UserDTO'

// Services
import { AuthenticationService } from '../../api/services/authentication'

const login = async (dispatch: Dispatch<AuthTypes>) => {
  try {
    const { data: { token: requestToken } } = await AuthenticationService.refreshToken()
    if (requestToken) {
      const { user }: { user: UserDTO } = await JwtDecode(requestToken)
      if (user) {
        token.set(requestToken)
        dispatch({
          type: 'SET_USER',
          user,
          isAuth: true,
        })
      }

      return {
        user,
        isAuth: true,
      }
    }
  } catch (error) {
    console.error(error)
  }
}

export const AuthActions = {
  login
}
