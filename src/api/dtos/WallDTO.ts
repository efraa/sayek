export interface WallDTO {
  id: number
  name: string
  posts?: {
    all: number
    pages: number
  }
  members?: number
}
