import styled from 'styled-components'

export const LoginScreen = styled.div`
  margin-bottom: 70px;

  h1 {
    margin-bottom: 26px;
    text-align: center;
  }
`

export const Disclaimer = styled.div`
  margin: auto;
  font-size: 14px;
  max-width: 300px;
  text-align: center;

  p {
    font-size: 14px;
    line-height: 24px;
  }

  a {
    color: ${({ theme: { colors } }) => colors.primary};
    text-decoration: none;
    line-height: 24px;
  }
`

export const LoginImage = styled.div`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 34px;

  img {
    max-width: 276px;
    width: 100%;
  }
`

export const LoginSocial = styled.div`
  margin-bottom: 34px;
`

export const LoginButton = styled.button`
  border: 1px solid ${({ theme: { colors } }) => colors.gray};
  border-radius: 100px;
  padding: 20px 0;
  width: 100%;
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme: { colors } }) => colors.black};
  display: inline-block;
  background-repeat: no-repeat;
  background-size: 18px;
  background-position: 20px;
  background-color: white;
`
