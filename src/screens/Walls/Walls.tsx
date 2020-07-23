import React, { memo } from 'react'

// Comps
import { Container, Row, Col } from 'reactstrap'

export const Walls = memo(() => (
  <Container>
    <Row>
      <Col xs={12}>
        <h3>Walls</h3>
      </Col>
    </Row>
  </Container>
))
