import React, { memo, ChangeEvent } from 'react'
import { Col } from 'reactstrap'
import { Item, Text, Image } from './Style'

interface INavButton extends React.Props<HTMLDivElement> {
  onClick?: (event: ChangeEvent<HTMLDivElement>) => void
  text: string
}

export const NavButton: React.FC<INavButton> = memo((props) => (
  <Col xs={12}>
    <Item>
      <Text> { props.text } </Text>
      <div>
        <Image className="icon-img" src={require("../../assets/chevron-right.svg")} alt="icon"/>
      </div>
    </Item>
  </Col>
))
