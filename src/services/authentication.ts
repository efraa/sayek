import { API } from './apiConnection'

export const AuthenticationService = {
  signup: (user: {}) => API.post('/signup', user)
}
