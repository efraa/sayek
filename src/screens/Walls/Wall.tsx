import React from 'react'
import { useParams } from 'react-router-dom'
import { useWall } from '../../hooks/useWall'

import { Layout } from '../../components/Layout'
import { Messages } from '../../data/messageConstants'
import { WallsContainer } from './Style'

const Wall = () => {
  const { wallId } = useParams<{ wallId: string | undefined }>()
  const { data: wall, isSuccess, isError } = useWall(wallId)

  return (
    <Layout
      show={isSuccess}
      error={isError}
      title={wall?.name as string}
    ></Layout>
  )
}

export default Wall
