import React from 'react'
import { config } from '../../config'
import { Link } from 'react-router-dom'
import { Messages } from '../../data/messageConstants'
import { ILogin } from './ILogin'

// Components
import LoginAsset from '../../assets/login.svg'
import FacebookAsset from '../../assets/logo-facebook.svg'
import GoogleAsset from '../../assets/logo-google.svg'
import { Container, Row, Col } from 'reactstrap'
import {
  LoginScreen,
  Disclaimer,
  LoginImage,
  LoginButton,
  LoginSocial,
} from './components/StyledComponents'

export const Login: React.FC<ILogin> = () => {
  const onClick = (uri: string) => (window.location.href = uri)

  return (
    <LoginScreen>
      <Container>
        <Row>
          <Col xs={12}>
            <LoginImage>
              <img src={LoginAsset} alt="" />
            </LoginImage>
            <h1>{Messages.login.title}</h1>
            <LoginSocial>
              <LoginButton
                style={{ backgroundImage: `url(${FacebookAsset})` }}
                onClick={() => onClick(config.auth.facebook)}
              >
                <span>{Messages.login.facebookButton}</span>
              </LoginButton>
              <LoginButton
                style={{
                  backgroundImage: `url(${GoogleAsset})`,
                }}
                onClick={() => onClick(config.auth.google)}
              >
                <span>{Messages.login.googleButton}</span>
              </LoginButton>
              <LoginButton>
                <span>{Messages.back}</span>
              </LoginButton>
            </LoginSocial>

            <Disclaimer>
              <p>
                {Messages.login.disclaimer.one}{' '}
                <Link to="/"> {Messages.login.disclaimer.two}</Link> &{' '}
                <Link to="/">{Messages.login.disclaimer.three}</Link>{' '}
                {Messages.login.disclaimer.four}
              </p>
            </Disclaimer>
          </Col>
        </Row>
      </Container>
    </LoginScreen>
  )
}