import React, { memo, ChangeEvent } from 'react'
import { StyledButton } from './Style'

interface IButton extends React.Props<HTMLButtonElement> {
  disabled?: boolean
  children?: React.ReactNode
  onClick?: (event: ChangeEvent<HTMLButtonElement>) => void
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
