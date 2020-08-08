import React, { useState, useRef } from 'react'
import { useMutation, queryCache } from 'react-query'
import { useWalls } from '../../hooks/useWalls'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

import { ListItem } from '../../components/ListItem'
import { Layout } from '../../components/Layout'
import { Messages } from '../../data/messageConstants'
import { Paths } from '../../routes/Paths'
import { OptionsModal } from './OptionsModal'
import { LoadMore } from './LoadMore'
import { WallsContainer, NotFound } from './Style'
import { WallDTO } from '../../api/dtos/WallDTO'
import { WallService } from '../../api/services/WallService'
import { Alert } from '../../components/Alert'

export const Walls = () => {
  const {
    walls,
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useWalls()
  const [open, setOpen] = useState(false)
  const [wall, setWall] = useState<WallDTO>({ id: 0, name: '' })
  const loadMoreRef = useRef<any>(null)

  const [leave] = useMutation(WallService.leave, {
    onSuccess: () => queryCache.invalidateQueries('walls'),
    onError: (error: any) =>
      error.response.data.map(err => Alert.error(err.msg)),
  })

  const onClick = (wall: WallDTO) => {
    setWall(wall)
    setOpen(true)
  }

  const onLeave = async () => {
    if (!window.confirm(Messages.walls.leave.replace('{VALUE}', wall?.name)))
      return

    setOpen(false)
    await leave(wall.id).then(() =>
      Alert.info(Messages.walls.leaveed.replace('{VALUE}', wall?.name))
    )
  }

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchMore,
    enabled: canFetchMore,
  } as any)

  return (
    <Layout title={Messages.walls.title}>
      {walls ? (
        <WallsContainer>
          {walls.map(w => (
            <ListItem
              key={w.id}
              to={Paths.walls.toWall(w.id)}
              onClick={() => onClick(w)}
              text={w.name}
            />
          ))}
        </WallsContainer>
      ) : !isFetching ? (
        <NotFound>Aún no has creado ni te has unido a ningún muro.</NotFound>
      ) : null}

      <LoadMore
        loadRef={loadMoreRef}
        show={isFetching || (isFetchingMore as boolean)}
      />

      <OptionsModal
        isOpen={open}
        onCloseModal={() => setOpen(false)}
        onLeave={() => onLeave()}
        wall={wall}
      />
    </Layout>
  )
}
