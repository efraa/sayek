import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Screen = styled.div`
  display: flex;
`
export const Circle = styled.div`
  width: 35px;
  height: 35px;
  border: 2px solid ${({ theme: { colors } }) => colors.gray};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 10px;
`

export const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 20px 20px;
`

export const Text = styled.p`
  font-size: 14px;
  color: ${({ theme: { colors } }) => colors.pink};
`

export const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
export const Logout = styled(Link)`
  color: ${({ theme: { colors } }) => colors.pink};
  text-decoration: none !important;
  display: flex;
  justify-content: center;
  margin-top: 25px;
`

export const WelcomeUser = styled.div`
  flex-direction: column;
  margin: 0 20px;
`
export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Hello = styled.p`
  color: ${({ theme: { colors } }) => colors.gray};
  font-size: 16px;
`

export const Name = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.black};
`
export const Icon = styled.img`
  width: 55px;
  height: 55px;
`