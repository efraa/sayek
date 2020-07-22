import { API } from '../apiConnection'

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
}
