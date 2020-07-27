import React, { memo } from 'react'
import { Text } from './Style'

interface ITitle extends React.Props<HTMLDivElement> {
  title: string
}

export const Title: React.FC<ITitle> = memo((props) => (
  <Text>{ props.title }</Text>
))
