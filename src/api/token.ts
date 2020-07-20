let requestToken: string | undefined

export const token = {
  get: () => requestToken,
  set: (token: string) => (requestToken = token),
  destroy: () => (requestToken = undefined),
}
