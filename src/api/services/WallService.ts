import { API } from '../apiConnection'
import { ListOfWallDTO } from '../dtos/ListOfWallDTO'
import { WallDTO } from '../dtos/WallDTO'

export const WallService = {
  list: async (): Promise<{
    walls: ListOfWallDTO[]
    all: number
    pages: number
  }> => (await API.get('/walls/list')).data,

  create: async (name: string): Promise<WallDTO> =>
    (await API.post('/walls/', { name })).data,
}
