import { API } from '../apiConnection'

export const WallService = {
  list: async (): Promise<{
    data: {
      walls: [
        {
          id: number
          name: string
        }
      ]
      all: number
      pages: number
    }
  }> => API.get('/walls/list'),
}
