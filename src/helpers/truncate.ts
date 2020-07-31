export const truncate = (message: string, length: number) =>
  message.length <= length ? message : `${message.slice(0, length).trim()}...`
