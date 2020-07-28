import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Item = styled(Link)`
  font-size: 16px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
  text-decoration: none !important;
  padding: 32px 16px;
  background: ${({ theme: { colors } }) => colors.whiteDark};
`

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.black};
  line-height: 20px;
`
