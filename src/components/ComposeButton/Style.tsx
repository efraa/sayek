import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Item = styled(Link)`
  font-size: 16px;
  border: solid 1px ${({ theme: { colors } }) => colors.whiteDark};
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
  box-shadow: 0 3px 6px ${({ theme: { colors } }) => colors.whiteDark};
  text-decoration: none !important;
  padding: 16px;
`

export const Circle = styled.div`
  height: 50px;
  width: 50px;
  min-height: 50px;
  min-width: 50px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  background-color: ${({ theme: { colors } }) => colors.whiteDark};
`

export const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

export const Text = styled.p`
  color: ${({ theme: { colors } }) => colors.black};
  line-height: 20px;
  font-size: 14px;
`
