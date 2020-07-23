import React, { memo, ChangeEvent } from 'react'
import { Item, Circle, Text, Button } from './Style'

interface IListItem extends React.Props<HTMLDivElement> {
  onClick?: (event: ChangeEvent<HTMLDivElement>) => void
}

export const ListItem = memo(() => (
  <Item>
    <div>
      <Circle style={{ backgroundColor: '#569FFF' }}>C</Circle>
      <Text>Todo el mundo se sentía incómodo cuando estab...</Text>
    </div>

    <div>
      <Button>...</Button>
    </div>
  </Item>
))
