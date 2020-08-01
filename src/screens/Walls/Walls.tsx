import React, { memo, useState } from 'react'

// Comps
import { ListItem } from '../../components/ListItem'
import { Layout } from '../../components/Layout'
import { Messages } from '../../data/messageConstants'
import { Paths } from '../../routes/Paths'

import { OptionsModal } from './OptionsModal'

export const Walls = memo(() => {
  const [open, setOpen] = useState(false)
  const [wall, setWall] = useState({ id: 0, name: '' })

  const onClick = (wall: { id: number; name: string }) => {
    setWall(wall)
    setOpen(true)
  }

  return (
    <Layout title={Messages.walls.title}>
      <ListItem
        to={Paths.walls.toWall(1)}
        onClick={() =>
          onClick({ id: 1, name: 'Cuando estábamos en secundaria' })
        }
        text="Cuando estábamos en secundaria You need to enable JavaScript to run this app."
      />

      <OptionsModal
        isOpen={open}
        onCloseModal={() => setOpen(false)}
        wall={wall}
      />
    </Layout>
  )
})
