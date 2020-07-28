import React, { memo, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../store/contexts/AuthContext'
import { AuthActions } from '../../store/actions/AuthActions'
import { Messages } from '../../data/messageConstants'

// Comps
import { Container, Row, Col } from 'reactstrap'
import { Button } from '../../components/Button'
import { LogoutScreen, Buttons, Title, Text } from './Style'

export const Logout = memo(() => {
  const history = useHistory()
  const { dispatch } = useContext(AuthContext)
  const onSubmit = () => AuthActions.logout(dispatch)

  return (
    <LogoutScreen>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>{Messages.logout.title}</Title>
            <Text>{Messages.logout.disclaimer}</Text>
            <Buttons>
              <Button secondary onClick={() => history.goBack()}>
                {Messages.back}
              </Button>
              <Button onClick={onSubmit}>{Messages.logout.exit}</Button>
            </Buttons>
          </Col>
        </Row>
      </Container>
    </LogoutScreen>
  )
})
