import React, { memo } from 'react'

// Comps
import { Container, Row, Col } from 'reactstrap'

//components
import { HomeButton } from '../../components/HomeButton'

export const Home = memo(() => (
  <Container>
    <Row>
      <Col xs={12}>
        <HomeButton />
      </Col>
    </Row>
  </Container>
))
