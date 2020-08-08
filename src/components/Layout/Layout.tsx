import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Head } from '../Head'
import NotFound from '../../screens/NotFound'
import { Spinner } from '../Spinner'

interface ILayout extends React.HTMLProps<HTMLDivElement> {
  title: string
  show?: boolean
  isLoading?: boolean
  error?: boolean
}

export const Layout: React.FC<ILayout> = ({
  title,
  children,
  show = true,
  isLoading = false,
  error = false,
}) =>
  !error ? (
    show && !isLoading ? (
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Head title={title} />
            {children}
          </Col>
        </Row>
      </Container>
    ) : (
      <Spinner />
    )
  ) : (
    <NotFound />
  )
