import styled from 'styled-components'

export const Item = styled.div`
  font-size: 16px;
  border: solid 1px ${({ theme: { colors } }) => colors.gray};
  border-radius: 12px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-right: 8px;
`

export const Text = styled.p`
  font-size: 16px;
`

export const Button = styled.button`
  width: 35px;
  height: 35px;
  min-height: 35px;
  background-color: ${({ theme: { colors } }) => colors.secondary};
`
