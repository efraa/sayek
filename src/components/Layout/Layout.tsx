import React, { memo, ChangeEvent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Head } from '../Head'

interface ILayout extends React.Props<HTMLDivElement> {
  onClick?: (event: ChangeEvent<HTMLDivElement>) => void
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
