import React, { memo } from 'react'
import { Arrow } from '../Common'
import { Item, Circle, Text, CircleWrapper } from './Style'

interface IComposeButton extends React.HTMLProps<HTMLDivElement> {
  to: string
}

export const ComposeButton: React.FC<IComposeButton> = memo(
  ({ to, children }) => (
    <Item to={to}>
      <CircleWrapper>
        <Circle>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.324"
            height="16.56"
            viewBox="0 0 17.324 16.56"
          >
            <g transform="translate(0.833 0.833)">
              <path
                d="M10,16.667h7.829"
                transform="translate(-2.171 -1.774)"
                fill="none"
                stroke="#363636"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.667"
              />
              <path
                d="M14.243,2.939a1.845,1.845,0,0,1,2.61,2.61L5.979,16.422l-3.479.87.87-3.479Z"
                transform="translate(-2.5 -2.399)"
                fill="none"
                stroke="#363636"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.667"
              />
            </g>
          </svg>
        </Circle>
        <Text>{children}</Text>
      </CircleWrapper>
      <Arrow />
    </Item>
  )
)
