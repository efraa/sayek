import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Item = styled.div`
  font-size: 16px;
  border: solid 1px ${({ theme: { colors } }) => colors.gray};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
  padding-right: 16px;
`

export const Circle = styled.div`
  height: 50px;
  width: 50px;
  min-height: 50px;
  min-width: 50px;
  border-radius: 100%;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  color: white;
  background-color: ${({ theme: { colors } }) => colors.primary};
`

export const CircleWrapper = styled(Link)`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 24px 16px;
  text-decoration: none !important;
`

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.black};
  line-height: 20px;
`
