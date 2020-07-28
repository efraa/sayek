import React, { memo } from 'react'

// Comps
import { ListItem } from '../../components/ListItem'
import { Layout } from '../../components/Layout'
import { Messages } from '../../data/messageConstants'
import { Paths } from '../../routes/Paths'

export const Walls = memo(() => (
  <Layout title={Messages.walls.title}>
    <ListItem to={Paths.walls.toWall(1)} />
    <ListItem to={Paths.walls.toWall(2)} />
    <ListItem to={Paths.walls.toWall(3)} />
    <ListItem to={Paths.walls.toWall(4)} />
    <ListItem to={Paths.walls.toWall(5)} />
    <ListItem to={Paths.walls.toWall(1)} />
    <ListItem to={Paths.walls.toWall(2)} />
    <ListItem to={Paths.walls.toWall(3)} />
    <ListItem to={Paths.walls.toWall(4)} />
    <ListItem to={Paths.walls.toWall(5)} />
  </Layout>
))
