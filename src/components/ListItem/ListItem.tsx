import React, { memo, ChangeEvent } from 'react'
import { Col } from 'reactstrap'
import { Item, Circle, Text, Button, CircleWrapper } from './Style'

interface IListItem extends React.Props<HTMLDivElement> {
  onClick?: (event: ChangeEvent<HTMLDivElement>) => void
}

export const ListItem = memo(() => (
  <Col xs={12}>
    <Item>
      <CircleWrapper>
        <Circle>C</Circle>
        <Text>Todo el mundo se sentía incómodo cuando estab...</Text>
      </CircleWrapper>

      <div>
        <Button>...</Button>
      </div>
    </Item>
  </Col>
))
