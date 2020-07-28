import React, { memo } from 'react'
import styled from 'styled-components'

const Text = styled.h3`
  font-size: 20px;
  color: ${({ theme: { colors } }) => colors.black};
  margin-bottom: 24px;
`
export const Title = memo(({ children }) => <Text>{children}</Text>)
