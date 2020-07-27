import React, { memo } from 'react'

import { Circle, Text, CircleWrapper, Image, Logout, WelcomeUser, Hello, NameContainer, Name, Icon } from './Style'

// Comps
import { Container, Row, Col } from 'reactstrap'

//components
import { Title } from '../../components/Title'
import { HomeButton } from '../../components/HomeButton'
import { NavButton } from '../../components/NavButton'


export const Home = memo(() => (
  <Container>
    <Row>
      <Col xs={12}>
        <WelcomeUser>
          <Hello>Hola,</Hello>
          <NameContainer>
            <Name>Gryffindor 52</Name>
            <Icon className="icon-img" src={require("../../assets/bell.svg")} alt="icon"/>
          </NameContainer>
        </WelcomeUser>
        <CircleWrapper>
          <Text>Este nombre se elige al azar.</Text>
          <Circle><Image className="icon-img" src={require("../../assets/user-edit.svg")} alt="icon"/></Circle>
        </CircleWrapper>
        <HomeButton />
        <Title title="¿Qué podemos hacer por ti?"/>
        <NavButton text="Muros en los que participas"/>
        <NavButton text="Lo último que compartiste"/>
        <NavButton text="Explora lo que otros comparten"/>
        <Logout to="/logout">Salir de su cuenta</Logout>
      </Col>
    </Row>
  </Container>
))
