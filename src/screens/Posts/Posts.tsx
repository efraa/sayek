import React, { memo, useState } from 'react'

// Comps
import { ListItem } from '../../components/ListItem'
import { Layout } from '../../components/Layout'
import { Messages } from '../../data/messageConstants'
import { Paths } from '../../routes/Paths'

import { OptionsModal } from './OptionsModal'

export const Posts = memo(() => {
  const [open, setOpen] = useState(false)
  const [wall, setPost] = useState({ id: 0, name: '' })

  const onClick = (wall: { id: number; name: string }) => {
    setPost(wall)
    setOpen(true)
  }

  return (
    <Layout title={'Mensaje'}>
      <ListItem
        to={Paths.posts.toPost(1)}
        onClick={() =>
          onClick({ id: 1, name: 'Cuando estábamos en secundaria' })
        }
        text="Cuando estábamos en secundaria"
      />

      <OptionsModal
        isOpen={open}
        onCloseModal={() => setOpen(false)}
        wall={wall}
      />
    </Layout>
  )
})
