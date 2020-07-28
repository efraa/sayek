import React, { memo } from 'react'
import { Arrow } from '../Common'
import { Item, Text } from './Style'

interface IActionButton extends React.HTMLProps<HTMLDivElement> {
  to: string
}

export const ActionButton: React.FC<IActionButton> = memo(
  ({ to, children }) => (
    <Item to={to}>
      <Text>{children}</Text>
      <Arrow />
    </Item>
  )
)
