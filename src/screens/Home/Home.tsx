import React, { useContext } from 'react'
import { Paths } from '../../routes/Paths'
import { AuthContext } from '../../Authentication'

import { Container, Row, Col } from 'reactstrap'
import { Screen, Logout, UserHelp, Header } from './Style'
import { Title } from '../../components/Common'
import { ComposeButton } from '../../components/ComposeButton'
import { ActionButton } from '../../components/ActionButton'
import { Messages } from '../../data/messageConstants'

export const Home = () => {
  const {
    state: { user },
  } = useContext(AuthContext)

  return (
    <Screen>
      <Container fluid>
        <Row>
          <Col xs={12}>
            <Header>
              <UserHelp>
                <span>{Messages.home.hello}</span>
                <h4>{user?.username}</h4>
                <small>{Messages.home.usernameHelp}</small>
              </UserHelp>
            </Header>
            <ComposeButton to={Paths.walls.compose}>
              {Messages.walls.create.title}
            </ComposeButton>
            <Title>{Messages.home.help}</Title>
            {Messages.home.actions.map(({ title, id, to }) => (
              <ActionButton key={id} to={to}>
                {title}
              </ActionButton>
            ))}
            <Logout to={Paths.logout}>{Messages.logout.title}</Logout>
          </Col>
        </Row>
      </Container>
    </Screen>
  )
}
