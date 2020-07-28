import React, { memo } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Head } from '../Head'

interface ILayout extends React.HTMLProps<HTMLDivElement> {
  title: string
}

export const Layout: React.FC<ILayout> = memo(({ title, children }) => (
  <Container>
    <Row>
      <Col xs={12}>
        <Head title={title} />
        {children}
      </Col>
    </Row>
  </Container>
))
