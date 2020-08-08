import { useQuery } from 'react-query'
import { WallService } from '../api/services/WallService'

export const useWall = (
  id: any,
  queryKey = 'wall',
  cacheTime = 1000 * 60 * 15,
  retry = 2
) =>
  useQuery([queryKey, id], async (_, wallId) => WallService.get(wallId), {
    cacheTime,
    retry,
    refetchOnWindowFocus: false,
  })
