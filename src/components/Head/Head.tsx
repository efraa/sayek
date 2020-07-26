import React, { memo, ChangeEvent } from 'react'
import { StyledHead, Title, Button, Wrapper } from './Style'

interface IHead extends React.Props<HTMLDivElement> {
  onClick?: (event: ChangeEvent<HTMLDivElement>) => void
  title: string
}

export const Head: React.FC<IHead> = memo(({ title }) => (
  <StyledHead>
    <Wrapper>
      <Button>X</Button>
      <Title>{title}</Title>
    </Wrapper>
  </StyledHead>
))
