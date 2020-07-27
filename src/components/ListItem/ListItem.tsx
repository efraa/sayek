import React, { memo, ChangeEvent } from 'react'
import { Settings } from '../Common'
import { Item, Circle, Text, CircleWrapper } from './Style'

interface IListItem extends React.Props<HTMLDivElement> {
  onClick?: (event: ChangeEvent<HTMLDivElement>) => void
}

export const ListItem: React.FC<IListItem> = memo(() => (
  <Item>
    <CircleWrapper to="/">
      <Circle>C</Circle>
      <Text>Cuando estábamos en secundaria</Text>
    </CircleWrapper>
    <Settings />
  </Item>
))
