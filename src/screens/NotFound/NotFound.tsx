import React, { memo } from 'react'

// Comps
import { Container, Row, Col } from 'reactstrap'

export const NotFound = memo(() => (
  <Container>
    <Row>
      <Col xs={12}>
        <h3>No encontrado</h3>
      </Col>
    </Row>
  </Container>
))
