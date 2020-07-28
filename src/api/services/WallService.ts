import { API } from '../apiConnection'
import { ListOfWallDTO } from '../dtos/ListOfWallDTO'

export const WallService = {
  list: async (): Promise<{
    data: {
      walls: ListOfWallDTO[]
      all: number
      pages: number
    }
  }> => API.get('/walls/list'),
}
