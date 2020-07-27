import React, { memo } from 'react'

// Comps
import { Container, Row, Col } from 'reactstrap'

//components
import { NavButton } from '../../components/NavButton'

export const Home = memo(() => (
  <Container>
    <Row>
      <Col xs={12}>
        <NavButton text="Muros en los que participas"/>
      </Col>
    </Row>
  </Container>
))
