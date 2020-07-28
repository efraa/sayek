import React, { memo } from 'react'

// Comps
import { ComposeInput, Wrapper } from './Style'
import { Layout } from '../../components/Layout'
import { Messages } from '../../data/messageConstants'
import { Button } from '../../components/Button'

const ComposeWall = memo(() => {
  const onSubmit = e => {
    e.preventDefault()
    console.log(e)
  }

  return (
    <Layout title={Messages.walls.create.title}>
      <Wrapper onSubmit={onSubmit}>
        <ComposeInput placeholder={Messages.walls.create.placeholder} />
        <Button type="submit">{Messages.walls.create.button}</Button>
      </Wrapper>
    </Layout>
  )
})

export default ComposeWall
