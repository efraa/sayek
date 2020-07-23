import { AuthenticationService } from './services/AuthenticationService'

let requestToken: string | undefined

export const token = {
  get: () => requestToken,
  set: (token: string) => (requestToken = token),
  destroy: () => (requestToken = undefined),
  refresh: async () =>
    (requestToken = (await AuthenticationService.refreshToken()).data.token),
}
