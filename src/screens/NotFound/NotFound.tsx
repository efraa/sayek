import React, { memo } from 'react'

// Comps
import Asset from '../../assets/404.svg'
import { Container, Row, Col } from 'reactstrap'
import { Screen, Image, Text } from './Style'
import { Title } from '../../components/Common'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export const NotFound = memo(() => (
  <Screen>
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Image src={Asset} alt="Not Found" />
          <Title>¡Vaya! No podemos encontrar nada aquí.</Title>
          <Text>
            Lamentablemente, la página que está buscando se ha movido, eliminado
            o nunca existió.
          </Text>
          <Button as={Link} to="/home">
            Ir a Inicio
          </Button>
        </Col>
      </Row>
    </Container>
  </Screen>
))
