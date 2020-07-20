import { UserDTO } from '../../api/dtos/UserDTO'

interface SET_USER {
  type: 'SET_USER'
  user: UserDTO
  isAuth: boolean
}

interface LOGOUT {
  type: 'LOGOUT'
}

export type AuthTypes = SET_USER | LOGOUT
