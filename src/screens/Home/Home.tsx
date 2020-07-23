import React, { memo } from 'react'

// Comps
import { Container, Row, Col } from 'reactstrap'

export const Home = memo(() => (
  <Container>
    <Row>
      <Col xs={12}>
        <h3>Home</h3>
      </Col>
    </Row>
  </Container>
))
