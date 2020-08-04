import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

export const UserHelp = styled.div`
  flex-grow: 1;
  span {
    font-size: 16px;
    margin: 0;
  }

  h4 {
    font-size: 18px;
    margin: 0;
  }

  small {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`

export const Logout = styled(Link)`
  color: ${({ theme: { colors } }) => colors.primary} !important;
  text-decoration: none !important;
  display: flex;
  justify-content: center;
  padding: 16px;
`
