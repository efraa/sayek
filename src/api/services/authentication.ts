import { API } from '../apiConnection'

export const AuthenticationService = {
  refreshToken: async (): Promise<{
    data: {
      token: string
    }
  }> => await API.post('/users/refresh-token'),
}
