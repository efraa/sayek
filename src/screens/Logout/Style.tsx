import styled from 'styled-components'

export const LogoutScreen = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 38px;

  button,
  a,
  input {
    &:first-child {
      margin-right: 16px;
    }
  }
`

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 24px;
`

export const Text = styled.p`
  text-align: center;
`
