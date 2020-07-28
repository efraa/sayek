import React, { memo } from 'react'
import { StyledButton } from './Style'

interface IButton extends React.HTMLProps<HTMLButtonElement> {
  secondary?: boolean
  width?: string
  as?: any
  to?: string
}

export const Button = memo((props: IButton) => (
  <StyledButton
    type="button"
    {...props}
    secondary={props.secondary?.toString()}
  />
))
