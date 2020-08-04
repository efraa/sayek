import { useQuery } from 'react-query'
import { WallService } from '../api/services/WallService'

export const useWall = (
  id: number,
  queryKey = 'post',
  cacheTime = 1000 * 60 * 15,
  retry = 2
) =>
  useQuery([queryKey, id], async (_, postId) => WallService.get(postId), {
    cacheTime,
    retry,
    refetchOnWindowFocus: false,
  })
