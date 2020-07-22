import { UserDTO } from '../../api/dtos/UserDTO'

interface SET_USER {
  type: 'SET_USER'
  user: UserDTO
  isAuth: boolean
  isLoading: boolean
}

interface SET_USER_FAIL {
  type: 'SET_USER_FAIL'
  isAuth: boolean
  isLoading: boolean
}

interface LOGOUT {
  type: 'LOGOUT'
}

interface SET_LOCATION {
  type: 'SET_LOCATION'
  location: string
}

export type AuthTypes = SET_USER | LOGOUT | SET_LOCATION | SET_USER_FAIL
