import React, { memo } from 'react'

// Comps
import { WallsContainer } from '../../containers/WallsContainer'
import { Head } from '../../components/Head'
import { Container, Row, Col } from 'reactstrap'

export const Walls = memo(() => (
  <Container>
    <Row>
      <Head title="Lo último que compartiste" />
      <WallsContainer />
    </Row>
  </Container>
))
