import React, { memo, ChangeEvent } from 'react'
import { Col } from 'reactstrap'
import { Item, Circle, Text, Image, CircleWrapper } from './Style'

interface HomeButton extends React.Props<HTMLDivElement> {
  onClick?: (event: ChangeEvent<HTMLDivElement>) => void
}

export const HomeButton = memo(() => (
  <Col xs={12}>
    <Item>
      <CircleWrapper>
        <Circle><img className="icon-img" src={require("../../assets/feather.svg")} alt="icon"/></Circle>
        <Text>¿Quieres agregar un muro?</Text>
      </CircleWrapper>

      <div>
        <Image className="icon-img" src={require("../../assets/chevron-right.svg")} alt="icon"/>
      </div>
    </Item>
  </Col>
))
