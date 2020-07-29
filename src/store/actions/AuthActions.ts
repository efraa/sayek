import { Dispatch } from 'react'
import JwtDecode from 'jwt-decode'
import { token } from '../../api/token'
import { AuthTypes } from '../types/AuthTypes'
import { UserDTO } from '../../api/dtos/UserDTO'
import { Alert } from '../../components/Alert'

// Services
import { AuthenticationService } from '../../api/services/AuthenticationService'

const login = async (dispatch: Dispatch<AuthTypes>) => {
  try {
    const {
      data: { token: requestToken },
    } = await AuthenticationService.refreshToken()

    if (requestToken) {
      const { user }: { user: UserDTO } = await JwtDecode(requestToken)
      if (!user) return

      token.set(requestToken)
      dispatch({
        type: 'SET_USER',
        user,
        isAuth: true,
        isLoading: false,
      })
    }
  } catch (error) {
    console.error(error)
    return dispatch({
      type: 'SET_USER_FAIL',
      isAuth: false,
      isLoading: false,
    })
  }
}

const logout = async (dispatch: Dispatch<AuthTypes>) => {
  try {
    const { data } = await AuthenticationService.logout()
    if (data[0].msg) {
      token.destroy()
      Alert.info(data[0].msg)
      return dispatch({ type: 'LOGOUT' })
    }
  } catch (error) {
    console.error(error)
  }
}

export const AuthActions = {
  login,
  logout,
}
