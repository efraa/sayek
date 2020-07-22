import { UserDTO } from '../../api/dtos/UserDTO'

export interface IAuthState {
  user: UserDTO | undefined
  isAuth: boolean
  location?: string
  isLoading: boolean
}

export const AuthState: IAuthState = {
  user: undefined,
  isAuth: false,
  location: '',
  isLoading: true,
}
