import { API } from '../apiConnection'
import { config } from '../../config'

export const AuthenticationService = {
  refreshToken: async (): Promise<{
    token: string
  }> => (await API.post('/users/refresh-token')).data,

  logout: async (): Promise<
    [
      {
        msg: string
      }
    ]
  > => (await API.post('/users/logout')).data,

  authFacebook: () => config.auth.facebook,
  authGoogle: () => config.auth.google,
}
