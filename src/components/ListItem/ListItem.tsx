import React, { memo } from 'react'
import { firstLetter } from '../../helpers/firstLetter'
import { truncate } from '../../helpers/truncate'
import { Settings } from '../Common'
import { Item, Circle, Text, CircleWrapper } from './Style'

interface IListItem extends React.HTMLProps<HTMLDivElement> {
  to: string
  onClick: () => void
  text: string
}

export const ListItem: React.FC<IListItem> = memo(({ to, onClick, text }) => (
  <Item>
    <CircleWrapper to={to}>
      <Circle>{firstLetter(text)}</Circle>
      <Text>{truncate(text, 38)}</Text>
    </CircleWrapper>
    <Settings onClick={onClick} />
  </Item>
))
