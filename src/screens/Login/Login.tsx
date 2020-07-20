import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ILogin } from './ILogin'

// Components
import LoginAsset from '../../assets/login.svg'
import FacebookAsset from '../../assets/logo-facebook.svg'
import GoogleAsset from '../../assets/logo-google.svg'
import { Container, Row, Col } from 'reactstrap'
import { LoginScreen, Disclaimer, LoginImage, LoginButton, LoginSocial } from './components/StyledComponents'

export const Login: React.FC<ILogin> = () => {
  const onClick = (uri: string) => window.location.href = uri

  return (
    <LoginScreen>
      <Container>
        <Row>
          <Col xs={12}>
            <LoginImage>
              <img src={LoginAsset} alt="" />
            </LoginImage>
            <h1>Regístrese o inicie sesión con su cuenta.</h1>
            <LoginSocial>
              <LoginButton style={{
                backgroundImage: `url(${FacebookAsset})`
              }} onClick={() => onClick(process.env.REACT_APP_API_AUTH_FACEBOOK as string)}>
                <span>Continuar con Facebook</span>
              </LoginButton>
              <LoginButton style={{
                backgroundImage: `url(${GoogleAsset})`
              }} onClick={() => onClick(process.env.REACT_APP_API_AUTH_GOOGLE as string)}>
                <span>Continuar con Google</span>
              </LoginButton>
              <LoginButton>
                <span>Volver</span>
              </LoginButton>
            </LoginSocial>

            <Disclaimer>
              <p>Al continuar, usted acepta los <Link to="/"> Términos de servicios</Link> & <Link to="/"> Políticas 
                de privacidad</Link> de Sayek App.
              </p>
            </Disclaimer>
          </Col>
        </Row>
      </Container>
    </LoginScreen>
  )
}
