import styled from 'styled-components'

export const Item = styled.div`
  font-size: 16px;
  border: solid 1px ${({ theme: { colors } }) => colors.gray};
  border-radius: 12px;
  padding: 24px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`

export const Circle = styled.div`
  height: 50px;
  width: 50px;
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

export const CircleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.p`
  font-size: 16px;
  color: ${({ theme: { colors } }) => colors.black};
`

export const Button = styled.button`
  width: 35px;
  height: 35px;
  min-height: 35px;
  background-color: ${({ theme: { colors } }) => colors.secondary};
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
