import { useInfiniteQuery } from 'react-query'
import { WallService } from '../api/services/WallService'
import { WallDTO } from '../api/dtos/WallDTO'

export const useWalls = (
  queryKey = 'walls',
  cacheTime = 1000 * 60 * 60 * 12,
  retry = 2
) => {
  const { data, ...opts } = useInfiniteQuery(
    queryKey,
    async (_, page = 1) => WallService.list(page),
    {
      getFetchMore: lastGroup => lastGroup.nextPage,
      cacheTime,
      retry,
      refetchOnWindowFocus: false,
    }
  )
  const walls: WallDTO[] | undefined = data
    ?.map(page => [...page.walls])
    .flat(Infinity) as any

  return {
    ...opts,
    walls,
  }
}
