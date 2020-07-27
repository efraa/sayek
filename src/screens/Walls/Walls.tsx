import React, { memo } from 'react'

// Comps
import { ListItem } from '../../components/ListItem'
import { Layout } from '../../components/Layout'
import { Messages } from '../../data/messageConstants'

export const Walls = memo(() => (
  <Layout title={Messages.walls.title}>
    <>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </>
  </Layout>
))
