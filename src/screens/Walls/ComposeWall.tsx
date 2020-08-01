import React, { memo, useState } from 'react'
import { useMutation, queryCache } from 'react-query'

// Comps
import { ComposeInput, Wrapper } from './Style'
import { Layout } from '../../components/Layout'
import { Messages } from '../../data/messageConstants'
import { Button } from '../../components/Button'

import { WallService } from '../../api/services/WallService'
import { Alert } from '../../components/Alert'

const ComposeWall = memo(() => {
  const [name, setName] = useState('')
  const [addWall] = useMutation(WallService.create, {
    onSuccess: () => queryCache.invalidateQueries('walls'),
    onError: (error: any) =>
      error.response.data.map(err => Alert.error(err.msg)),
  })

  const onSubmit = async e => {
    e.preventDefault()
    const wall = await addWall(name)
    if (wall) {
      setName('')
      Alert.info(`"${wall?.name}" fue creado correctamente.`)
    }
  }

  return (
    <Layout title={Messages.walls.create.title}>
      <Wrapper onSubmit={onSubmit}>
        <ComposeInput
          placeholder={Messages.walls.create.placeholder}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Button type="submit" disabled={!name}>
          {Messages.walls.create.button}
        </Button>
      </Wrapper>
    </Layout>
  )
})

export default ComposeWall
