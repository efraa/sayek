import { API } from '../apiConnection'
import { ListOfWallDTO } from '../dtos/ListOfWallDTO'
import { WallDTO } from '../dtos/WallDTO'

export const WallService = {
  list: async (page: number | unknown): Promise<ListOfWallDTO> =>
    (await API.get(`/walls/?page=${page}`)).data,

  create: async (name: string): Promise<WallDTO> =>
    (await API.post('/walls/', { name })).data,

  get: async (id: number): Promise<WallDTO> =>
    (await API.get(`/walls/${id}`)).data,
}
