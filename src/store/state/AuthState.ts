import { UserDTO } from '../../api/dtos/UserDTO'

export interface IAuthState {
  user: UserDTO | undefined,
  isAuth: boolean
}

export const AuthState: IAuthState = {
  user: undefined,
  isAuth: false
}
