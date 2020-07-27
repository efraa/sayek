import React, { useContext } from 'react'
import { AuthenticationService } from '../../api/services/AuthenticationService'
import { Link } from 'react-router-dom'
import { Messages } from '../../data/messageConstants'
import { AuthContext } from '../../store/contexts/AuthContext'

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
} from './Style'

export const Login: React.FC = () => {
  const {
    state: { location },
  } = useContext(AuthContext)
  const onClick = (uri: string) =>
    (window.location.href = `${uri}/?continue=${location}`)

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
                onClick={() => onClick(AuthenticationService.authFacebook())}
              >
                <span>{Messages.login.facebookButton}</span>
              </LoginButton>
              <LoginButton
                style={{
                  backgroundImage: `url(${GoogleAsset})`,
                }}
                onClick={() => onClick(AuthenticationService.authGoogle())}
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
