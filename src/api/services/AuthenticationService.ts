import { API } from '../apiConnection'
import { config } from '../../config'

export const AuthenticationService = {
  refreshToken: async (): Promise<{
    data: {
      token: string
    }
  }> => API.post('/users/refresh-token'),

  logout: async (): Promise<{
    data: [
      {
        msg: string
      }
    ]
  }> => API.post('/users/logout'),

  authFacebook: () => config.auth.facebook,
  authGoogle: () => config.auth.google,
}
