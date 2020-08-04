export const parseURL = (url: string) => {
  const exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
  return url?.replace(
    exp,
    link => `<a href="${link}" target="_blank">${link}</a>`
  )
}
