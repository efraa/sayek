import React, { useState, useRef } from 'react'
import { useWalls } from '../../hooks/useWalls'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'

import { ListItem } from '../../components/ListItem'
import { Layout } from '../../components/Layout'
import { Messages } from '../../data/messageConstants'
import { Paths } from '../../routes/Paths'
import { OptionsModal } from './OptionsModal'
import { LoadMore } from './LoadMore'
import { WallsContainer } from './Style'
import { WallDTO } from '../../api/dtos/WallDTO'

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

  const onClick = (wall: WallDTO) => {
    setWall(wall)
    setOpen(true)
  }

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchMore,
    enabled: canFetchMore,
  } as any)

  return (
    <Layout title={Messages.walls.title}>
      <WallsContainer>
        {walls?.map(w => (
          <ListItem
            key={w.id}
            to={Paths.walls.toWall(w.id)}
            onClick={() => onClick(w)}
            text={w.name}
          />
        ))}
      </WallsContainer>

      <LoadMore
        loadRef={loadMoreRef}
        show={isFetching || (isFetchingMore as boolean)}
      />

      <OptionsModal
        isOpen={open}
        onCloseModal={() => setOpen(false)}
        wall={wall}
      />
    </Layout>
  )
}
