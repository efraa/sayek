import React, { memo } from 'react'
import { Settings } from '../Common'
import { Item, Circle, Text, CircleWrapper } from './Style'

interface IListItem extends React.HTMLProps<HTMLDivElement> {
  to: string
}

export const ListItem: React.FC<IListItem> = memo(({ to }) => (
  <Item>
    <CircleWrapper to={to}>
      <Circle>C</Circle>
      <Text>Cuando estábamos en secundaria</Text>
    </CircleWrapper>
    <Settings />
  </Item>
))
