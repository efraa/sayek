export interface ListOfWallDTO {
  walls: [
    {
      id: number
      name: string
    }
  ]
  all: number
  pages: number
  nextPage: number
}
