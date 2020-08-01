import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import { truncate } from '../../helpers/truncate'
import { Arrow } from '../Common'
import { StyledHead, Title, Button, Wrapper } from './Style'

interface IHead {
  title: string
}

export const Head: React.FC<IHead> = memo(({ title }) => {
  const history = useHistory()

  return (
    <StyledHead>
      <Wrapper>
        <Button onClick={() => history.goBack()}>
          <Arrow />
        </Button>
        <Title>{truncate(title, 30)}</Title>
      </Wrapper>
    </StyledHead>
  )
})
